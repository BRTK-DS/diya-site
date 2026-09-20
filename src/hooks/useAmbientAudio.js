import { useState, useRef, useEffect } from 'react';

export function useAmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const nodesRef = useRef([]);

  const toggleSound = () => {
    if (isPlaying) {
      // Wyciszanie i zatrzymanie
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
        nodesRef.current = [];
      }
      setIsPlaying(false);
    } else {
      // Inicjalizacja nastrojowej harmonii słowiańsko-nordyckiej (D minor drone z harmonicznymi)
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 2.5); // łagodne wejście
        masterGain.connect(ctx.destination);

        // Ton podstawowy D (146.83 Hz) oraz kwinta A (220 Hz) i oktawa D (293.66 Hz)
        const frequencies = [73.42, 146.83, 220.0, 293.66, 440.0];

        frequencies.forEach((freq, index) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = index % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtelne falowanie wysokości (vibrato/lfo)
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.setValueAtTime(0.2 + index * 0.1, ctx.currentTime);
          lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
          lfo.connect(osc.frequency);
          lfo.start();

          // Poziom głośności poszczególnych harmonicznych
          const individualGain = 0.25 / (index + 1);
          gain.gain.setValueAtTime(individualGain, ctx.currentTime);

          osc.connect(gain);
          gain.connect(masterGain);
          osc.start();

          nodesRef.current.push(osc, lfo);
        });

        setIsPlaying(true);
      } catch (e) {
        console.warn('AudioContext nie mógł zostać uruchomiony:', e);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return { isPlaying, toggleSound };
}
