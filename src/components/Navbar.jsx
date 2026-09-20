import React, { useState } from 'react';

export default function Navbar({ isSoundPlaying, toggleSound, navigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleNav = (e, path) => {
    e.preventDefault();
    closeMobileMenu();
    if (navigate) {
      navigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <header className="site-navbar">
      <div className="container navbar-inner">
        <a 
          href="/" 
          onClick={(e) => handleNav(e, '/')} 
          className="brand-link" 
          aria-label="Strona główna Diyi"
        >
          <div className="brand-logo-rune" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>
          <div>
            <span className="brand-name">Diya</span>
          </div>
          <span className="brand-badge">Oficjalna</span>
        </a>

        {/* Desktop Menu */}
        <nav aria-label="Główna nawigacja" className="desktop-nav-wrap">
          <ul className="nav-links">
            <li><a href="#hero" onClick={() => navigate && navigate('/')}>Start</a></li>
            <li><a href="#o-diyi">O Diyi</a></li>
            <li><a href="#minecraft">Minecraft</a></li>
            <li><a href="#muzyka">Muzyka</a></li>
            <li><a href="#grafika">Grafika & Modele</a></li>
            <li><a href="#wydarzenia">Wydarzenia</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </nav>

        {/* Akcje: Gra, Linki, Sterowanie dźwiękiem i Mobile toggle */}
        <div className="nav-controls">
          <button 
            onClick={(e) => handleNav(e, '/gra')} 
            className="nav-action-pill game-pill"
            title="Zagraj w minigrę Nakarm Diva"
          >
            <span>🎮 Nakarm Diva</span>
          </button>

          <button 
            onClick={(e) => handleNav(e, '/linki')} 
            className="nav-action-pill links-pill"
            title="Zobacz stronę ze wszystkimi linkami"
          >
            <span>🔗 Linki</span>
          </button>

          <button
            onClick={toggleSound}
            className={`sound-toggle-btn ${isSoundPlaying ? 'playing' : ''}`}
            title="Włącz/wyłącz klimatyczne tło dźwiękowe"
            aria-label="Klimatyczne tło dźwiękowe"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isSoundPlaying ? (
                <>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </>
              ) : (
                <>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </>
              )}
            </svg>
            <span className="sound-toggle-label">{isSoundPlaying ? 'Klimat: Wł.' : 'Klimat'}</span>
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Przełącz menu mobilne"
            aria-expanded={mobileMenuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobilne menu drawer */}
      {mobileMenuOpen && (
        <nav className="mobile-drawer" aria-label="Menu mobilne nawigacji">
          <div className="mobile-drawer-links">
            <a href="#hero" onClick={(e) => handleNav(e, '/')}>Start</a>
            <a href="#o-diyi" onClick={closeMobileMenu}>Kim jest Diya?</a>
            <a href="#minecraft" onClick={closeMobileMenu}>Minecraft</a>
            <a href="#muzyka" onClick={closeMobileMenu}>Muzyka</a>
            <a href="#grafika" onClick={closeMobileMenu}>Modele & Grafika</a>
            <a href="#wydarzenia" onClick={closeMobileMenu}>Wydarzenia</a>
            <a href="#kontakt" onClick={closeMobileMenu}>Social & Kontakt</a>
          </div>
          <div className="mobile-drawer-actions">
            <button 
              onClick={(e) => handleNav(e, '/gra')} 
              className="drawer-action-btn drawer-game-btn"
            >
              🎮 Zagraj: Nakarm Diva!
            </button>
            <button 
              onClick={(e) => handleNav(e, '/linki')} 
              className="drawer-action-btn drawer-links-btn"
            >
              🔗 Wszystkie linki (Bio page)
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
