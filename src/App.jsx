import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MinecraftSection from './components/MinecraftSection';
import MusicSection from './components/MusicSection';
import GraphicsPortfolio from './components/GraphicsPortfolio';
import EventsSection from './components/EventsSection';
import ContactAndSupport from './components/ContactAndSupport';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import BioLinksPage from './components/BioLinksPage';
import FeedDivGame from './components/FeedDivGame';
import { useAmbientAudio } from './hooks/useAmbientAudio';
import './App.css';

export default function App() {
  const { isPlaying: isSoundPlaying, toggleSound } = useAmbientAudio();

  const getCleanRoute = () => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (
      path === '/linki' ||
      path === '/linki/' ||
      hash === '#linki' ||
      hash === '#/linki'
    ) {
      return '/linki';
    }
    if (
      path === '/gra' ||
      path === '/gra/' ||
      path === '/nakarmdiva' ||
      path === '/nakarmdiva/' ||
      hash === '#gra' ||
      hash === '#/gra' ||
      hash === '#nakarmdiva' ||
      hash === '#/nakarmdiva'
    ) {
      return '/gra';
    }
    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState(getCleanRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getCleanRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (to) => {
    if (to === currentRoute) return;
    window.history.pushState(null, '', to);
    setCurrentRoute(getCleanRoute());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Przejdź do głównej treści
      </a>

      {/* Animowane tło z iskrami w palecie #f4cdd4, #ffc2c9 i #850044 */}
      <ParticlesBackground />

      {/* RENDEROWANIE W ZALEŻNOŚCI OD ŚCIEŻKI */}
      {currentRoute === '/linki' && (
        <BioLinksPage navigate={navigate} />
      )}

      {currentRoute === '/gra' && (
        <FeedDivGame navigate={navigate} />
      )}

      {currentRoute === '/' && (
        <>
          {/* Belka nawigacyjna z 7 zakładkami + linkami do gry i bio */}
          <Navbar 
            isSoundPlaying={isSoundPlaying} 
            toggleSound={toggleSound} 
            navigate={navigate} 
          />

          <main id="main-content">
            {/* 1. Strona główna (Hero z wyostrzonym brandingiem Diya) */}
            <Hero navigate={navigate} />

            {/* 2. Kim jest Diya? (Biografia, Oś czasu 2018-2026, Kot Div) */}
            <AboutSection />

            {/* 3. Minecraft (SAGA RP, Anarchia SMP 3, Animacje 2D/Live2D, Przygody) */}
            <MinecraftSection />

            {/* 4. Muzyka (DiyaIRL, Iskierka player, Lokacje, Współpraca, Covery) */}
            <MusicSection />

            {/* 5. Modele VTuber i grafika (Modele VTuber, GIF PNG stream avatars, Commissions) */}
            <GraphicsPortfolio />

            {/* 6. Wydarzenia (✨ Coming soon ✨) */}
            <EventsSection />

            {/* 7. Social media, kontakt & Wesprzyj twórczość */}
            <ContactAndSupport />
          </main>

          {/* Stopka z ukrytymi technicznymi tagami SEO */}
          <Footer navigate={navigate} />
        </>
      )}
    </>
  );
}

