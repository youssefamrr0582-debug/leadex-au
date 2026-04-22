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
          We generate qualified B2B leads and book decision-maker meetings for sales teams.
        </p>

        <a href="#contact" className="cta">Get Started</a>
      </section>

      {/* WHAT */}
      <section id="what" className="section">
        <h2>What We Do</h2>

        <div className="card">
          We help B2B companies generate qualified leads and book meetings with decision-makers.
          <br /><br />
          Our team handles the full outbound sales process so your team only closes deals.
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="section">
        <h2>How It Works</h2>

        <div className="grid">
          {[
            ["Define ICP", "Target customers"],
            ["Outbound", "Campaigns"],
            ["Qualify", "Filter leads"],
            ["Educate", "Warm prospects"],
            ["Book", "Meetings"],
            ["Close", "Revenue"]
          ].map((i, idx) => (
            <div key={idx} className="card hover">
              <b>{i[0]}</b>
              <p>{i[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section">
        <h2>Industries</h2>

        <div className="chips">
          {["Telecom","SaaS","Cybersecurity","Cloud","VoIP","Logistics","ISPs"].map((i, idx) => (
            <span key={idx} className="chip">{i}</span>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <h2>Pricing</h2>

        <div className="card">
          Tailored pricing based on volume, targeting complexity, and seats required.
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        <div className="card formCard">

          <input placeholder="Name" />
          <input placeholder="Company Name" />
          <input placeholder="Position" />
          <input placeholder="Email" />
          <textarea placeholder="Message"></textarea>

          <button className="cta">Send Message</button>

          <div className="contactInfo">
            📞 02 7265 1399<br />
            ✉️ info@lea-dex.com
          </div>

        </div>
      </section>

      <footer className="footer">
        © 2026 LeadEX
      </footer>

    </div>
  );
}
