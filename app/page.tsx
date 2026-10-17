const Arrow = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path d="M3 10h13M10.5 4.5 16 10l-5.5 5.5" />
  </svg>
);

const services = [
  {
    number: "01",
    title: "Digital products",
    text: "We design and build software, platforms and web experiences that make complex work feel simple.",
    accent: "sun",
  },
  {
    number: "02",
    title: "Business systems",
    text: "From automation to business management tools, we connect the systems your team depends on every day.",
    accent: "blue",
  },
  {
    number: "03",
    title: "Technology advisory",
    text: "Clear, practical guidance for digital transformation, product direction, security and sustainable growth.",
    accent: "green",
  },
];

const steps = [
  ["01", "Understand", "We start with the people, processes and opportunities behind the brief."],
  ["02", "Make it useful", "We turn the strategy into a focused product, system or roadmap your team can use."],
  ["03", "Keep it moving", "We stay close through launch, learning and the next stage of growth."],
];

export default function Home() {
  return (
    <>
      <header>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Nesdag home">
          <span className="brand-mark">N</span>
          <span className="brand-name">nesdag</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#quickerpay">QuickerPay</a>
        </div>
        <a className="nav-cta" href="#contact">
          Let&apos;s talk <Arrow />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Technology for what&apos;s next</p>
          <h1>Build the future<br /><em>with clarity.</em></h1>
          <p className="hero-intro">
            Nesdag is a technology company building the digital products, systems and support that help businesses do their best work.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Start a conversation <Arrow /></a>
            <a className="text-link" href="#capabilities">Explore our work <Arrow /></a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-core">
            <span className="core-label">N / 01</span>
            <span className="core-word">move<br /><i>forward</i></span>
            <span className="core-line" />
          </div>
          <span className="visual-note note-top">Systems / Products / People</span>
          <span className="visual-note note-bottom">06° 31&apos; N &nbsp; 03° 22&apos; E</span>
        </div>
      </section>
      </header>

      <main>

      <section className="signal-bar">
        <div className="shell signal-inner">
          <p>Built in Nigeria. Designed for the world.</p>
          <div className="signal-rule" />
          <p>Digital infrastructure for ambitious teams <span>↗</span></p>
        </div>
      </section>

      <section className="intro-section shell" id="about">
        <div className="section-label"><span>01</span><span>Who we are</span></div>
        <div className="intro-grid">
          <h2>Technology should create <span>momentum.</span></h2>
          <div className="intro-body">
            <p>We believe the best technology is useful, considered and built around real people. Nesdag brings product thinking, technical craft and business understanding together to help organisations move from idea to impact.</p>
            <p>Our work spans software applications, digital platforms, business systems and the technical foundations that keep them working.</p>
            <a className="text-link" href="#capabilities">What we do <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="shell">
          <div className="section-label light"><span>02</span><span>Capabilities</span></div>
          <div className="capabilities-head">
            <h2>Good ideas need<br /><em>good systems.</em></h2>
            <p>We bring the right mix of strategy, design and engineering to every challenge — without adding unnecessary complexity.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className={`service-card ${service.accent}`} key={service.number}>
                <div className="service-top"><span>{service.number}</span><Arrow /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-foot"><span>Explore capability</span><span className="service-line" /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section shell" id="quickerpay">
        <div className="product-stamp">A Nesdag<br />product</div>
        <div className="product-copy">
          <div className="section-label"><span>03</span><span>In the world</span></div>
          <p className="product-kicker">Meet QuickerPay</p>
          <h2>Payments that<br /><em>keep pace.</em></h2>
          <p className="product-body">QuickerPay is our SaaS platform for simpler, faster business payments. Built by Nesdag for the teams who need to collect, reconcile and grow with confidence.</p>
          <a className="button button-dark" href="https://quickerpay.co" target="_blank" rel="noopener noreferrer">Visit QuickerPay <Arrow /></a>
        </div>
        <div className="product-art" aria-hidden="true">
          <div className="card-back" />
          <div className="payment-card">
            <div className="payment-card-top"><span>QUICKER</span><span>PAY</span></div>
            <div className="payment-symbol">+</div>
            <div className="payment-card-bottom"><span>01 — 26</span><span>Nesdag</span></div>
          </div>
          <span className="art-caption">One platform.<br />More possibilities.</span>
        </div>
      </section>

      <section className="process-section shell">
        <div className="section-label"><span>04</span><span>How we work</span></div>
        <div className="process-head"><h2>Make progress<br /><em>feel possible.</em></h2><p>Clear thinking, close collaboration and a bias toward useful outcomes. That&apos;s the Nesdag way.</p></div>
        <div className="steps-grid">
          {steps.map(([number, title, text]) => <article className="step" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div className="contact-panel">
          <div><p className="eyebrow"><span className="eyebrow-dot" /> Have a challenge in mind?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2></div>
          <div className="contact-side"><p>Tell us what you&apos;re working on, where you want to go and what&apos;s getting in the way. We&apos;ll bring a considered point of view.</p><a className="button button-light" href="mailto:hello@nesdag.co">hello@nesdag.co <Arrow /></a></div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><span className="brand-mark">N</span><span className="brand-name">nesdag</span></a>
        <p>Technology that moves business forward.</p>
        <div className="footer-meta"><span>© {new Date().getFullYear()} Nesdag Tech Ltd</span><span>Registered in Nigeria</span><a href="mailto:hello@nesdag.co">Get in touch ↗</a></div>
      </footer>
      </main>
    </>
  );
}
