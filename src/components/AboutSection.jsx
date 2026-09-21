import React from 'react';

export default function AboutSection() {
  const timelineEvents = [
    {
      year: '2018',
      title: 'Początki kanału',
      desc: 'Kanał YouTube Diyi został utworzony 2 sierpnia 2018 roku. Początkowo nie był jeszcze związany z późniejszą działalnością VTuberską, ale stał się podstawą obecnego kanału funkcjonującego jako CallMeDiya.'
    },
    {
      year: '2022',
      title: 'Start działalności VTuberskiej',
      desc: '5 października 2022 roku Diya rozpoczęła działalność jako VTuberka. W początkowym okresie rozwijała własny model, publikowała materiały gamingowe i jednocześnie pracowała nad muzyczną częścią swojej twórczości. Obok gier pojawiały się rysunek, muzyka i projekty związane z wirtualną postacią.'
    },
    {
      year: '2023',
      title: 'Rozwój kanału i muzyki',
      desc: 'W czerwcu 2023 roku kanał Diyi przekroczył 1,5 tys. subskrypcji na YouTube. Jesienią opublikowała własną wersję utworu „Queen of Kings”, rozwijając kierunek, który w kolejnych latach stał się jednym z ważniejszych elementów marki Diyi.'
    },
    {
      year: '2024',
      title: 'Animacja i większe projekty',
      desc: 'Kanał osiągnął 15 tys. subskrypcji. Ukazała się jej pierwsza większa autorska animacja 2D - „Opowieść Wigilijna Minecraftowych YouTuberów”, łącząca Minecraft z animacją i opowiadaniem historii, z muzyczną interpretacją „Carol of the Bells / Szczedryk”.'
    },
    {
      year: '2025',
      title: 'Minecraft, animacje i rozwój współprac',
      desc: 'Powstała walentynkowa animacja 2D, seria Minecraft inspirowana wikingami oraz animacja „Mięta Hood” (oparta na Live2D i makietach Minecraft). W muzyce opublikowała polską wersję „My Mother Told Me”, a pod koniec roku dołączyła do Anarchii SMP 3.'
    },
    {
      year: '2026',
      title: 'SAGA RP, 50 tys. subskrypcji i autorska muzyka',
      desc: 'Kanał przekroczył 50 tys. subskrypcji na YouTube. Powstała SAGA RP - wielki projekt fabularny rozwijany z Jheyvu. Latem ukazała się autorska „Iskierka”, a we wrześniu „Witaj Pokarmie”. Diya coraz częściej pojawia się również przed kamerą w projektach IRL.'
    }
  ];

  const divImages = [
    { src: '/assets/graphics/extra/div_1.png', alt: 'Kot Div - grafika 1' },
    { src: '/assets/graphics/extra/div_2.png', alt: 'Kot Div - grafika 2' },
    { src: '/assets/graphics/extra/div_3.png', alt: 'Kot Div - grafika 3' },
    { src: '/assets/graphics/extra/div_4.png', alt: 'Kot Div - grafika 4' }
  ];

  return (
    <section id="o-diyi" className="section" aria-label="Kim jest Diya oraz Historia Działalności">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Poznaj Twórczynię</span>
          <h2 className="section-title">Kim jest Diya?</h2>
          <p className="section-subtitle">
            Polska VTuberka, YouTuberka, wokalistka i twórczyni internetowa,
            łącząca gaming z muzyką inspirowaną folkiem, baśniami i słowiańską kulturą.
          </p>
        </div>

        {/* Wizytówka i Biografia */}
        <div className="about-bio-grid">
          <div className="about-profile-card">
            <div className="profile-img-wrap">
              <img
                src="/assets/graphics/extra/diya_profile.jpg"
                alt="Diya - portret profilowy twórczyni"
                className="about-profile-img"
              />
              <span className="profile-badge-valkyrie">Walkiria & Kot Div</span>
            </div>

            <div className="about-div-companions">
              <span className="div-companions-title">Zmiennokształtny Kot Div:</span>
              <div className="div-thumbnails-row">
                {divImages.map((div, i) => (
                  <div key={i} className="div-thumb-box" title={`Div forma ${i + 1}`}>
                    <img src={div.src} alt={div.alt} className="div-thumb-img" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-bio-content">
            <p>
              Największą częścią twórczości Diyi są filmy i transmisje związane z <strong>Minecraftem</strong>.
              Na kanale <strong>CallMeDiya</strong> pojawiają się serie survivalowe, serwery SMP, roleplay, wyzwania,
              projekty fabularne oraz materiały tworzone wspólnie z innymi twórcami. Minecraft jest dla niej nie tylko grą,
              ale również przestrzenią do budowania historii, postaci i większych projektów narracyjnych.
            </p>

            <p>
              Równolegle Diya rozwija działalność muzyczną. Na kanale YouTube <strong>DiyaIRL</strong> publikuje autorskie utwory,
              covery, aranżacje i teledyski. Śpiewa sopranem, a jej muzyka porusza się pomiędzy <strong>folkiem, dark folkiem i słowiańskimi inspiracjami</strong>,
              często wykorzystując atmosferę dawnych pieśni, legend, baśni i nieco mroczniejszej fantastyki.
              Do jej projektów muzycznych należą m.in. autorska <em>„Iskierka”</em> oraz aranżacja dawnej pieśni <em>„Witaj Pokarmie”</em>.
            </p>

            <p>
              Twórczość Diyi nie ogranicza się jednak do gamingu i muzyki. Zajmuje się również <strong>rysunkiem i animacją</strong>,
              tworzy projekty IRL oraz wykorzystuje zainteresowanie <strong>średniowieczem, kulturą słowiańską, wikingami i historią </strong>
              jako inspirację dla swoich filmów, muzyki i światów fabularnych.
            </p>

            <p>
              Jako VTuberka Diya korzysta z wirtualnego modelu, ale pojawia się również przed kamerą.
              Dzięki temu działalność <strong>CallMeDiya</strong>, projekty IRL i muzyczne <strong>DiyaIRL </strong>
              są różnymi częściami twórczości tej samej osoby i marki - <strong>Diyi</strong>.
            </p>

            <div className="about-highlights-badges">
              <span className="persona-tag">#VTubing</span>
              <span className="persona-tag">#Minecraft Storytelling</span>
              <span className="persona-tag">#Sopran</span>
              <span className="persona-tag">#Dark Folk</span>
              <span className="persona-tag">#Ilustracja & Live2D</span>
              <span className="persona-tag">#Projekty IRL</span>
            </div>
          </div>
        </div>

        {/* Oś Czasu: Historia Działalności */}
        <div className="timeline-wrapper">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">Droga Twórcza</span>
            <h3 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Historia Działalności
            </h3>
            <p className="section-subtitle">
              Od pierwszych kroków na YouTube po ogólnopolskie projekty fabularne i autorskie kompozycje.
            </p>
          </div>

          <div className="timeline-cards">
            {timelineEvents.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-year-badge">{item.year}</div>
                <div className="timeline-item-content">
                  <h4 className="timeline-item-title">{item.title}</h4>
                  <p className="timeline-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-summary-quote">
            <p>
              „Dziś działalność Diyi funkcjonuje na styku kilku światów. CallMeDiya skupia się przede wszystkim na Minecrafcie,
              streamach i projektach fabularnych, natomiast DiyaIRL rozwija muzyczną i artystyczną część jej twórczości.
              Wspólnym elementem pozostają opowieści - niezależnie od tego, czy powstają w świecie Minecrafta, w animacji,
              w utworze muzycznym czy w projekcie inspirowanym historią i dawnymi baśniami.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
