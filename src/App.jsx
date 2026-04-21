import { useEffect, useState } from "react";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(t);
  }, []);

  if (!ready) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#050505",
        color: "#ff7a00",
        fontSize: "42px",
        fontWeight: "800",
        letterSpacing: "3px"
      }}>
        LeadEX
      </div>
    );
  }

  const section = {
    padding: "120px 20px",
    maxWidth: "1150px",
    margin: "0 auto"
  };

  const card = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "18px",
    padding: "22px",
    backdropFilter: "blur(12px)",
    transition: "0.3s"
  };

  return (
    <div style={{
      fontFamily: "Inter, Arial",
      color: "white",
      background: "radial-gradient(circle at top, #141414, #000)"
    }}>

      {/* NAVBAR */}
      <header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "18px 42px",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        zIndex: 100
      }}>
        <b style={{ color: "#ff7a00", fontSize: "18px" }}>LeadEX</b>

        <div style={{ display: "flex", gap: "20px", fontSize: "13px" }}>
          {["What","How","Industries","Pricing","Guarantee","Contact"].map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`}
              style={{
                color: "#bbb",
                textDecoration: "none",
                transition: "0.3s"
              }}>
              {i}
            </a>
          ))}
        </div>
      </header>

      {/* HERO */}
      <section style={{
        ...section,
        textAlign: "center",
        paddingTop: "200px"
      }}>
        <h1 style={{
          fontSize: "64px",
          marginBottom: "20px",
          lineHeight: "1.1"
        }}>
          Stop Chasing Leads. <br />
          <span style={{ color: "#ff7a00" }}>Start Closing Deals.</span>
        </h1>

        <p style={{
          color: "#aaa",
          maxWidth: "720px",
          margin: "0 auto"
        }}>
          We generate high-intent B2B leads and book qualified meetings so your sales team focuses only on closing revenue.
        </p>

        <button style={{
          marginTop: "35px",
          padding: "14px 34px",
          borderRadius: "999px",
          border: "none",
          background: "#ff7a00",
          color: "#000",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 0 40px rgba(255,122,0,0.4)"
        }}>
          Get Started
        </button>
      </section>

      {/* WHAT WE DO */}
      <section id="what" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>What We Do</h2>

        <div style={card}>
          We act as your outsourced growth engine.<br /><br />
          From prospecting → outreach → qualification → booking meetings, we handle the entire top-of-funnel so your closers only close.
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>How It Works</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "18px"
        }}>
          {[
            ["ICP Strategy","Define perfect customer profile"],
            ["Outbound Engine","Multi-channel outreach system"],
            ["Lead Filtering","Only high-quality prospects"],
            ["Warm Up","Educated before call"],
            ["Booking","Calendar-ready meetings"],
            ["Revenue","Your team closes deals"]
          ].map((i) => (
            <div key={i[0]} style={card}>
              <b style={{ color: "#ff7a00" }}>{i[0]}</b>
              <p style={{ color: "#aaa" }}>{i[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Industries</h2>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px"
        }}>
          {["Telecom","SaaS","Cybersecurity","Cloud","VoIP","Fintech","Logistics","ISPs"].map((i) => (
            <span key={i} style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.03)"
            }}>
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Pricing</h2>

        <div style={card}>
          Fully customized based on:
          <br /><br />
          • Volume<br />
          • Target market<br />
          • Sales capacity<br /><br />
          We design the system, not just the service.
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Guarantee</h2>

        <div style={{
          ...card,
          border: "1px solid #ff7a00",
          boxShadow: "0 0 30px rgba(255,122,0,0.15)"
        }}>
          <b style={{ color: "#ff7a00" }}>80% Show Rate Guarantee</b>
          <p style={{ color: "#aaa" }}>
            If performance drops below 80%, we compensate with extra qualified meetings or credit.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Contact</h2>

        <div style={card}>
          <p>📞 02 7265 1399</p>
          <p>✉️ info@lea-dex.com</p>

          <div style={{ marginTop: "20px" }}>
            <input placeholder="Name" style={{ margin: "5px", padding: "10px" }} />
            <input placeholder="Email" style={{ margin: "5px", padding: "10px" }} />
            <br />
            <textarea placeholder="Message" style={{ marginTop: "10px", padding: "10px", width: "80%" }} />
            <br />

            <button style={{
              marginTop: "10px",
              padding: "12px 26px",
              background: "#ff7a00",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "40px",
        fontSize: "12px",
        color: "#666"
      }}>
        © 2026 LeadEX — Built for Revenue
      </footer>

    </div>
  );
}
