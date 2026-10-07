import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const memories = [
  { image: `${import.meta.env.BASE_URL}images/a.jpeg`, label: "My favorite human", fallback: "♡" },
  { image: `${import.meta.env.BASE_URL}images/b.jpeg`, label: "Chaos & cuddles", fallback: "✿" },
  { image: `${import.meta.env.BASE_URL}images/c.jpeg`, label: "Group ka sbse bhola insaan", fallback: "★" },
  { image: `${import.meta.env.BASE_URL}images/d.jpeg`, label: "Supporter ", fallback: "★" },
];

function App() {
  const [showWish, setShowWish] = useState(false);
  const [age, setAge] = useState(0);

  useEffect(() => {
    if (!showWish || age >= 18) return undefined;

    const timer = window.setTimeout(() => setAge((currentAge) => currentAge + 1), 110);
    return () => window.clearTimeout(timer);
  }, [showWish, age]);

  const openBirthdayHug = () => {
    setAge(0);
    setShowWish(true);
  };

  return (
    <main className="page-shell">
      <div className="sparkle sparkle-one">✦</div>
      <div className="sparkle sparkle-two">✧</div>
      <div className="heart heart-one">♡</div>
      <div className="heart heart-two">♥</div>

      <nav className="topbar">
        <span className="logo">for Iram pookie Appi ♡</span>
        <span className="date-pill">08 · 10 · 2008</span>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">a tiny website for a very big love</p>
          <h1>Happy birthday,<br /><em>my sister!</em></h1>
          <p className="intro">
            To the girl who makes every ordinary day feel a little more
            magical. You are my forever bestie, built-in comedian, and
            favorite pookie.
          </p>
          <button className="wish-button" onClick={openBirthdayHug}>
            Open your birthday hug <span>→</span>
          </button>
        </div>
        <div className="hero-art" aria-label="Birthday illustration">
          <div className="sun"></div>
          <div className="blob"></div>
          <div className="cake">🎂</div>
          <div className="bow">🎀</div>
          <div className="art-caption">you are<br /><strong>so loved</strong></div>
        </div>
      </section>

      <section className="memories">
        <div className="section-heading">
          <p className="eyebrow">little snapshots</p>
          <h2>Our cute little world</h2>
          <span className="tiny-line"></span>
        </div>
        <div className="memory-grid">
          {memories.map((memory, index) => (
            <figure className={`memory-card card-${index + 1}`} key={memory.image}>
              <div className="photo-frame">
                <img
                  src={memory.image}
                  alt={memory.label}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span className="photo-fallback">{memory.fallback}</span>
              </div>
              <figcaption>{memory.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="letter-section">
        <div className="letter">
          <span className="stamp">LOVE<br />YOU</span>
          <p className="eyebrow">a note for you</p>
          <h2>You make life<br /><em>so much sweeter.</em></h2>
          <p>
            I hope this year brings you soft mornings, loud laughter, the
            prettiest sunsets, and every dream you have been quietly wishing
            for. Thank you for being you. I love you to the moon and back!
          </p>
          <span className="signature">your forever bestie ♡</span>
        </div>
      </section>

      <footer>made with extra sprinkles & lots of love By Engineer Brother Shahnawaz ✿</footer>

      {showWish && (
        <div className="modal-backdrop" onClick={() => setShowWish(false)}>
          <div className="wish-modal" onClick={(event) => event.stopPropagation()}>
            <span className="modal-heart">♡</span>
            {age < 18 ? (
              <>
                <p className="eyebrow">counting your magic...</p>
                <div className="age-counter" aria-live="polite">{age}</div>
                <p className="counting-text">years of being the cutest pookie</p>
                <div className="progress-track">
                  <span style={{ width: `${(age / 18) * 100}%` }}></span>
                </div>
                <p className="date-range">08 · 10 · 2008&nbsp;&nbsp; → &nbsp;&nbsp;08 · 10 · 2026</p>
              </>
            ) : (
              <>
                <p className="eyebrow">surprise!</p>
                <div className="age-badge">18</div>
                <h2>Big birthday hug<br /><em>incoming...</em></h2>
                <p>18 wonderful years of you — and a lifetime of love ahead. Now go eat extra cake!</p>
                <button className="close-button" onClick={() => setShowWish(false)}>I feel the love ♡</button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
