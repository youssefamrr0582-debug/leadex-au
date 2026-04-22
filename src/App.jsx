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
          <a href="#what">What</a>
          <a href="#how">How</a>
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
          We generate high-quality B2B leads and book decision-maker meetings so your sales team only closes revenue.
        </p>

        <a href="#contact" className="cta">
          Get Started
        </a>
      </section>

      {/* WHAT */}
      <section id="what" className="section">
        <h2>What We Do</h2>

        <div className="card">
          We help B2B companies generate qualified leads and book meetings with decision-makers.<br /><br />
          We fully handle outbound so your team focuses only on closing deals.
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="section">
        <h2>How It Works</h2>

        <div className="grid">
          {[
            ["Define ICP", "We align on your target customers"],
            ["Outbound", "Multi-channel outreach campaigns"],
            ["Qualify", "Filter and verify prospects"],
            ["Educate", "Warm up before calls"],
            ["Book", "Schedule meetings"],
            ["Close", "You close revenue"]
          ].map((i, idx) => (
            <div key={idx} className="card">
              <b>{i[0]}</b>
              <p>{i[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section">
        <h2>Industries</h2>

        <div className="grid">
          {[
            "Telecom",
            "SaaS",
            "Cybersecurity",
            "Cloud Services",
            "VoIP",
            "Logistics",
            "ISPs",
            "Business Mobile",
            "Solar",
            "Commercial Cleaning"
          ].map((i, idx) => (
            <div key={idx} className="card">
              <b>{i}</b>
              <p>High-quality appointment setting</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <h2>Pricing</h2>

        <div className="card">
          Tailored pricing based on:<br /><br />
          • Lead volume<br />
          • Seats capacity<br />
          • Target complexity<br /><br />
          Everything is aligned upfront for clarity and scale.
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" className="section">
        <h2>Guarantee</h2>

        <div className="card highlight">
          <b>80% Minimum Show Rate Guarantee</b><br /><br />
          If performance drops below 80%, we compensate with extra meetings or credit.
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>

        <div className="card">
          📞 02 7265 1399<br />
          ✉️ info@lea-dex.com
        </div>

        <div className="card">
          <input placeholder="Name" />
          <input placeholder="Company Name" />
          <input placeholder="Position / Job Title" />
          <input placeholder="Email" />
          <textarea placeholder="Message"></textarea>

          <button className="cta" style={{ width: "100%", marginTop: "12px" }}>
            Send Message
          </button>
        </div>

        <p className="subtext">We'll get back to you shortly</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 LeadEX
      </footer>

    </div>
  );
}
