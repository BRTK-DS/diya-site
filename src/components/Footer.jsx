import React from 'react';

export default function Footer({ navigate }) {
  const seoKeywords = [
    'Diya',
    'CallMeDiya',
    'C4llMeDiya',
    'DiyaIRL',
    'polska VTuberka',
    'VTuber',
    'YouTuberka',
    'streamerka',
    'wokalistka',
    'sopran',
    'Minecraft',
    'SAGA RP',
    'Anarchia SMP 3',
    'gaming',
    'Minecraft creator',
    'animacje Minecraft',
    'Live2D',
    'modele VTuber',
    'muzyka',
    'dark folk',
    'folk',
    'Slavic folk',
    'słowiańszczyzna',
    'Iskierka',
    'Witaj Pokarmie',
    'My Mother Told Me',
    'Grodzisko w Sopocie',
    'Węsiory',
    'Wolin',
    'Steblewo',
    'średniowiecze',
    'wikingowie',
    'storytelling',
    'lore',
    'walkiria',
    'Div'
  ];

  const handleNav = (e, path) => {
    e.preventDefault();
    if (navigate) {
      navigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <footer className="site-footer" aria-label="Stopka witryny">
      <div className="container">
        <div className="footer-top">
          <div style={{ maxWidth: '440px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <div className="brand-logo-rune" style={{ width: '30px', height: '30px' }} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>
              <span className="brand-name" style={{ fontSize: '1.25rem' }}>Diya</span>
              <span className="brand-badge" style={{ marginLeft: '0.25rem' }}>Oficjalna</span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', lineHeight: '1.65', marginBottom: '0.75rem' }}>
              Oficjalna strona Diyi - łącząca gaming i Minecraft (CallMeDiya),
              autorską muzykę dark folk (DiyaIRL), animacje, modele Live2D oraz baśniowy lore walkirii z kotem Divem.
            </p>
            <span style={{ fontSize: '0.85rem', color: 'var(--c-light)' }}>
              Kontakt: <a href="mailto:diyastoybox@gmail.com" style={{ color: 'var(--c-base)', textDecoration: 'none' }}>diyastoybox@gmail.com</a>
            </span>
          </div>

          {/* Szybkie menu witryny */}
          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Nawigacja
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <a href="#hero" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Strona główna (Start)</a>
              <a href="#o-diyi" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Kim jest Diya?</a>
              <a href="#minecraft" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Minecraft & SAGA RP</a>
              <a href="#muzyka" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Muzyka (DiyaIRL)</a>
              <a href="#grafika" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Modele VTuber & Grafika</a>
              <button
                onClick={(e) => handleNav(e, '/gra')}
                style={{ background: 'none', border: 'none', padding: 0, color: 'var(--c-light)', fontWeight: 600, textAlign: 'left', cursor: 'pointer', fontSize: 'inherit' }}
              >
                🎮 Minigra: Nakarm Diva!
              </button>
              <button
                onClick={(e) => handleNav(e, '/linki')}
                style={{ background: 'none', border: 'none', padding: 0, color: 'var(--c-base)', fontWeight: 600, textAlign: 'left', cursor: 'pointer', fontSize: 'inherit' }}
              >
                🔗 Wszystkie linki (Bio page)
              </button>
            </div>
          </div>
        </div>

        {/* UKRYTE ELEMENTY TECHNICZNE DLA ROBOTÓW SEO (Googlebot, Bingbot itp.) - niewidoczne dla użytkowników */}
        <div className="visually-hidden-seo" aria-hidden="true">
          <nav aria-label="Indeks słów kluczowych i mapy serwisu">
            <h4>Indeks słów kluczowych i powiązań Diyi</h4>
            <ul>
              {seoKeywords.map((kw, i) => (
                <li key={i}>{kw}</li>
              ))}
            </ul>
            <a href="/sitemap.xml">Mapa witryny XML (Sitemap)</a>
            <a href="/robots.txt">Instrukcje dla robotów (Robots.txt)</a>
            <p>Diya, CallMeDiya, C4llMeDiya to ta sama twórczyni internetowa, polska VTuberka i wokalistka.</p>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Diya. Wszelkie prawa zastrzeżone.</span>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={(e) => handleNav(e, '/gra')}
              style={{ background: 'none', border: 'none', color: 'var(--c-light)', cursor: 'pointer', fontSize: 'inherit', padding: 0 }}
            >
              Gra Nakarm Diva 🐈⬛
            </button>
            <button
              onClick={(e) => handleNav(e, '/linki')}
              style={{ background: 'none', border: 'none', color: 'var(--c-base)', cursor: 'pointer', fontSize: 'inherit', padding: 0 }}
            >
              Linki Bio
            </button>
            <a href="https://plvtuber.pl/@diya" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>PLvtuber</a>
            <a href="#hero" style={{ color: 'var(--c-light)', textDecoration: 'none' }}>Do góry ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
