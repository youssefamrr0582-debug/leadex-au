import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!loaded) {
    return <div className="loader">LeadEX</div>;
  }

  return (
    <div className="app">

      {/* NAV */}
      <header className={`nav ${scrolled ? "navScrolled" : ""}`}>
        <b className="logo">LeadEX</b>

        <div className="links">
          <a href="#what">What We Do</a>
          <a href="#how">How It Works</a>
          <a href="#industries">Industries</a>
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

        <a href="#contact" className="cta">
          Get Started
        </a>
      </section>

      {/* WHAT */}
      <section id="what" className="section">
        <h2>What We Do</h2>

        <div className="card">
          We help B2B companies generate qualified leads and book meetings with decision-makers.
          <br /><br />
          Our team handles the entire front-end sales process—from identifying the right prospects to educating them and scheduling appointments—so your team can focus on closing high-value deals.
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="section">
        <h2>How It Works</h2>

        <div className="grid">
          <div className="card hover">
            <b>Define Your Ideal Customer Profile</b>
            <p>We align on your target customers</p>
          </div>

          <div className="card hover">
            <b>Outreach</b>
            <p>We run personalized multi-channel campaigns</p>
          </div>

          <div className="card hover">
            <b>Qualify</b>
            <p>We filter out unqualified prospects</p>
          </div>

          <div className="card hover">
            <b>Educate</b>
            <p>We prepare prospects before the call</p>
          </div>

          <div className="card hover">
            <b>Book</b>
            <p>We schedule qualified appointments</p>
          </div>

          <div className="card hover">
            <b>Close</b>
            <p>You close the deal</p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section">
        <h2>Industries We Serve</h2>

        <div className="chips">
          <span className="chip">Telecom</span>
          <span className="chip">SaaS</span>
          <span className="chip">Cybersecurity</span>
          <span className="chip">Logistics</span>
          <span className="chip">Cloud Services</span>
          <span className="chip">VoIP</span>
          <span className="chip">Internet Service Providers</span>
          <span className="chip">Business Mobile Plans</span>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <h2>Pricing</h2>

        <div className="card">
          Our pricing is tailored to your needs.
          <br /><br />
          It depends on:
          <br />• Number of seats  
          <br />• Lead volume  
          <br />• Targeting complexity  
          <br /><br />
          We align everything upfront for clear expectations and scalable results.
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" className="section">
        <h2>Guarantee</h2>

        <div className="card highlight">
          <b>80% Minimum Show Rate Guarantee</b>
          <p>If performance drops below 80%, we compensate with additional meetings or credit.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>

        <div className="card">
          📞 02 7265 1399 <br />
          ✉️ info@lea-dex.com
        </div>

        <p className="subtext">
          We'll get back to you shortly
        </p>
      </section>

      <footer className="footer">
        © 2026 LeadEX
      </footer>

    </div>
  );
}
