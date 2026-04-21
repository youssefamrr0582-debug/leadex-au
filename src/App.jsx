import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "32px",
        fontWeight: "bold"
      }}>
        LeadEX
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Arial", background: "#fff", color: "#111" }}>

      {/* NAVBAR */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        background: "white"
      }}>
        <b>LeadEX</b>
        <div style={{ display: "flex", gap: "15px", fontSize: "14px" }}>
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
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1>Stop Chasing Leads. Start Closing Deals.</h1>
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          We generate qualified B2B leads and book decision-maker meetings so your sales team only closes.
        </p>
        <button style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none"
        }}>
          Get Started
        </button>
      </section>

      {/* WHAT WE DO */}
      <section id="what" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>What We Do</h2>
        <p>
          We help B2B companies generate qualified leads and book meetings with decision-makers.
        </p>
        <p>
          Our team handles the entire front-end sales process—from identifying the right prospects to educating them and scheduling appointments—so your team can focus on closing high-value deals.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>How It Works</h2>

        <div>
          <p><b>Define Your Ideal Customer Profile</b></p>
          <p>We align on your target customers</p>

          <p><b>Outbound</b></p>
          <p>We run personalized multi-channel campaigns</p>

          <p><b>Qualify</b></p>
          <p>We filter out unqualified prospects</p>

          <p><b>Educate</b></p>
          <p>We prepare prospects before the call</p>

          <p><b>Book</b></p>
          <p>We schedule qualified appointments</p>

          <p><b>Close</b></p>
          <p>You close the deal</p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Industries We Serve</h2>
        <p>
          Telecom • SaaS • Cybersecurity • Logistics • Cloud Services • VoIP • Internet Service Providers • Business Mobile Plans
        </p>
      </section>

      {/* QUALITY */}
      <section id="quality" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Quality Control</h2>
        <p>We prioritize quality over quantity.</p>
        <p>Every lead is pre-qualified based on agreed criteria.</p>
        <p>Matched to your ideal customer profile.</p>
        <p>Informed before the call.</p>
        <p>Higher conversion rates and better use of your time.</p>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Pricing</h2>
        <p>Our pricing is tailored to your needs.</p>
        <p>Depends on number of seats, lead volume, and targeting complexity.</p>
        <p>We agree on all parameters upfront.</p>
        <p>Clear expectations and scalable results.</p>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Guarantee</h2>
        <p>80% Minimum Show Rate Guarantee</p>
        <p>If performance drops below 80%, we will compensate you with additional meetings or credit.</p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Contact Us</h2>

        <p>info@lea-dex.com</p>
        <p>02 7265 1399</p>

        <div style={{ marginTop: "20px" }}>
          <input placeholder="Name" /><br /><br />
          <input placeholder="Email" /><br /><br />
          <textarea placeholder="Message" /><br /><br />
          <button style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            border: "none"
          }}>
            Send
          </button>
        </div>

        <p style={{ marginTop: "20px", fontSize: "12px" }}>
          We'll get back to you shortly
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "20px", fontSize: "12px" }}>
        © 2026 LeadEX
      </footer>

    </div>
  );
}
