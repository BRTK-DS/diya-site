import React from 'react';

export default function MusicSection() {
  const tracks = [
    {
      title: 'Iskierka',
      badge: 'Autorski Singiel • Dark Folk',
      desc: 'Autorski utwór Diyi w stylistyce dark folk i folk horror. Punktem wyjścia stała się kołysanka „Z popielnika na Wojtusia”, przekształcona w mroczną opowieść o polowaniu na czarownicę, strachu i osądzie tłumu.',
      url: 'https://youtu.be/sm2nsd6EOOs'
    },
    {
      title: 'My Mother Told Me (Slavic Cover)',
      badge: 'Slavic Folk & Viking',
      desc: 'Projekt, w którym wyraźnie ukształtował się folkowo-historyczny kierunek Diyi (współpraca z BRTK, HexitRely i Davsky). Teledysk zrealizowano m.in. w Grodzisku w Sopocie, Węsiorach, Wolinie i na kaszubskiej plaży.',
      url: 'https://youtu.be/5m4mH2_ReVY'
    },
    {
      title: 'Witaj Pokarmie',
      badge: 'Folk Reinterpretacja XVII w.',
      desc: 'Słowiańsko-folkowa reinterpretacja tradycyjnej polskiej pieśni eucharystycznej z XVII wieku z autorskim refrenem Diyi. Teledysk zrealizowano w malowniczych ruinach spalonego kościoła w Steblewie.',
      url: 'https://youtu.be/yoLYHBYrwpw'
    }
  ];

  return (
    <section id="muzyka" className="section" aria-label="Twórczość Muzyczna Diyi">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projekt Muzyczny • DiyaIRL</span>
          <h2 className="section-title">Muzyka, Dark Folk & Wokal Sopranowy</h2>
          <p className="section-subtitle">
            Diya przez 13 lat szkoliła się w śpiewie i ukończyła studia I stopnia o profilu muzycznym.
            Jako wokalistka śpiewająca sopranem łączy jasne, eteryczne brzmienie głosu z baśniową,
            nieco mroczniejszą opowieścią zakorzenioną w historii i słowiańskim folklorze.
          </p>
        </div>

        {/* Feature Utworu Iskierka (Karta z okładką, opisem i linkami) */}
        <div className="music-feature-wrap" style={{ marginBottom: '3rem' }}>
          <div className="single-cover-frame">
            <img
              src="/assets/images/iskierka_cover.jpg"
              alt="Okładka singla Iskierka - DiyaIRL"
              className="single-cover-img"
              loading="lazy"
            />
          </div>

          <div className="single-info-box">
            <span className="section-tag">Singiel Autorski</span>
            <h3>Iskierka</h3>
            <div className="single-meta-row">
              <span>Dark Folk / Folk Horror</span>
              <span>•</span>
              <span>Wokal sopranowy</span>
              <span>•</span>
              <span>Prod. HexitRely, BRTK, Davsky</span>
            </div>

            <p className="single-desc">
              „Iskierka” to autorski utwór Diyi, w którym znajoma, dziecięca melodia kołysanki zostaje zestawiona
              z historią strachu, osądu i tłumu, który wydał już swój wyrok. Pokazuje jeden z głównych kierunków jej muzyki:
              wykorzystywanie elementów dawnej kultury do tworzenia nowych, baśniowych i niepokojących historii.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
              <a
                href="https://youtu.be/sm2nsd6EOOs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
                <span>Posłuchaj „Iskierka” na YouTube</span>
              </a>

              <a
                href="https://open.spotify.com/artist/6wYKiPBK7dFYxkc4VLkC1H?si=6KQxoD68RkmO-82pE-oMng"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                <span>Spotify</span>
              </a>
            </div>
          </div>
        </div>

        {/* Wybrane projekty muzyczne */}
        <div className="music-projects-grid">
          {tracks.map((track, i) => (
            <div key={i} className="music-project-card">
              <span className="persona-tag" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>
                {track.badge}
              </span>
              <h4 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.6rem' }}>
                {track.title}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.65', marginBottom: '1.25rem', flexGrow: 1 }}>
                {track.desc}
              </p>
              <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ alignSelf: 'flex-start' }}
              >
                <span>Posłuchaj utworu</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Muzyka zakorzeniona w miejscach & Muzyka tworzona razem */}
        <div className="music-heritage-box">
          <div className="heritage-col">
            <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.6rem' }}>
              📍 Muzyka Zakorzeniona w Miejscach
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.65' }}>
              Diya szuka lokacji o własnej duszy i legendzie - szczególnie na <strong>Pomorzu i Pomorzu Zachodnim</strong>.
              W jej teledyskach występują: <strong>Grodzisko w Sopocie</strong> (wczesnośredniowieczny skansen),
              <strong>Kamienne Kręgi w Węsiorach</strong> (kultura wielbarska i Goci),
              <strong>Centrum Słowian i Wikingów Wolin–Jomsborg–Vineta</strong>, kaszubskie plaże oraz
              <strong> ruiny spalonego kościoła w Steblewie</strong>.
            </p>
          </div>

          <div className="heritage-col">
            <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.6rem' }}>
              🤝 Muzyka Tworzona Razem
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.65', marginBottom: '1rem' }}>
              Choć Diya odpowiada za kierunek artystyczny, wokal i kompozycje, projekty powstają we współpracy z utalentowanymi twórcami.
              Wśród nich regularnie pojawiają się <strong>BRTK</strong>, <strong>HexitRely</strong> oraz <strong>Davsky</strong>
              (produkcja, aranżacja i miks).
            </p>
            <a
              href="https://www.youtube.com/playlist?list=PLEm_4TLMjWI-oacTHijLK1bsWbYadKKio"
              target="_blank"
              rel="noopener noreferrer"
              className="mc-anim-link"
            >
              <span>Zobacz wszystkie covery („Golden”, „Queen of Kings”, „Let It Go”...) →</span>
            </a>
          </div>
        </div>

        {/* Gdzie słuchać? */}
        <div className="music-channels-box">
          <span className="section-tag">Platformy Muzyczne</span>
          <h4 style={{ fontSize: '1.35rem', color: 'var(--text-main)', margin: '0.5rem 0 1.25rem' }}>
            Gdzie Słuchać Twórczości Diyi?
          </h4>
          <div className="music-channels-buttons">
            <a
              href="https://youtube.com/@diyairl?si=7nhxGZ26EB4g3Ldr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-amber"
            >
              <span>YouTube DiyaIRL (Tylko Folk)</span>
            </a>
            <a
              href="https://youtube.com/@callmediya?si=lqLousBEjJgXN7E2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span>YouTube CallMeDiya (Covery & Folk)</span>
            </a>
            <a
              href="https://open.spotify.com/artist/6wYKiPBK7dFYxkc4VLkC1H?si=6KQxoD68RkmO-82pE-oMng"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Diya na Spotify</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
