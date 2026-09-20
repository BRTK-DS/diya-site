import React from 'react';

export default function Hero({ navigate }) {
  return (
    <section id="hero" className="hero-section" aria-label="Ekran powitalny">
      <img
        src="/assets/images/diya_hero_bg.jpg"
        alt="Klimatyczny las runiczny w świetle księżyca - tło świata Diyi"
        className="hero-background-art"
        loading="eager"
      />
      <div className="hero-overlay-gradient" aria-hidden="true" />

      <div className="container hero-content-grid">
        <div className="hero-text-col">
          <div className="hero-badge-container">
            <span className="hero-badge-dot" aria-hidden="true" />
            <span>Oficjalna Strona • VTuberka • Wokalistka • Minecraft</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-main">Diya</span>
          </h1>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(133, 0, 68, 0.3)', border: '1px solid rgba(244, 205, 212, 0.25)', padding: '0.3rem 0.85rem', borderRadius: '20px', marginBottom: '1.25rem', fontSize: '0.825rem', color: 'var(--c-light)' }}>
            <span>w sieci również jako: <strong>CallMeDiya</strong> • <strong>C4llMeDiya</strong> • <strong>DiyaIRL</strong></span>
          </div>

          <p className="hero-subtitle">
            <strong>Diya</strong> to polska VTuberka, wokalistka i twórczyni internetowa.
            Jej działalność łączy przede wszystkim <strong>Minecraft</strong>, gaming i tworzenie historii z autorską muzyką inspirowaną
            <strong> folkiem, baśniami, fantastyką i słowiańską kulturą</strong>.
          </p>

          <p className="hero-description-secondary">
            W świecie Minecrafta publikuje serie survivalowe, fabularne projekty roleplay (m.in. SAGA RP, Anarchia SMP 3) oraz animacje.
            Równolegle rozwija muzyczną stronę swojej działalności jako <strong>DiyaIRL</strong>,
            tworząc utwory, covery i aranżacje utrzymane w klimacie dark folk (m.in. singiel <em>„Iskierka”</em>).
          </p>

          <div className="hero-actions">
            <a
              href="https://youtube.com/@callmediya?si=yKZjw5rtqWEw-UGW"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>YouTube Minecraft</span>
            </a>

            <button
              onClick={() => navigate ? navigate('/gra') : window.location.href = '/gra'}
              className="btn btn-amber"
              title="Zagraj w minigrę z kotem Divem"
            >
              <span>🎮 Gra: Nakarm Diva!</span>
            </button>

            <button
              onClick={() => navigate ? navigate('/linki') : window.location.href = '/linki'}
              className="btn btn-secondary"
              title="Zobacz wszystkie linki"
            >
              <span>🔗 Linki Bio</span>
            </button>
          </div>

          <div className="hero-lore-footnote">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
            </svg>
            <span>W swoim lore: walkiria, której towarzyszy czarny, zmiennokształtny kot Div</span>
          </div>
        </div>

        {/* Kolumna z oficjalną grafiką postaci Diyi z włócznią */}
        <div className="hero-visual-col">
          <div className="hero-character-frame">
            <img
              src="/assets/graphics/extra/diya_spear.png"
              alt="Diya - polska VTuberka walkiria z włócznią"
              className="hero-character-img"
              loading="eager"
            />
            <div className="hero-character-aura" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
