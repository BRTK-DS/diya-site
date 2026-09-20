import React from 'react';

export default function LoreSection() {
  return (
    <section id="lore" className="section" aria-label="Lore i Warstwa Fabularna">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Uniwersum & Storytelling</span>
          <h2 className="section-title">Walkiria & Zmiennokształtny Kot Div</h2>
          <p className="section-subtitle">
            Kreatywny wymiar uniwersum Diyi, wzbogacający rozgrywkę i muzykę o mitologiczne korzenie
            oraz baśniowy klimat dawnych epok.
          </p>
        </div>

        <div className="lore-showcase">
          {/* Obrazek lore z kotem Divem */}
          <div className="lore-media-wrap">
            <img
              src="/assets/images/diya_lore_artwork.jpg"
              alt="Czarny zmiennokształtny kot Div na runicznym monolicie z eterycznymi skrzydłami"
              className="lore-img"
              loading="lazy"
            />
            <div className="lore-caption">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
              </svg>
              <span>Div — czarny, zmiennokształtny kot i lojalny towarzysz walkirii</span>
            </div>
          </div>

          {/* Opis fabularny */}
          <div className="lore-text">
            <h3>Baśniowa Tożsamość</h3>
            <p>
              Według unikalnego lore Diya ucieleśnia postać <strong>walkirii</strong> — istoty zawieszonej
              między światem ziemskim a mitycznym, strzegącej zapomnianych pieśni i opowieści.
              Jej nieodłącznym kompanem jest <strong>Div</strong> — czarny kot o zmiennokształtnej naturze,
              posiadający zdolność przywoływania eterycznych, świetlistych skrzydeł.
            </p>
            <p>
              Warstwa fabularna nie zastępuje rzeczywistej działalności Diyi jako twórczyni internetowej,
              lecz stanowi dodatkową, nastrojową przestrzeń. To dzięki niej gaming, muzyka i streaming
              tworzą spójną, baśniową całość o wyjątkowym klimacie.
            </p>

            <div className="lore-topics-grid">
              <div className="lore-topic-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span>Folklor słowiański i legendy</span>
              </div>

              <div className="lore-topic-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span>Kultura i motywy nordyckie</span>
              </div>

              <div className="lore-topic-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>Średniowiecze i wikingowie</span>
              </div>

              <div className="lore-topic-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <span>Mroczna fantastyka & baśnie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
