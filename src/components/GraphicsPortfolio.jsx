import React from 'react';

export default function GraphicsPortfolio() {
  const vtuberModels = [
    {
      name: 'Diya',
      desc: 'Model VTuber przygotowany na potrzeby własnej działalności.',
      img: '/assets/graphics/vtuber/diya_model.png',
      status: 'Aktywny'
    },
    {
      name: 'DemoGames',
      desc: 'Model VTuber przygotowany dla twórcy DemoGames.',
      img: '/assets/graphics/vtuber/demo_model.png',
      status: 'Gotowy'
    },
    {
      name: 'HexitRely',
      desc: 'Model VTuber przygotowany dla HexitRely.',
      img: '/assets/graphics/vtuber/hexit_model.png',
      status: 'Gotowy'
    },
    {
      name: 'Jheyvu',
      desc: 'Model VTuber przygotowany dla Jheyvu.',
      img: '/assets/graphics/vtuber/jheyvu_model.png',
      status: 'Oczekuje na debiut ✨'
    },
    {
      name: 'Ilka',
      desc: 'Model VTuber przygotowany dla Ilki.',
      img: '/assets/graphics/vtuber/ilka_model.png',
      status: 'Oczekuje na debiut ✨'
    }
  ];

  const gifPngAvatars = [
    { name: 'Astix', img: '/assets/graphics/gif_png/Astix.png' },
    { name: 'BRTK', img: '/assets/graphics/gif_png/BRTK.png' },
    { name: 'Davsky', img: '/assets/graphics/gif_png/Davsky.png' },
    { name: 'DemoGames', img: '/assets/graphics/gif_png/DemoGames.png' },
    { name: 'Diya', img: '/assets/graphics/gif_png/Diya.png' },
    { name: 'Faga', img: '/assets/graphics/gif_png/Faga.png' },
    { name: 'Fi7iP', img: '/assets/graphics/gif_png/Fi7iP.png' },
    { name: 'Hexit', img: '/assets/graphics/gif_png/Hexit.png' },
    { name: 'Jheyvu', img: '/assets/graphics/gif_png/Jheyvu.png' },
    { name: 'Michał', img: '/assets/graphics/gif_png/Michalll1.png' },
    { name: 'Shirel', img: '/assets/graphics/gif_png/Shirel.png' },
    { name: 'Vex', img: '/assets/graphics/gif_png/Vex.png' },
    { name: 'Kaktusek (GIF)', img: '/assets/graphics/gif_png/Kaktusek.gif' }
  ];

  return (
    <section id="grafika" className="section" aria-label="Modele VTuber i Portfolio Graficzne">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Rysunek, Live2D & Animacja</span>
          <h2 className="section-title">Modele VTuber i Grafika</h2>
          <p className="section-subtitle">
            Poza działalnością gamingową i muzyczną Diya zajmuje się rysunkiem cyfrowym, projektowaniem postaci, 
            animacją 2D oraz przygotowywaniem modeli VTuber dla siebie i innych twórców internetowych.
          </p>
        </div>

        {/* Galeria Modeli VTuber */}
        <div className="vtuber-models-block">
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
              Modele VTuber
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Projekty postaci przygotowane z myślą o streamach, materiałach wideo i technologii Live2D.
            </p>
          </div>

          <div className="vtuber-grid">
            {vtuberModels.map((m, idx) => (
              <div key={idx} className="vtuber-card">
                <div className="vtuber-img-wrap">
                  <img src={m.img} alt={`Model VTuber ${m.name}`} className="vtuber-model-img" loading="lazy" />
                  <span className="vtuber-badge-status">{m.status}</span>
                </div>
                <div className="vtuber-info">
                  <h4 className="vtuber-name">{m.name}</h4>
                  <p className="vtuber-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modele GIF / PNG */}
        <div className="gif-png-block" style={{ marginTop: '4.5rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
              Modele GIF & PNG (Stream Avatars)
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Modele reaktywne i awatary wykorzystywane podczas wspólnych nagrań, streamów i podcastów.
            </p>
          </div>

          <div className="avatars-grid">
            {gifPngAvatars.map((av, i) => (
              <div key={i} className="avatar-card">
                <div className="avatar-img-frame">
                  <img src={av.img} alt={`Model PNG ${av.name}`} className="avatar-img" loading="lazy" />
                </div>
                <span className="avatar-label">{av.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Zamówienia / Commissions */}
        <div className="commissions-box" style={{ marginTop: '4rem' }}>
          <div className="commissions-inner">
            <div>
              <span className="section-tag">Commissions / Zamówienia</span>
              <h3 style={{ fontSize: '1.9rem', color: 'var(--text-main)', margin: '0.5rem 0' }}>
                Chcesz zamówić grafikę lub model?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', maxWidth: '620px', lineHeight: '1.65' }}>
                Diya przyjmuje zapytania dotyczące ilustracji, projektów postaci oraz modeli dla twórców internetowych.
                Napisz drogą mailową, aby omówić szczegóły Twojego projektu.
              </p>
            </div>

            <div className="commissions-actions">
              <a href="mailto:diyastoybox@gmail.com" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Napisz: diyastoybox@gmail.com</span>
              </a>

              <div className="vgen-pill">
                <span>VGen: <strong>Coming soon ✨</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
