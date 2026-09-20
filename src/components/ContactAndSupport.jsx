import React, { useState } from 'react';

export default function ContactAndSupport() {
  const [copied, setCopied] = useState(false);
  const email = 'diyastoybox@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: 'YouTube Gaming',
      handle: '@callmediya',
      url: 'https://youtube.com/@callmediya?si=9WhKTbgsrU0cmEJ-',
      tag: 'Minecraft & Live',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      name: 'YouTube Muzyka',
      handle: '@diyairl',
      url: 'https://youtube.com/@diyairl?si=dnlD3YqMVDpnT3kz',
      tag: 'Folk & Wokal',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      )
    },
    {
      name: 'Spotify',
      handle: 'Diya',
      url: 'https://open.spotify.com/artist/6wYKiPBK7dFYxkc4VLkC1H?si=7PwsrpH8R7a1h9uUhrpFKg',
      tag: 'Dyskografia',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      handle: '@c4llmediya',
      url: 'https://www.instagram.com/c4llmediya/',
      tag: 'Zdjęcia & Story',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'TikTok',
      handle: '@c4llmediya',
      url: 'https://www.tiktok.com/@c4llmediya?lang=pl-PL',
      tag: 'Shorts & Klipy',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.67 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.33V9.05a8.28 8.28 0 0 0 5.25 1.83V7.43a4.84 4.84 0 0 1-1.34-.74z" />
        </svg>
      )
    },
    {
      name: 'Discord',
      handle: 'Społeczność Diyi',
      url: 'https://discord.gg/73WYGsAXzx',
      tag: 'Społeczność',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      handle: '@C4llMeDiya',
      url: 'https://x.com/C4llMeDiya',
      tag: 'Aktualności',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    }
  ];

  return (
    <section id="kontakt" className="section" aria-label="Social Media, Kontakt i Wsparcie">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Wszystkie Kanały & Społeczność</span>
          <h2 className="section-title">Social Media i Kontakt</h2>
          <p className="section-subtitle">
            Dołącz do społeczności Diyi, śledź premiery, muzykę oraz transmisje na żywo.
          </p>
        </div>

        {/* Siatka Social Media */}
        <div className="social-links-grid" style={{ marginBottom: '3.5rem' }}>
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
            >
              <div className="social-card-left">
                <div className="social-icon-wrapper" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <span className="social-platform-name">{item.name}</span>
                  <span className="social-handle">{item.handle}</span>
                </div>
              </div>
              <span className="social-badge">{item.tag}</span>
            </a>
          ))}
        </div>

        {/* Blok z dwiema kolumnami: Kontakt & Wesprzyj Twórczość */}
        <div className="contact-support-dual-grid">
          {/* Kolumna 1: Kontakt i Encyklopedie */}
          <div className="contact-box" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span className="section-tag">Oficjalny Kontakt</span>
              <h3 style={{ fontSize: '1.75rem', margin: '0.5rem 0 0.75rem' }}>Napisz do Diyi</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                W sprawach propozycji współprac, projektów, modeli VTuber oraz pytań biznesowych:
              </p>

              <div className="contact-copy-field">
                <span className="contact-email-text">{email}</span>
                <button onClick={copyEmail} className="copy-btn" aria-label="Kopiuj email">
                  {copied ? '✓ Skopiowano' : 'Kopiuj e-mail'}
                </button>
              </div>
            </div>

            <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-glass)', paddingTop: '1.25rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--c-light)', fontWeight: 600, display: 'block', marginBottom: '0.6rem' }}>
                Więcej informacji o Diyi:
              </span>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://plvtuber.pl/@diya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="persona-tag"
                  style={{ textDecoration: 'none' }}
                >
                  🌐 Profil PLvtuber
                </a>
                <a
                  href="https://virtualyoutuber.fandom.com/pl/wiki/Diya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="persona-tag"
                  style={{ textDecoration: 'none' }}
                >
                  📖 VTuber Wiki
                </a>
              </div>
            </div>
          </div>

          {/* Kolumna 2: Wesprzyj Twórczość */}
          <div className="contact-box" style={{ margin: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span className="section-tag">Wsparcie Społeczności</span>
              <h3 style={{ fontSize: '1.75rem', margin: '0.5rem 0 0.75rem' }}>Wesprzyj Twórczość</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Podoba Ci się to, co tworzy Diya? Możesz bezpośrednio wesprzeć powstawanie nowych animacji,
                projektów Minecraft oraz autorskiej muzyki dark folk!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  href="https://youtube.com/@callmediya?si=wV4WpzysKEA5COns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ justifyContent: 'center' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>Wspieranie na YouTube</span>
                </a>

                <a
                  href="https://tipply.pl/@C4llmediya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-amber"
                  style={{ justifyContent: 'center' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v12M17 10H9.5a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 0 1 0 5H6" />
                  </svg>
                  <span>Tipply (@C4llmediya)</span>
                </a>
              </div>
            </div>

            <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-glass)', paddingTop: '1.25rem' }}>
              <div className="vgen-pill" style={{ margin: '0 auto', maxWidth: '280px' }}>
                <span>VGen: <strong>Coming soon ✨</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
