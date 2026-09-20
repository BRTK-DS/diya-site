import React from 'react';

export default function EventsSection() {
  return (
    <section id="wydarzenia" className="section" aria-label="Wydarzenia i Spotkania">
      <div className="container">
        <div className="events-card-teaser">
          <span className="section-tag">Spotkania & Konwenty</span>
          <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Wydarzenia
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: '1.7' }}>
            Informacje o nadchodzących konwentach, panelach dyskusyjnych, spotkaniach autorskich 
            oraz specjalnych wydarzeniach online ze społecznością pojawią się już wkrótce.
          </p>

          <div className="coming-soon-badge">
            <span className="coming-soon-sparkle">✨</span>
            <span>Coming Soon</span>
            <span className="coming-soon-sparkle">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}
