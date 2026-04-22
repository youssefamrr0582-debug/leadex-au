import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);

    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".revealOnScroll").forEach((el) =>
      observer.observe(el)
    );

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  if (!loaded) return <div className="loader">LeadEX</div>;

  return (
    <div className="app">

      {/* NAV */}
      <header className={`nav ${scrolled ? "navScrolled" : ""}`}>
        <b className="logo">LeadEX</b>

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
          We generate high-quality B2B leads and book meetings with decision-makers.
        </p>

        <a href="#contact" className="cta">
          Get Started
        </a>
      </section>

      {/* WHAT */}
      <section id="what" className="section revealOnScroll">
        <h2>What We Do</h2>
        <div className="card">
          We help B2B companies generate qualified leads and book meetings with decision-makers.
          Our team handles the full outbound process so your sales team only closes deals.
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="section revealOnScroll">
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
          • Targeting complexity<br />
          • Seats required
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section revealOnScroll">
        <h2>Contact</h2>

        <div className="card formCard">

          <div className="contactInfo">
            📞 02 7265 1399 <br />
            ✉️ info@lea-dex.com
          </div>

          <div className="form">
            <input placeholder="Name" />
            <input placeholder="Company Name" />
            <input placeholder="Position" />
            <input placeholder="Email" />
            <textarea placeholder="Message"></textarea>

            <button className="cta">Send Message</button>
          </div>

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
