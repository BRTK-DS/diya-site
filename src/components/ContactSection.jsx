import React, { useState } from 'react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'kontakt@diya.com.pl';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="kontakt" className="section" aria-label="Kontakt i Współpraca">
      <div className="container">
        <div className="contact-box">
          <span className="section-tag">Współpraca & Media</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Skontaktuj się z Diyą</h2>
          <p>
            Jesteś zainteresowany współpracą komercyjną, udziałem w wydarzeniu, projektem Minecraft
            lub wspólną produkcją muzyczną? Skontaktuj się drogą mailową.
          </p>

          <div className="contact-copy-field">
            <span className="contact-email-text">{email}</span>
            <button
              onClick={copyEmail}
              className="copy-btn"
              aria-label="Kopiuj adres e-mail do schowka"
            >
              {copied ? '✓ Skopiowano' : 'Kopiuj e-mail'}
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
            <span>• Kampanie marek</span>
            <span>• Projekty multiplayer</span>
            <span>• Współprace muzyczne</span>
          </div>
        </div>
      </div>
    </section>
  );
}
