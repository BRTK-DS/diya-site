import React from 'react';

export default function MinecraftSection() {
  const animations = [
    {
      title: 'Opowieść Wigilijna Minecraftowych YouTuberów',
      desc: 'Pierwsza duża animowana opowieść Diyi, ręcznie rysowana animacja 2D zapoczątkowująca większe uniwersum, zapowiedziana utworem „Carol of the Bells / Szczedryk”.',
      url: 'https://youtu.be/bFmxO6MIZ1Y'
    },
    {
      title: 'Mięta Hood',
      desc: 'Minecraftowa interpretacja legendy o Robin Hoodzie w technice 2,5D. Modele Live2D, makiety zbudowane w Minecrafcie oraz oryginalne głosy twórców.',
      url: 'https://youtu.be/aSgSWWczlUM'
    },
    {
      title: 'Królowa Śniegu według Minecraft',
      desc: 'Autorska adaptacja baśni Andersena i prequel Opowieści Wigilijnej. Wystąpiło w niej ponad 20 znanych YouTuberów wcielających się w postacie uniwersum.',
      url: 'https://youtu.be/2VGYm60oZ2A'
    }
  ];

  return (
    <section id="minecraft" className="section" aria-label="Świat Minecraft Diyi">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Główny Filar</span>
          <h2 className="section-title">Minecraft & Storytelling</h2>
          <p className="section-subtitle">
            Minecraft jest głównym filarem działalności Diyi na kanale CallMeDiya, ale rzadko pozostaje wyłącznie zwykłą rozgrywką. 
            Dla Diyi to przestrzeń do opowiadania wielowątkowych historii, budowania postaci i tworzenia filmów animowanych.
          </p>
        </div>

        {/* Dwa główne projekty: SAGA RP i Anarchia SMP 3 */}
        <div className="mc-featured-grid">
          {/* Karta SAGA RP */}
          <article className="mc-card">
            <div className="mc-card-header">
              <span className="mc-badge">Projekt Fabularny</span>
              <h3 className="mc-card-title">SAGA RP</h3>
            </div>
            <p className="mc-card-text">
              Fabularny projekt Minecraft powstały z inicjatywy Jheyvu we współpracy z Diyą, łączący roleplay, 
              przygotowany scenariusz, wydarzenia na serwerze i rozbudowaną historię wielu bohaterów.
            </p>
            <p className="mc-card-text">
              Po katastrofalnych wydarzeniach grupa postaci trafia do nieznanego świata. Ich największą nadzieją staje się 
              <strong> Jajo Smoka</strong> — artefakt mogący spełnić życzenie, kryjący jednak mroczne niebezpieczeństwo. 
              Scenariusz łączy rozgrywkę z przygotowanymi scenami i utworami muzycznymi, tworząc serial wewnątrz gry, 
              którego finał prowadzi do dramatycznej wyprawy do Endu.
            </p>
            <div className="mc-card-footer">
              <a
                href="https://www.youtube.com/show/VLPLAjjW8_0oG4M?sbp=QAE%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                </svg>
                <span>Oglądaj SAGA RP</span>
              </a>
            </div>
          </article>

          {/* Karta Anarchia SMP 3 */}
          <article className="mc-card">
            <div className="mc-card-header">
              <span className="mc-badge">Multiplayer & Lore</span>
              <h3 className="mc-card-title">Anarchia SMP 3</h3>
            </div>
            <p className="mc-card-text">
              Jeden z najważniejszych etapów rozwoju minecraftowej działalności Diyi. Projekt mocno związany z twórcami takimi jak 
              <strong> Sagi i Dexsi</strong>, a w materiałach Diyi regularnie pojawiali się Babcia Marysia, Stafson, Szery, LCDX, Dranhis, Rzabek i Creatoreq.
            </p>
            <p className="mc-card-text">
              Dla Diyi Anarchia szybko przestała być jedynie serwerem survivalowym. Na kanale pojawiły się motywy fabularne związane z 
              pojawiającymi się na serwerze <strong>„anomaliami” w postaci mrocznych bytów</strong>. Razem z innymi uczestnikami i widzami, 
              Diya skupiała się na rozwiązaniu mrocznych tajemnic serwera.
            </p>
            <div className="mc-card-footer">
              <a
                href="https://youtube.com/playlist?list=PLEm_4TLMjWI9jIkqgQ0PLvufdmT88uT6y&si=a_0v2nWPBvId60Z6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-amber"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                </svg>
                <span>Oglądaj Anarchia SMP 3</span>
              </a>
            </div>
          </article>
        </div>

        {/* Animacje Minecraft */}
        <div className="mc-animations-block">
          <div className="mc-section-subheader">
            <div>
              <span className="section-tag">2D & Live2D</span>
              <h3 style={{ fontSize: '1.85rem', color: 'var(--text-main)' }}>Animacje Minecraft</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '750px', marginTop: '0.4rem' }}>
                Minecraft stał się również podstawą do tworzenia animowanych adaptacji klasycznych historii. 
                Diya łączy modele Live2D, makiety scenerii zbudowane w klockowym świecie oraz muzyczne interpretacje.
              </p>
            </div>
            <a
              href="https://youtube.com/playlist?list=PLEm_4TLMjWI-aDmmJNlfhM4Ozpxf-08AQ&si=cA4eg2WDFMKZfQnY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Playlista animacji →
            </a>
          </div>

          <div className="mc-anim-cards-row">
            {animations.map((anim, i) => (
              <div key={i} className="mc-anim-card">
                <div className="mc-anim-badge">Film Animowany</div>
                <h4 className="mc-anim-title">{anim.title}</h4>
                <p className="mc-anim-desc">{anim.desc}</p>
                <a
                  href={anim.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mc-anim-link"
                >
                  <span>Oglądaj na YouTube</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Pozostałe przygody w Minecraft z grafikami postaci */}
        <div className="mc-extra-box">
          <div className="mc-extra-text">
            <h4 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.6rem' }}>
              Pozostałe Przygody w Minecraft
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1rem' }}>
              Poza największymi seriami Diya brała udział również w projektach takich jak <strong>NIE WIEM SMP</strong>, 
              <strong>TDM — serwer dla VTuberów</strong> czy <strong>Assassin SMP</strong>. 
              Na kanale regularnie pojawiają się też mniejsze serie: wyzwania, zdobywanie osiągnięć, budowanie, 
              testowanie nowych pomysłów, tutoriale oraz projekty muzyczne wykorzystujące <strong>note blocki</strong>.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65' }}>
              Minecraft jest również przestrzenią do kontaktu z community Diyi — od Q&A i oceniania prac widzów 
              po wspólne wydarzenia i formaty z wpływem widzów na przebieg zabawy.
            </p>
          </div>

          <div className="mc-extra-characters">
            <div className="mc-char-frame" title="Postać z latarnią">
              <img
                src="/assets/graphics/extra/minecraft_lantern.png"
                alt="Minecraft postać z latarnią"
                className="mc-char-img"
              />
            </div>
            <div className="mc-char-frame" title="Postać z mieczem">
              <img
                src="/assets/graphics/extra/minecraft_sword.png"
                alt="Minecraft postać z mieczem"
                className="mc-char-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
