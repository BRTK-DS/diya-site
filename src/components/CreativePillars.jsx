import React from 'react';

export default function CreativePillars() {
  return (
    <section id="filary" className="section" aria-label="Główne Filary Twórczości Diyi">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Dwa Światy Twórczości</span>
          <h2 className="section-title">Minecraft, Gaming i Muzyka</h2>
          <p className="section-subtitle">
            Działalność Diyi opiera się na dwóch potężnych filarach, które wzajemnie się przenikają,
            tworząc unikalną narrację audiowizualną w polskim internecie.
          </p>
        </div>

        <div className="pillars-grid">
          {/* Filar 1: Minecraft i Gaming */}
          <article className="pillar-card pillar-gaming">
            <div>
              <span className="pillar-badge">Filar I • Gaming & Storytelling</span>
              <h3 className="pillar-title">Minecraft i Świat Gier</h3>
              <p className="pillar-desc">
                Diya jest przede wszystkim twórczynią głęboko kojarzoną z <strong>Minecraftem</strong>.
                Gra stanowi dla niej nie tylko przestrzeń do standardowej rozgrywki, lecz płótno do kreowania
                własnych historii, skomplikowanych budowli oraz barwnych interakcji z innymi twórcami.
              </p>

              <ul className="pillar-bullet-list">
                <li className="pillar-bullet-item">
                  <svg className="pillar-bullet-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Serwery i projekty multiplayer:</strong> Udział w głośnych inicjatywach SMP i wspólnych światach.</span>
                </li>
                <li className="pillar-bullet-item">
                  <svg className="pillar-bullet-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Wątki fabularne i narracyjne:</strong> Opowiadanie wielowątkowych baśniowych historii w świecie gry.</span>
                </li>
                <li className="pillar-bullet-item">
                  <svg className="pillar-bullet-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Kreatywne budownictwo:</strong> Monumentalne projekty architektoniczne inspirowane historią i fantasy.</span>
                </li>
                <li className="pillar-bullet-item">
                  <svg className="pillar-bullet-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Transmisje live:</strong> Bezpośrednia interakcja z widownią i streaming innych gier przygodowych.</span>
                </li>
              </ul>
            </div>

            <a href="https://youtube.com/@callmediya" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Odwiedź kanał YouTube @callmediya</span>
            </a>
          </article>

          {/* Filar 2: Muzyka i Wokal */}
          <article className="pillar-card pillar-music">
            <div>
              <span className="pillar-badge">Filar II • Muzyka & Dark Folk (DiyaIRL)</span>
              <h3 className="pillar-title">Muzyka, Folk i Śpiew</h3>
              <p className="pillar-desc">
                Drugim sercem działalności Diyi jest <strong>muzyka</strong>. Jako wokalistka łączy
                baśniowość dawnych opowieści z mistyczną, lekko mroczną atmosferą. Wyróżnia ją charakterystyczny,
                wysoki kobiecy głos oraz <strong>wokal o krystalicznej, sopranowej barwie</strong>.
              </p>

              <ul className="pillar-bullet-list">
                <li className="pillar-bullet-item">
                  <svg className="pillar-bullet-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Folk & Dark Folk:</strong> Hipnotyzujące brzmienia z pogranicza baśni, lasu i melancholii.</span>
                </li>
                <li className="pillar-bullet-item">
                  <svg className="pillar-bullet-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Słowiańszczyzna & Motywy Nordyckie:</strong> Nawiązania do dawnych obrzędów, wikingów i mitów.</span>
                </li>
                <li className="pillar-bullet-item">
                  <svg className="pillar-bullet-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Autorski singiel „Iskierka”:</strong> Emocjonalna pieśń zakorzeniona w słowiańskich baśniach.</span>
                </li>
                <li className="pillar-bullet-item">
                  <svg className="pillar-bullet-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Projekt DiyaIRL:</strong> Oficjalny kanał muzyczny z coverami i oryginalną twórczością.</span>
                </li>
              </ul>
            </div>

            <a href="https://www.youtube.com/@DiyaIRL" target="_blank" rel="noopener noreferrer" className="btn btn-amber">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
              <span>Odwiedź kanał muzyczny @DiyaIRL</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
