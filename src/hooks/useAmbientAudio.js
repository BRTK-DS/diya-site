import { useState, useRef, useEffect } from 'react';

const AMBIENT_SRC = '/assets/audio/ambient.mp3';
const TARGET_VOLUME = 0.35; // Subtelna głośność tła (ambient)

export function useAmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  // Inicjalizacja instancji audio
  useEffect(() => {
    const audio = new Audio(AMBIENT_SRC);
    audio.loop = true;
    audio.preload = 'metadata';
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }

    if (isPlaying) {
      // Łagodne wyciszenie (fade-out)
      const step = 0.05;
      fadeIntervalRef.current = setInterval(() => {
        if (audio.volume > step) {
          audio.volume = Math.max(0, audio.volume - step);
        } else {
          audio.volume = 0;
          audio.pause();
          setIsPlaying(false);
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }
      }, 50);
    } else {
      // Start z zerową głośnością i łagodne wejście (fade-in)
      audio.volume = 0;
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            const step = 0.035;
            fadeIntervalRef.current = setInterval(() => {
              if (audio.volume + step < TARGET_VOLUME) {
                audio.volume = Math.min(TARGET_VOLUME, audio.volume + step);
              } else {
                audio.volume = TARGET_VOLUME;
                clearInterval(fadeIntervalRef.current);
                fadeIntervalRef.current = null;
              }
            }, 60);
          })
          .catch((err) => {
            console.warn('Odtwarzanie ambientu zablokowane lub przerwane:', err);
            setIsPlaying(false);
          });
      }
    }
  };

  return { isPlaying, toggleSound };
}
