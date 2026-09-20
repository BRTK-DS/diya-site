import React, { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Kim jest Diya i czym się zajmuje?',
      a: 'Diya, działająca również jako CallMeDiya i C4llMeDiya, to polska VTuberka, YouTuberka, streamerka i wokalistka. Jej twórczość łączy gaming, tworzenie treści internetowych, Minecraft, autorską muzykę dark folk oraz elementy storytellingu i lore.'
    },
    {
      q: 'Czy Diya, CallMeDiya oraz C4llMeDiya to ta sama osoba?',
      a: 'Tak, zdecydowanie. Wszystkie trzy formy zapisu (Diya, CallMeDiya oraz C4llMeDiya) odnoszą się do dokładnie tej samej twórczyni. CallMeDiya jest główną nazwą używaną w gamingu i streamingu, natomiast DiyaIRL to nazwa jej oficjalnego projektu muzycznego.'
    },
    {
      q: 'Czym jest projekt DiyaIRL i jaki gatunek muzyki reprezentuje?',
      a: 'DiyaIRL to autorski projekt muzyczny Diyi. Charakteryzuje się inspiracjami folkiem, dark folkiem, folklorem słowiańskim (Slavic folk), motywami nordyckimi, baśniami oraz średniowieczem. Ważnym znakiem rozpoznawczym jest jej wysoki kobiecy głos o sopranowej barwie. Do jej autorskich singli należy m.in. utwór „Iskierka”.'
    },
    {
      q: 'Jakie materiały i serie z Minecrafta tworzy Diya?',
      a: 'Minecraft jest jednym z dwóch głównych filarów jej działalności. Diya tworzy autorskie serie fabularne, bierze udział w serwerach SMP i projektach multiplayer, buduje kreatywne światy oraz organizuje transmisje na żywo, angażując w historie swoją społeczność.'
    },
    {
      q: 'Czym jest lore postaci Diyi i kim jest kot Div?',
      a: 'Wizerunek Diyi posiada własną warstwę fabularną. Według lore Diya jest walkirią, której towarzyszy Div - czarny, zmiennokształtny kot o eterycznych skrzydłach. Lore stanowi baśniowe tło dla jej twórczości i wzbogaca kontakt z odbiorcami o motywy dawnych mitologii i wikingów.'
    },
    {
      q: 'Gdzie można oficjalnie śledzić twórczość Diyi?',
      a: 'Oficjalnymi miejscami w sieci są kanały YouTube (@callmediya do Minecrafta i streamingu oraz @DiyaIRL do muzyki), konto na platformie Spotify, profile społecznościowe na TikToku (@c4llmediya), Instagramie, X oraz oficjalny serwer Discord dla fanów.'
    }
  ];

  return (
    <section id="faq" className="section" aria-label="Najczęściej Zadawane Pytania SEO">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Baza Wiedzy • SEO</span>
          <h2 className="section-title">Często Zadawane Pytania (FAQ)</h2>
          <p className="section-subtitle">
            Wszystko, co warto wiedzieć o tożsamości, działalności gamingowej, muzyce i uniwersum Diyi.
          </p>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-trigger"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span>{item.q}</span>
                  <svg
                    className="faq-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {isOpen && (
                  <div id={`faq-answer-${idx}`} className="faq-content">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
