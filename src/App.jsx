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
    <div style={{ fontFamily: "Arial", lineHeight: "1.6" }}>

      {/* NAVBAR */}
      <div style={{
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
      </div>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1>Stop Chasing Leads. Start Closing Deals.</h1>
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          We generate qualified B2B leads and book decision-maker meetings so your sales team only closes.
        </p>
        <button style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          marginTop: "20px"
        }}>
          Get Started
        </button>
      </section>

      {/* WHAT WE DO */}
      <section id="what" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>What We Do</h2>
        <p>We help B2B companies generate qualified leads and book meetings with decision-makers.</p>
        <p>Our team handles the entire front-end sales process—from identifying prospects to booking appointments.</p>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>How It Works</h2>

        {[
          ["Define Your ICP", "We align on your target customers"],
          ["Outreach", "We run multi-channel campaigns"],
          ["Qualify", "We filter unqualified leads"],
          ["Educate", "We prepare prospects"],
          ["Book", "We schedule meetings"],
          ["Close", "You close the deal"]
        ].map((item, i) => (
          <div key={i} style={{ margin: "15px 0" }}>
            <b>{item[0]}</b>
            <p>{item[1]}</p>
          </div>
        ))}
      </section>

      {/* INDUSTRIES */}
      <section id="industries" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Industries We Serve</h2>
        <p>Telecom • SaaS • Cybersecurity • Logistics • Cloud Services • VoIP • ISP • Mobile Plans</p>
      </section>

      {/* QUALITY */}
      <section id="quality" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Quality Control</h2>
        <p>We prioritize quality over quantity.</p>
        <p>Every lead is pre-qualified based on agreed criteria.</p>
        <p>Matched to your ideal customer profile.</p>
        <p>Informed before the call.</p>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Pricing</h2>
        <p>Tailored pricing based on your needs.</p>
        <p>Depends on seats, volume, and targeting complexity.</p>
        <p>Clear expectations from the start.</p>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Guarantee</h2>
        <p>80% Minimum Show Rate Guarantee</p>
        <p>If performance drops below 80%, we compensate with extra meetings or credit.</p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>Phone: 02 7265 1399</p>
        <p>Email: info@lea-dex.com</p>

        <div style={{ marginTop: "20px" }}>
          <input placeholder="Name" /><br /><br />
          <input placeholder="Email" /><br /><br />
          <textarea placeholder="Message" /><br /><br />
          <button style={{
            background: "black",
            color: "white",
            padding: "10px 20px",
            border: "none"
          }}>
            Send
          </button>
        </div>

        <p style={{ marginTop: "20px", fontSize: "12px" }}>
          We'll get back to you shortly
        </p>
      </section>

      <footer style={{ textAlign: "center", padding: "20px", fontSize: "12px" }}>
        © 2026 LeadEX
      </footer>

    </div>
  );
}
