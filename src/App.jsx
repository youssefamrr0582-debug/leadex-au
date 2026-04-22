import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(t);
  }, []);

  if (!loaded) return <div className="loader">LeadEX</div>;

  return (
    <div className="app">

      {/* NAV */}
      <header className="nav">
        <div className="logo">LeadEX</div>

        <div className="links">
          <a href="#what">What We Do</a>
          <a href="#how">How It Works</a>
          <a href="#industries">Industries</a>
          <a href="#quality">Quality</a>
          <a href="#pricing">Pricing</a>
          <a href="#guarantee">Guarantee</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>
          Stop Chasing Leads.<br />
          <span>Start Closing Deals.</span>
        </h1>

        <p>
          We generate qualified B2B leads and book decision-maker meetings so your sales team only closes.
        </p>

        <a className="cta" href="#contact">Get Started</a>
      </section>

      {/* WHAT */}
      <section id="what" className="section">
        <h2>What We Do</h2>

        <div className="card">
          We help B2B companies generate qualified leads and book meetings with decision-makers.<br /><br />
          Our team handles the entire front-end sales process—from identifying the right prospects to educating them and scheduling appointments—so your team can focus on closing high-value deals.
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="section">
        <h2>How It Works</h2>

        <div className="card">
          <b>Define Your Ideal Customer Profile</b><br />
          We align on your target customers<br /><br />

          <b>Outreach</b><br />
          We run personalized multi-channel campaigns<br /><br />

          <b>Qualify</b><br />
          We filter out unqualified prospects<br /><br />

          <b>Educate</b><br />
          We prepare prospects before the call<br /><br />

          <b>Book</b><br />
          We schedule qualified appointments<br /><br />

          <b>Close</b><br />
          You close the deal
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section">
        <h2>Industries We Serve</h2>

        <div className="card">
          Telecom<br />
          SaaS<br />
          Cybersecurity<br />
          Logistics<br />
          Cloud Services<br />
          VoIP<br />
          Internet Service Providers<br />
          Business Mobile Plans
        </div>
      </section>

      {/* QUALITY */}
      <section id="quality" className="section">
        <h2>Quality Control</h2>

        <div className="card">
          We prioritize quality over quantity.<br />
          Every lead is pre-qualified based on agreed criteria.<br />
          Matched to your ideal customer profile.<br />
          Informed before the call.<br />
          Higher conversion rates and better use of your time.
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <h2>Pricing</h2>

        <div className="card">
          Our pricing is tailored to your needs.<br /><br />
          It depends on:<br />
          • Number of seats (appointments capacity)<br />
          • Lead volume<br />
          • Targeting complexity<br /><br />
          We agree on all parameters upfront for clear expectations and scalable results.
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" className="section">
        <h2>Guarantee</h2>

        <div className="card highlight">
          <b>80% Minimum Show Rate Guarantee</b><br />
          If performance drops below 80%, we will compensate you with additional meetings or credit.
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>

        <div className="card">
          📞 Phone: 02 7265 1399<br />
          ✉️ Email: info@lea-dex.com
        </div>

        <div className="card">
          <input placeholder="Name" /><br /><br />
          <input placeholder="Email" /><br /><br />
          <textarea placeholder="Message"></textarea><br /><br />
          <button className="cta">Send</button>
        </div>

        <p className="subtext">We'll get back to you shortly</p>
      </section>

    </div>
  );
}
