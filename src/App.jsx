import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    // scroll reveal
    const elements = document.querySelectorAll(".revealOnScroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("active");
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!loaded) {
    return <div className="loader">LeadEX</div>;
  }

  return (
    <div className="app">

      {/* NAV */}
      <header className={`nav ${scrolled ? "navScrolled" : ""}`}>
        <b>LeadEX</b>
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
        <h1 className="reveal">
          Stop Chasing Leads.<br />
          <span>Start Closing Deals.</span>
        </h1>

        <p className="reveal delay1">
          We generate high-intent B2B leads and book qualified meetings for your sales team.
        </p>

        <button className="cta reveal delay2">
          Get Started
        </button>

        <div className="glow"></div>
      </section>

      {/* WHAT */}
      <section id="what" className="section revealOnScroll">
        <h2>What We Do</h2>
        <div className="card">
          We help B2B companies generate qualified leads and book meetings with decision-makers.
          <br /><br />
          We handle the entire front-end sales process so your team only closes deals.
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="section revealOnScroll">
        <h2>How It Works</h2>

        <div className="grid">
          {[
            ["Define ICP","Target customers"],
            ["Outbound","Campaigns"],
            ["Qualify","Filter leads"],
            ["Educate","Warm prospects"],
            ["Book","Meetings"],
            ["Close","Revenue"]
          ].map((i, idx) => (
            <div key={idx} className="card hover">
              <b>{i[0]}</b>
              <p>{i[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section revealOnScroll">
        <h2>Industries</h2>

        <div className="chips">
          {["Telecom","SaaS","Cybersecurity","Cloud","VoIP","Logistics","ISPs"].map((i, idx) => (
            <span key={idx} className="chip">{i}</span>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section revealOnScroll">
        <h2>Pricing</h2>

        <div className="card">
          Tailored pricing based on:
          <br /><br />
          • Volume<br />
          • Target market<br />
          • Complexity
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section revealOnScroll">
        <h2>Contact</h2>

        <div className="card">
          📞 02 7265 1399 <br />
          ✉️ info@lea-dex.com
        </div>
      </section>

      <footer className="footer">
        © 2026 LeadEX
      </footer>

    </div>
  );
}
