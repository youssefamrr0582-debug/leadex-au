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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(".revealOnScroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  if (!loaded) return <div className="loader">LeadEX</div>;

  return (
    <div className="app bgShapes">

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
        <h1 className="reveal">
          Stop Chasing Leads.<br />
          <span>Start Closing Deals.</span>
        </h1>

        <p className="reveal delay1">
          We generate qualified B2B leads and book decision-maker meetings so your sales team only closes.
        </p>

        <a href="#contact" className="cta reveal delay2">
          Get Started
        </a>
      </section>

      {/* WHAT */}
      <section id="what" className="section revealOnScroll">
        <h2>What We Do</h2>
        <div className="card">
          We help B2B companies generate qualified leads and book meetings with decision-makers.
          <br /><br />
          Our team handles the entire front-end sales process—from identifying the right prospects to educating them and scheduling appointments—so your team can focus on closing high-value deals.
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="section revealOnScroll">
        <h2>How It Works</h2>
        <div className="grid">
          {[
            ["Define ICP","We align on your target customers"],
            ["Outreach","We run personalized multi-channel campaigns"],
            ["Qualify","We filter out unqualified prospects"],
            ["Educate","We prepare prospects before the call"],
            ["Book","We schedule qualified appointments"],
            ["Close","You close the deal"]
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
        <h2>Industries We Serve</h2>
        <div className="chips">
          {[
            "Telecom","SaaS","Cybersecurity","Logistics",
            "Cloud Services","VoIP","Internet Service Providers","Business Mobile Plans"
          ].map((i, idx) => (
            <span key={idx} className="chip">{i}</span>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section revealOnScroll">
        <h2>Pricing</h2>
        <div className="card">
          Our pricing is tailored to your needs.
          <br /><br />
          • Number of seats<br />
          • Lead volume<br />
          • Targeting complexity
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" className="section revealOnScroll">
        <h2>Guarantee</h2>
        <div className="card highlight">
          <b>80% Minimum Show Rate Guarantee</b>
          <p>If performance drops below 80%, we compensate with additional meetings or credit.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section revealOnScroll">
        <h2>Contact Us</h2>

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

      <footer className="footer">
        © 2026 LeadEX
      </footer>

    </div>
  );
}
