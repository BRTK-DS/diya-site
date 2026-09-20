import React, { useState } from 'react';

export default function BioLinksPage({ navigate }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.origin + '/linki';
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error('Błąd kopiowania:', err);
      }
    }
  };

  const linkGroups = [
    {
      category: 'Twórczość & Projekty',
      links: [
        {
          title: 'YouTube — Minecraft & Gaming',
          subtitle: 'Główny kanał z grami, SMP, SAGA RP i animacjami (@callmediya)',
          url: 'https://youtube.com/@callmediya?si=yKZjw5rtqWEw-UGW',
          icon: '🎮',
          highlight: true
        },
        {
          title: 'YouTube — DiyaIRL (Muzyka & Wokal)',
          subtitle: 'Autorska muzyka dark folk, singiel „Iskierka”, teledyski i covery',
          url: 'https://www.youtube.com/@DiyaIRL',
          icon: '🎵',
          highlight: true
        },
        {
          title: 'Spotify — Diya (Dyskografia)',
          subtitle: 'Słuchaj singla „Iskierka” oraz kolejnych premier w Spotify',
          url: 'https://open.spotify.com/artist/6wYKiPBK7dFYxkc4VLkC1H',
          icon: '🎧'
        },
        {
          title: 'Minigra: Nakarm Diva! 🐈⬛',
          subtitle: 'Złap spadające smakołyki dla kota Diyi i pobij rekord punktowy!',
          internalPath: '/gra',
          icon: '⭐',
          special: true
        }
      ]
    },
    {
      category: 'Społeczność & Social Media',
      links: [
        {
          title: 'Discord — Kraina Ryżowych Baśni',
          subtitle: 'Oficjalny serwer Discord społeczności Diyi',
          url: 'https://discord.gg/73WYGsAXzx',
          icon: '🏰'
        },
        {
          title: 'TikTok (@c4llmediya)',
          subtitle: 'Krótkie klipy, kulisy i zabawne momenty',
          url: 'https://www.tiktok.com/@c4llmediya',
          icon: '📱'
        },
        {
          title: 'Instagram (@c4llmediya)',
          subtitle: 'Zdjęcia, relacje i aktualności',
          url: 'https://www.instagram.com/c4llmediya/',
          icon: '📸'
        },
        {
          title: 'X / Twitter (@C4llMeDiya)',
          subtitle: 'Informacje o streamach, posty i kontakt',
          url: 'https://x.com/C4llMeDiya',
          icon: '🐦'
        }
      ]
    },
    {
      category: 'Wsparcie, Wiedza & Współpraca',
      links: [
        {
          title: 'Tipply — Wesprzyj twórczość',
          subtitle: 'Bezpośrednie wsparcie projektów i rozwoju kanałów',
          url: 'https://tipply.pl/@diyayt',
          icon: '☕'
        },
        {
          title: 'PLvtuber Wiki — Profil Diyi',
          subtitle: 'Encyklopedyczne podsumowanie działalności i lore',
          url: 'https://plvtuber.fandom.com/pl/wiki/CallMeDiya',
          icon: '📖'
        },
        {
          title: 'Kontakt biznesowy & Zlecenia graficzne',
          subtitle: 'diyastoybox@gmail.com (kliknij, aby napisać)',
          url: 'mailto:diyastoybox@gmail.com',
          icon: '✉️'
        }
      ]
    }
  ];

  return (
    <div className="biolink-page-wrapper">
      <div className="biolink-container">
        {/* Przycisk powrotu do strony głównej */}
        <div className="biolink-top-bar">
          <button
            onClick={() => navigate('/')}
            className="biolink-back-btn"
            title="Wróć na główną stronę diya.com.pl"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>diya.com.pl</span>
          </button>

          <button
            onClick={handleShare}
            className="biolink-share-btn"
            title="Kopiuj link do strony z linkami"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            <span>{copied ? 'Skopiowano!' : 'Udostępnij'}</span>
          </button>
        </div>

        {/* Profil Bio */}
        <div className="biolink-profile-header">
          <div className="biolink-avatar-frame">
            <img
              src="/assets/graphics/extra/diya_profile.jpg"
              alt="Diya"
              className="biolink-avatar-img"
            />
            <div className="biolink-avatar-ring" aria-hidden="true" />
          </div>

          <h1 className="biolink-title">Diya</h1>
          <p className="biolink-handle">@c4llmediya • @DiyaIRL</p>

          <div className="biolink-badges-row">
            <span className="biolink-badge">VTuberka</span>
            <span className="biolink-badge">Wokalistka Dark Folk</span>
            <span className="biolink-badge">Minecraft Creator</span>
          </div>

          <p className="biolink-bio-text">
            Oficjalny hub wszystkich kanałów, muzyki, streamów i społeczności. 
            Wybierz miejsce, do którego chcesz dołączyć!
          </p>
        </div>

        {/* Grupy Linków */}
        <div className="biolink-links-list">
          {linkGroups.map((group, gIdx) => (
            <div key={gIdx} className="biolink-group">
              <h2 className="biolink-group-heading">{group.category}</h2>
              <div className="biolink-items-col">
                {group.links.map((item, lIdx) => {
                  if (item.internalPath) {
                    return (
                      <button
                        key={lIdx}
                        onClick={() => navigate(item.internalPath)}
                        className={`biolink-card ${item.special ? 'special' : ''}`}
                      >
                        <span className="biolink-icon" aria-hidden="true">{item.icon}</span>
                        <div className="biolink-card-text">
                          <span className="biolink-card-title">{item.title}</span>
                          <span className="biolink-card-subtitle">{item.subtitle}</span>
                        </div>
                        <span className="biolink-arrow" aria-hidden="true">→</span>
                      </button>
                    );
                  }

                  return (
                    <a
                      key={lIdx}
                      href={item.url}
                      target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className={`biolink-card ${item.highlight ? 'highlight' : ''}`}
                    >
                      <span className="biolink-icon" aria-hidden="true">{item.icon}</span>
                      <div className="biolink-card-text">
                        <span className="biolink-card-title">{item.title}</span>
                        <span className="biolink-card-subtitle">{item.subtitle}</span>
                      </div>
                      <span className="biolink-arrow" aria-hidden="true">→</span>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Stopka strony linków */}
        <div className="biolink-footer">
          <p>© {new Date().getFullYear()} Diya. Oficjalna strona: <button onClick={() => navigate('/')} className="biolink-footer-link">diya.com.pl</button></p>
        </div>
      </div>
    </div>
  );
}
