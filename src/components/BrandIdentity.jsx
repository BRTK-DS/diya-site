import React from 'react';

export default function BrandIdentity() {
  return (
    <section id="o-diyi" className="section" aria-label="Tożsamość i Pozycjonowanie Persony">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Kim jest Diya?</span>
          <h2 className="section-title">Tożsamość Twórcza & Aliasy</h2>
          <p className="section-subtitle">
            Jedna twórczyni - wiele wymiarów ekspresji. Poznaj strukturę tożsamości internetowej,
            łączącej gaming, muzykę i baśniowy świat opowieści.
          </p>
        </div>

        <div className="persona-cards-grid">
          {/* Karta 1: CallMeDiya */}
          <article className="persona-card">
            <div className="persona-card-header">
              <div className="persona-icon-box" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <line x1="6" y1="12" x2="10" y2="12" />
                  <line x1="8" y1="10" x2="8" y2="14" />
                  <circle cx="15" cy="11" r="1" fill="currentColor" />
                  <circle cx="17" cy="13" r="1" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h3 className="persona-card-title">CallMeDiya</h3>
                <span className="persona-card-alias">Aliasy: Diya • C4llMeDiya</span>
              </div>
            </div>
            <p className="persona-card-body">
              Główna nazwa używana w działalności internetowej, na kanałach YouTube i streamingowych.
              To tutaj Diya prowadzi serie z Minecrafta, transmisje na żywo, angażuje się w projekty multiplayer
              oraz tworzy interaktywne opowieści wraz ze swoją społecznością.
            </p>
            <div className="persona-tag-list">
              <span className="persona-tag">Polska VTuberka</span>
              <span className="persona-tag">YouTuberka</span>
              <span className="persona-tag">Streamerka</span>
              <span className="persona-tag">Minecraft Creator</span>
            </div>
          </article>

          {/* Karta 2: DiyaIRL */}
          <article className="persona-card music-card">
            <div className="persona-card-header">
              <div className="persona-icon-box" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <div>
                <h3 className="persona-card-title">DiyaIRL</h3>
                <span className="persona-card-alias">Projekt Muzyczny Diyi</span>
              </div>
            </div>
            <p className="persona-card-body">
              Przestrzeń dedykowana twórczości muzycznej i wokalnej. Diya rozwija autorskie kompozycje
              (w tym singiel „Iskierka”) oraz klimatyczne interpretacje, czerpiąc z mrocznego folkloru słowiańskiego,
              baśni, średniowiecza i pieśni dawnych epok.
            </p>
            <div className="persona-tag-list">
              <span className="persona-tag">Dark Folk</span>
              <span className="persona-tag">Slavic Folk</span>
              <span className="persona-tag">Wokal sopranowy</span>
              <span className="persona-tag">Autorskie utwory</span>
            </div>
          </article>

          {/* Karta 3: Lore Walkirii & Div */}
          <article className="persona-card">
            <div className="persona-card-header">
              <div className="persona-icon-box" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
                </svg>
              </div>
              <div>
                <h3 className="persona-card-title">Walkiria & Div</h3>
                <span className="persona-card-alias">Warstwa Fabularna & Lore</span>
              </div>
            </div>
            <p className="persona-card-body">
              Fabularny wizerunek walkirii otoczonej skrzydłami i chowańcem - czarnym, zmiennokształtnym kotem Divem.
              Lore stanowi kreatywną ramę dla twórczości, łącząc zamiłowanie do wikingów, mitologii, historii
              i melancholijnej fantastyki.
            </p>
            <div className="persona-tag-list">
              <span className="persona-tag">Lore & Storytelling</span>
              <span className="persona-tag">Walkiria</span>
              <span className="persona-tag">Kot Div</span>
              <span className="persona-tag">Baśnie & Mitologie</span>
            </div>
          </article>
        </div>

        {/* Baner informacyjny SEO dla robotów i fanów */}
        <div className="identity-callout-banner">
          <div className="identity-callout-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div className="identity-callout-text">
            <h4>Ważna informacja o marce:</h4>
            <p>
              Nazwy <strong>Diya</strong>, <strong>CallMeDiya</strong> oraz <strong>C4llMeDiya</strong> odnoszą się
              do <strong>tej samej polskiej twórczyni</strong>. CallMeDiya reprezentuje działalność w sferze gamingowo-streamingowej,
              zaś projekt <strong>DiyaIRL</strong> skupia jej twórczość wokalną i muzyczną.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
