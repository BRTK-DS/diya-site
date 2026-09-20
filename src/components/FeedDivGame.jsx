import React, { useState, useEffect, useRef } from 'react';

export default function FeedDivGame({ navigate }) {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('start'); // 'start' | 'playing' | 'gameover'
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    try {
      return parseInt(localStorage.getItem('diya_nakarm_diva_highscore') || '0', 10);
    } catch {
      return 0;
    }
  });
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [isSoundMuted, setIsSoundMuted] = useState(false);
  const [shareToast, setShareToast] = useState('');
  const [isNewRecord, setIsNewRecord] = useState(false);

  // Audio Context ref
  const audioCtxRef = useRef(null);

  // Preloaded Game Images
  const imagesRef = useRef({
    bg: null,
    divIdle: null,
    divSuccess: null,
    divFail: null,
    heart: null,
    fish: null,
    meat: null,
    cake: null,
    dynamite: null,
    boot: null,
    poison: null
  });

  // Game internal state ref to avoid closure issues in requestAnimationFrame
  const engineRef = useRef({
    playerX: 300,
    targetX: 300,
    width: 600,
    height: 700,
    playerWidth: 120,
    playerHeight: 120,
    items: [],
    particles: [],
    popups: [],
    speedFactor: 1,
    lastSpawnTime: 0,
    spawnInterval: 1100,
    keys: { left: false, right: false },
    animationId: null,
    score: 0,
    lives: 3,
    combo: 0,
    misses: 0,
    currentMood: 'idle', // 'idle' | 'success' | 'fail'
    moodTimer: 0
  });

  // Initialize Web Audio
  const playSfx = (type) => {
    if (isSoundMuted) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;

      if (type === 'catch') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'star') {
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + i * 0.05);
          gain.gain.setValueAtTime(0.2, now + i * 0.05);
          gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.05 + 0.15);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.05);
          osc.stop(now + i * 0.05 + 0.15);
        });
      } else if (type === 'hazard') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.exponentialRampToValueAtTime(70, now + 0.25);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'gameover') {
        [392, 349.23, 329.63, 261.63].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.12);
          gain.gain.setValueAtTime(0.22, now + i * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.12 + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.12);
          osc.stop(now + i * 0.12 + 0.25);
        });
      }
    } catch {
      // Ignore audio errors if blocked by browser
    }
  };

  // Preload game assets
  useEffect(() => {
    const loadImg = (src) => {
      const img = new Image();
      img.src = src;
      return img;
    };

    imagesRef.current.bg = loadImg('/assets/game/bg_meadow.png');
    imagesRef.current.divIdle = loadImg('/assets/game/div_idle.png');
    imagesRef.current.divSuccess = loadImg('/assets/game/div_success.png');
    imagesRef.current.divFail = loadImg('/assets/game/div_fail.png');
    imagesRef.current.heart = loadImg('/assets/game/heart.png');
    imagesRef.current.fish = loadImg('/assets/game/item_fish.png');
    imagesRef.current.meat = loadImg('/assets/game/item_meat.png');
    imagesRef.current.cake = loadImg('/assets/game/item_cake.png');
    imagesRef.current.dynamite = loadImg('/assets/game/hazard_dynamite.png');
    imagesRef.current.boot = loadImg('/assets/game/hazard_boot.png');
    imagesRef.current.poison = loadImg('/assets/game/hazard_poison.png');
  }, []);

  // Handle Keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowLeft', 'KeyA', 'a', 'A'].includes(e.code || e.key)) {
        engineRef.current.keys.left = true;
      }
      if (['ArrowRight', 'KeyD', 'd', 'D'].includes(e.code || e.key)) {
        engineRef.current.keys.right = true;
      }
    };

    const handleKeyUp = (e) => {
      if (['ArrowLeft', 'KeyA', 'a', 'A'].includes(e.code || e.key)) {
        engineRef.current.keys.left = false;
      }
      if (['ArrowRight', 'KeyD', 'd', 'D'].includes(e.code || e.key)) {
        engineRef.current.keys.right = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Types of items falling (using official game assets)
  const ITEM_TYPES = [
    { type: 'fish', imageKey: 'fish', label: 'Rybka', points: 100, isGood: true, weight: 32, size: 56 },
    { type: 'meat', imageKey: 'meat', label: 'Mięsko', points: 150, isGood: true, weight: 26, size: 58 },
    { type: 'cake', imageKey: 'cake', label: 'Torcik', points: 250, isGood: true, weight: 16, size: 60 },
    { type: 'golden_cake', imageKey: 'cake', label: 'Złoty Przysmak', points: 500, isGood: true, weight: 6, size: 66, isGolden: true },
    { type: 'dynamite', imageKey: 'dynamite', label: 'Dynamit', points: 0, isGood: false, hazard: true, weight: 11, size: 56 },
    { type: 'boot', imageKey: 'boot', label: 'Stary but', points: 0, isGood: false, hazard: true, weight: 11, size: 58 },
    { type: 'poison', imageKey: 'poison', label: 'Trucizna', points: 0, isGood: false, hazard: true, weight: 8, size: 56 }
  ];

  const getRandomItemType = () => {
    const totalWeight = ITEM_TYPES.reduce((acc, item) => acc + item.weight, 0);
    let rand = Math.random() * totalWeight;
    for (const item of ITEM_TYPES) {
      if (rand < item.weight) return item;
      rand -= item.weight;
    }
    return ITEM_TYPES[0];
  };

  // Start game
  const startGame = () => {
    const canvas = canvasRef.current;
    const width = canvas ? canvas.width : 600;
    const height = canvas ? canvas.height : 700;

    engineRef.current = {
      ...engineRef.current,
      playerX: width / 2,
      targetX: width / 2,
      width,
      height,
      playerWidth: 135,
      playerHeight: 135,
      items: [],
      particles: [],
      popups: [],
      speedFactor: 1,
      lastSpawnTime: performance.now(),
      spawnInterval: 1000,
      score: 0,
      lives: 3,
      combo: 0,
      misses: 0,
      currentMood: 'idle',
      moodTimer: 0
    };

    setScore(0);
    setLives(3);
    setCombo(0);
    setIsNewRecord(false);
    setGameState('playing');
  };

  // Main game loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    let lastTime = performance.now();

    const loop = (currentTime) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const engine = engineRef.current;

      // 1. Update Player Position
      if (engine.keys.left) {
        engine.playerX -= 450 * dt;
        engine.targetX = engine.playerX;
      }
      if (engine.keys.right) {
        engine.playerX += 450 * dt;
        engine.targetX = engine.playerX;
      }

      // Smooth lerp towards targetX (from mouse / touch)
      engine.playerX += (engine.targetX - engine.playerX) * Math.min(15 * dt, 1);

      // Clamp player within bounds
      const halfW = engine.playerWidth / 2;
      if (engine.playerX < halfW) engine.playerX = halfW;
      if (engine.playerX > engine.width - halfW) engine.playerX = engine.width - halfW;

      // Speed increases gradually
      engine.speedFactor = 1 + Math.min(engine.score / 2500, 2.5);
      engine.spawnInterval = Math.max(450, 1000 - Math.floor(engine.score / 250) * 45);

      // Mood timer
      if (engine.moodTimer > 0) {
        engine.moodTimer -= dt;
        if (engine.moodTimer <= 0) {
          engine.currentMood = 'idle';
        }
      }

      // 2. Spawn items
      if (currentTime - engine.lastSpawnTime > engine.spawnInterval) {
        engine.lastSpawnTime = currentTime;
        const itemType = getRandomItemType();
        const spawnX = Math.random() * (engine.width - 100) + 50;
        engine.items.push({
          ...itemType,
          x: spawnX,
          y: -50,
          speed: (190 + Math.random() * 85) * engine.speedFactor,
          size: itemType.size || 50,
          rotation: 0,
          rotSpeed: (Math.random() - 0.5) * 2.8
        });
      }

      // 3. Update & Check Collisions
      const playerY = engine.height - 90;
      const basketY = playerY + 25; // Catch zone aligns with Div's held basket
      const basketX = engine.playerX;
      const basketRadius = 46;

      for (let i = engine.items.length - 1; i >= 0; i--) {
        const item = engine.items[i];
        item.y += item.speed * dt;
        item.rotation += item.rotSpeed * dt;

        // Check catch collision
        const dist = Math.hypot(item.x - basketX, item.y - basketY);
        if (dist < basketRadius + item.size / 2) {
          // Caught!
          if (item.isGood) {
            const comboMultiplier = 1 + Math.min(Math.floor(engine.combo / 5) * 0.5, 2.5);
            const earnedPoints = Math.round(item.points * comboMultiplier);
            engine.score += earnedPoints;
            engine.combo += 1;
            setScore(engine.score);
            setCombo(engine.combo);

            // Audio & mood reaction
            if (item.isGolden || engine.combo >= 6) {
              playSfx('star');
              engine.currentMood = 'success';
              engine.moodTimer = 0.6;
            } else {
              playSfx('catch');
              engine.currentMood = 'success';
              engine.moodTimer = 0.35;
            }

            // Spawn floating text
            engine.popups.push({
              x: item.x,
              y: item.y - 12,
              text: `+${earnedPoints}${comboMultiplier > 1 ? ` (x${comboMultiplier})` : ''}`,
              color: item.isGolden ? '#ffd700' : '#f4cdd4',
              alpha: 1,
              life: 0.85
            });

            // Particles burst
            const particleCount = item.isGolden ? 18 : 12;
            for (let p = 0; p < particleCount; p++) {
              const angle = Math.random() * Math.PI * 2;
              const spd = Math.random() * 130 + 40;
              engine.particles.push({
                x: item.x,
                y: item.y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd - 35,
                color: item.isGolden ? '#ffd700' : (p % 2 === 0 ? '#ffc2c9' : '#f4cdd4'),
                size: Math.random() * 5 + 3,
                life: 0.55,
                maxLife: 0.55
              });
            }
          } else {
            // Hazard caught!
            playSfx('hazard');
            engine.lives -= 1;
            engine.combo = 0;
            engine.currentMood = 'fail';
            engine.moodTimer = 0.8;
            setLives(engine.lives);
            setCombo(0);

            // Floating text
            engine.popups.push({
              x: item.x,
              y: item.y - 12,
              text: `-1 ❤️ ${item.label}!`,
              color: '#ff5577',
              alpha: 1,
              life: 1.1
            });

            // Dark red hazard particles
            for (let p = 0; p < 16; p++) {
              const angle = Math.random() * Math.PI * 2;
              const spd = Math.random() * 110 + 35;
              engine.particles.push({
                x: item.x,
                y: item.y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                color: '#850044',
                size: Math.random() * 6 + 3,
                life: 0.65,
                maxLife: 0.65
              });
            }

            if (engine.lives <= 0) {
              endGame();
              return;
            }
          }

          engine.items.splice(i, 1);
          continue;
        }

        // Check if item hit bottom
        if (item.y > engine.height + 40) {
          if (item.isGood) {
            engine.combo = 0;
            setCombo(0);
            engine.misses += 1;
            // Every 3 misses costs 1 life
            if (engine.misses >= 3) {
              engine.misses = 0;
              engine.lives -= 1;
              playSfx('hazard');
              engine.currentMood = 'fail';
              engine.moodTimer = 0.7;
              setLives(engine.lives);

              engine.popups.push({
                x: engine.playerX,
                y: playerY - 25,
                text: '-1 ❤️ Za dużo pominięć!',
                color: '#ff5577',
                alpha: 1,
                life: 1.0
              });

              if (engine.lives <= 0) {
                endGame();
                return;
              }
            }
          }
          engine.items.splice(i, 1);
        }
      }

      // 4. Update Particles
      for (let i = engine.particles.length - 1; i >= 0; i--) {
        const p = engine.particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt;
        if (p.life <= 0) {
          engine.particles.splice(i, 1);
        }
      }

      // 5. Update Popups
      for (let i = engine.popups.length - 1; i >= 0; i--) {
        const pop = engine.popups[i];
        pop.y -= 45 * dt;
        pop.life -= dt;
        pop.alpha = Math.max(0, pop.life / 0.85);
        if (pop.life <= 0) {
          engine.popups.splice(i, 1);
        }
      }

      // 6. RENDER FRAME
      ctx.clearRect(0, 0, engine.width, engine.height);

      // Render Meadow Background
      const bgImg = imagesRef.current.bg;
      if (bgImg && bgImg.complete && bgImg.naturalWidth > 0) {
        // Cover height to maintain meadow proportions with grass at bottom
        const scale = engine.height / bgImg.naturalHeight;
        const renderW = bgImg.naturalWidth * scale;
        const renderX = (engine.width - renderW) / 2;
        ctx.drawImage(bgImg, renderX, 0, renderW, engine.height);

        // Soft atmospheric top shade so score HUD & incoming items have crisp contrast
        const topGrad = ctx.createLinearGradient(0, 0, 0, 160);
        topGrad.addColorStop(0, 'rgba(12, 3, 10, 0.45)');
        topGrad.addColorStop(1, 'rgba(12, 3, 10, 0)');
        ctx.fillStyle = topGrad;
        ctx.fillRect(0, 0, engine.width, 160);
      } else {
        const bgGrad = ctx.createLinearGradient(0, 0, 0, engine.height);
        bgGrad.addColorStop(0, '#09050b');
        bgGrad.addColorStop(1, '#1b0916');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, engine.width, engine.height);
      }

      // Render Falling Items (Official Graphics)
      for (const item of engine.items) {
        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.rotation);

        const itemImg = imagesRef.current[item.imageKey];
        const halfS = item.size / 2;

        if (item.isGolden) {
          ctx.shadowColor = '#ffd700';
          ctx.shadowBlur = 18;
        } else if (!item.isGood) {
          ctx.shadowColor = 'rgba(255, 30, 70, 0.65)';
          ctx.shadowBlur = 12;
        } else {
          ctx.shadowColor = 'rgba(255, 194, 201, 0.4)';
          ctx.shadowBlur = 10;
        }

        if (itemImg && itemImg.complete && itemImg.naturalWidth > 0) {
          ctx.drawImage(itemImg, -halfS, -halfS, item.size, item.size);
        } else {
          // Fallback emoji if image loading
          ctx.font = `${item.size}px sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(item.isGood ? '🐟' : '💣', 0, 0);
        }
        ctx.restore();
      }

      // Render Particles
      for (const p of engine.particles) {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      // Render Player: Ground Shadow + Div with Basket
      // 1) Soft shadow on the meadow ground under Div
      ctx.save();
      ctx.fillStyle = 'rgba(15, 30, 10, 0.35)';
      ctx.beginPath();
      ctx.ellipse(engine.playerX, playerY + 52, 48, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 2) Select Div sprite based on reaction mood
      let divImg = imagesRef.current.divIdle;
      if (engine.currentMood === 'success') {
        divImg = imagesRef.current.divSuccess || imagesRef.current.divIdle;
      } else if (engine.currentMood === 'fail') {
        divImg = imagesRef.current.divFail || imagesRef.current.divIdle;
      }

      const dw = engine.playerWidth;  // 125
      const dh = engine.playerHeight; // 125
      const dx = engine.playerX - dw / 2;
      const dy = playerY - dh / 2;

      ctx.save();
      // Subtle mood aura glow
      if (engine.currentMood === 'success') {
        ctx.shadowColor = 'rgba(255, 215, 0, 0.65)';
        ctx.shadowBlur = 18;
      } else if (engine.currentMood === 'fail') {
        ctx.shadowColor = 'rgba(255, 60, 90, 0.6)';
        ctx.shadowBlur = 16;
      } else {
        ctx.shadowColor = 'rgba(255, 194, 201, 0.35)';
        ctx.shadowBlur = 12;
      }

      if (divImg && divImg.complete && divImg.naturalWidth > 0) {
        // Div already holds the wicker basket in all 3 official sprites!
        ctx.drawImage(divImg, dx, dy, dw, dh);
      } else {
        // Fallback
        ctx.fillStyle = '#1c1c22';
        ctx.beginPath();
        ctx.arc(engine.playerX, playerY, 40, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffc2c9';
        ctx.font = '32px sans-serif';
        ctx.fillText('🐈⬛', engine.playerX, playerY);
      }
      ctx.restore();

      // Render Floating Popups
      ctx.textAlign = 'center';
      ctx.font = 'bold 18px "Cinzel", "Plus Jakarta Sans", sans-serif';
      for (const pop of engine.popups) {
        ctx.fillStyle = pop.color;
        ctx.globalAlpha = pop.alpha;
        ctx.shadowColor = 'rgba(0,0,0,0.85)';
        ctx.shadowBlur = 6;
        ctx.fillText(pop.text, pop.x, pop.y);
      }
      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;

      // Loop
      engine.animationId = requestAnimationFrame(loop);
    };

    engineRef.current.animationId = requestAnimationFrame(loop);

    return () => {
      if (engineRef.current.animationId) {
        cancelAnimationFrame(engineRef.current.animationId);
      }
    };
  }, [gameState, isSoundMuted]);

  // End game
  const endGame = () => {
    if (engineRef.current.animationId) {
      cancelAnimationFrame(engineRef.current.animationId);
    }
    playSfx('gameover');

    const finalScore = engineRef.current.score;
    if (finalScore > highScore) {
      setHighScore(finalScore);
      setIsNewRecord(true);
      try {
        localStorage.setItem('diya_nakarm_diva_highscore', finalScore.toString());
      } catch (err) {
        console.error(err);
      }
    }
    setScore(finalScore);
    setGameState('gameover');
  };

  // Canvas Mouse & Touch controls
  const handlePointerMove = (e) => {
    if (gameState !== 'playing') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const targetX = (clientX - rect.left) * scaleX;
    engineRef.current.targetX = targetX;
  };

  // Share score
  const handleShareScore = async () => {
    const text = `Mój wynik w grze „Nakarm Diva” na oficjalnej stronie Diyi to ${score.toLocaleString()} pkt! 🐈⬛ Spróbuj pobić mój rekord na https://diya.com.pl/gra`;
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        setShareToast('Skopiowano wynik do schowka! Możesz wkleić go na Discordzie lub X.');
        setTimeout(() => setShareToast(''), 3500);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="game-page-wrapper">
      <div className="container game-container">
        {/* Górny pasek nawigacyjny powrotu */}
        <div className="game-top-nav">
          <button onClick={() => navigate('/')} className="game-back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Wróć do strony głównej diya.com.pl</span>
          </button>

          <button
            onClick={() => setIsSoundMuted(!isSoundMuted)}
            className="game-sound-btn"
            title={isSoundMuted ? 'Włącz dźwięki' : 'Wycisz dźwięki'}
          >
            {isSoundMuted ? '🔇 Dźwięk: Wył.' : '🔊 Dźwięk: Wł.'}
          </button>
        </div>

        {/* Nagłówek gry */}
        <div className="game-header-section">
          <div className="game-badge">Oficjalna Minigra Diyi</div>
          <h1 className="game-main-title">NAKARM DIVA</h1>
          <p className="game-story-intro">
            Div zgłodniał. Znowu… 🐈⬛<br />
            Pomóż kotu Diyi złapać do koszyka jak najwięcej spadającego jedzenia. 
            Poruszaj Divem w lewo i prawo, łap smakołyki, unikaj rzeczy, których zdecydowanie nie powinien jeść, 
            i spróbuj pobić swój rekord!
          </p>
        </div>

        {/* Pole Gry */}
        <div className="game-stage-wrapper">
          {/* HUD gry */}
          <div className="game-hud-bar">
            <div className="hud-metric">
              <span className="hud-label">Punkty</span>
              <span className="hud-value">{score.toLocaleString()}</span>
            </div>

            <div className="hud-metric">
              <span className="hud-label">Życia</span>
              <div className="hud-hearts" aria-label={`Pozostałe życia: ${lives}`}>
                {[1, 2, 3].map((h) => (
                  <img
                    key={h}
                    src="/assets/game/heart.png"
                    alt={h <= lives ? 'Aktywne serce' : 'Utracone serce'}
                    className={`hud-heart-img ${h <= lives ? 'active' : 'lost'}`}
                  />
                ))}
              </div>
            </div>

            <div className="hud-metric">
              <span className="hud-label">Combo</span>
              <span className={`hud-value combo-badge ${combo >= 5 ? 'frenzy' : ''}`}>
                x{combo}
              </span>
            </div>

            <div className="hud-metric">
              <span className="hud-label">Najlepszy</span>
              <span className="hud-value best-value">{highScore.toLocaleString()}</span>
            </div>
          </div>

          {/* Canvas z interakcją myszy/dotyku */}
          <div className="canvas-holder">
            <canvas
              ref={canvasRef}
              width={600}
              height={700}
              className="game-canvas"
              onMouseMove={handlePointerMove}
              onTouchMove={handlePointerMove}
              onTouchStart={handlePointerMove}
            />

            {/* Ekran Startowy */}
            {gameState === 'start' && (
              <div className="game-overlay-screen start-screen">
                <div className="screen-content">
                  <div className="start-div-preview">
                    <img src="/assets/game/div_idle.png" alt="Div z koszykiem" className="start-div-avatar" />
                  </div>
                  <h2>Gotowy nakarmić Diva?</h2>
                  <p className="start-tips">
                    🐭 <strong>Sterowanie:</strong> Ruszaj myszką, przeciągaj palcem po ekranie lub używaj klawiszy <strong>← → / A D</strong>.
                  </p>
                  <div className="items-legend">
                    <div className="legend-group good">
                      <span className="legend-title">Smakołyki (+punkty):</span>
                      <div className="legend-icons">
                        <span className="legend-item"><img src="/assets/game/item_fish.png" alt="Rybka" /> Rybka (+100)</span>
                        <span className="legend-item"><img src="/assets/game/item_meat.png" alt="Mięsko" /> Mięsko (+150)</span>
                        <span className="legend-item"><img src="/assets/game/item_cake.png" alt="Torcik" /> Torcik (+250)</span>
                      </div>
                    </div>
                    <div className="legend-group bad">
                      <span className="legend-title">Zagrożenia (-1 ❤️):</span>
                      <div className="legend-icons">
                        <span className="legend-item"><img src="/assets/game/hazard_dynamite.png" alt="Dynamit" /> Dynamit</span>
                        <span className="legend-item"><img src="/assets/game/hazard_boot.png" alt="But" /> Stary but</span>
                        <span className="legend-item"><img src="/assets/game/hazard_poison.png" alt="Trucizna" /> Trucizna</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={startGame} className="btn btn-primary start-btn">
                    🎮 ROZPOCZNIJ GRĘ
                  </button>
                </div>
              </div>
            )}

            {/* Ekran Game Over */}
            {gameState === 'gameover' && (
              <div className="game-overlay-screen gameover-screen">
                <div className="screen-content">
                  <div className="gameover-div-icon">
                    <img src="/assets/game/div_fail.png" alt="Smutny Div" className="gameover-div-avatar" />
                  </div>

                  <h2 className="gameover-title">Koniec rundy!</h2>
                  
                  {isNewRecord && (
                    <div className="new-record-badge">🎉 Nowy Rekord Życiowy! 🎉</div>
                  )}

                  <div className="gameover-score-box">
                    <span className="gameover-score-label">Twój wynik:</span>
                    <span className="gameover-score-number">{score.toLocaleString()}</span>
                    <span className="gameover-best-note">Najlepszy wynik: {highScore.toLocaleString()}</span>
                  </div>

                  <div className="gameover-actions">
                    <button onClick={startGame} className="btn btn-primary">
                      🔄 Zagraj ponownie
                    </button>
                    <button onClick={handleShareScore} className="btn btn-secondary">
                      📢 Pochwal się wynikiem
                    </button>
                  </div>

                  {shareToast && (
                    <div className="share-toast-msg">{shareToast}</div>
                  )}

                  <div className="gameover-community-links">
                    <a
                      href="https://discord.gg/73WYGsAXzx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="community-btn discord-btn"
                    >
                      Dołącz do Krainy Ryżowych Baśni →
                    </a>
                    <a
                      href="https://youtube.com/@callmediya?si=zy5s41c4L22otCb1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="community-btn youtube-btn"
                    >
                      Zobacz Diya na YouTube →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Opis pod grą z wytycznych */}
        <div className="game-lore-description">
          <div className="lore-card-inner">
            <div className="lore-div-layout">
              <img src="/assets/game/div_success.png" alt="Radosny Div" className="lore-div-illu" />
              <div className="lore-div-text-wrap">
                <h2 className="lore-div-heading">Kim jest Div?</h2>
                <p className="lore-div-text">
                  <strong>Div to czarny, zmiennokształtny kot towarzyszący Diyi</strong> i jedna z postaci związanych z jej vtuberskim lore. 
                  Pojawia się w jej projektach, grafikach i historii postaci.
                </p>
                <div className="lore-card-footer">
                  <button onClick={() => navigate('/linki')} className="btn btn-secondary">
                    🔗 Wszystkie linki Diyi (Bio)
                  </button>
                  <button onClick={() => navigate('/')} className="btn btn-amber">
                    ✨ Poznaj pełną historię Diyi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
