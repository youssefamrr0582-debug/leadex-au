import { useEffect, useState } from "react";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  if (!loaded) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        color: "#ff7a00",
        fontSize: "40px",
        fontWeight: "700"
      }}>
        LeadEX
      </div>
    );
  }

  const section = {
    padding: "100px 20px",
    maxWidth: "1100px",
    margin: "0 auto"
  };

  const card = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
    padding: "20px",
    backdropFilter: "blur(10px)",
    transition: "0.3s"
  };

  return (
    <div style={{
      fontFamily: "Arial",
      background: "radial-gradient(circle at top, #1a1a1a, #000)",
      color: "white"
    }}>

      {/* NAVBAR */}
      <header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "18px 40px",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        zIndex: 100
      }}>
        <b style={{ color: "#ff7a00" }}>LeadEX</b>

        <div style={{ display: "flex", gap: "18px", fontSize: "14px" }}>
          {["What","How","Industries","Pricing","Guarantee","Contact"].map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} style={{ color: "#ccc", textDecoration: "none" }}>
              {i}
            </a>
          ))}
        </div>
      </header>

      {/* HERO */}
      <section style={{
        ...section,
        textAlign: "center",
        paddingTop: "180px"
      }}>
        <h1 style={{
          fontSize: "60px",
          marginBottom: "20px"
        }}>
          Stop Chasing Leads. <span style={{ color: "#ff7a00" }}>Start Closing Deals.</span>
        </h1>

        <p style={{ color: "#aaa", maxWidth: "700px", margin: "0 auto" }}>
          We generate qualified B2B leads and book decision-maker meetings so your sales team only focuses on closing.
        </p>

        <button style={{
          marginTop: "30px",
          padding: "14px 30px",
          borderRadius: "999px",
          border: "none",
          background: "#ff7a00",
          color: "black",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 0 30px rgba(255,122,0,0.4)"
        }}>
          Get Started
        </button>
      </section>

      {/* WHAT WE DO */}
      <section id="what" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>What We Do</h2>

        <div style={card}>
          We help B2B companies generate qualified leads and book meetings with decision-makers.
          <br /><br />
          We handle full outbound sales so your team only closes deals.
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>How It Works</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px"
        }}>
          {[
            ["Define ICP","Target ideal customers"],
            ["Outreach","Multi-channel campaigns"],
            ["Qualify","Filter real leads"],
            ["Educate","Warm up prospects"],
            ["Book","Schedule meetings"],
            ["Close","You close deals"]
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
          gap: "10px"
        }}>
          {["Telecom","SaaS","Cybersecurity","Cloud","VoIP","Logistics"].map((i) => (
            <span key={i} style={{
              padding: "10px 16px",
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
          Custom pricing based on:
          <br /><br />
          • Volume<br />
          • Seats<br />
          • Targeting complexity
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Guarantee</h2>

        <div style={{
          ...card,
          border: "1px solid #ff7a00"
        }}>
          <b style={{ color: "#ff7a00" }}>80% Show Rate Guarantee</b>
          <p style={{ color: "#aaa" }}>
            If we drop below 80%, we compensate with extra meetings or credit.
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
            <input placeholder="Name" style={{ margin: "5px", padding: "8px" }} />
            <input placeholder="Email" style={{ margin: "5px", padding: "8px" }} />
            <br />
            <textarea placeholder="Message" style={{ marginTop: "10px", padding: "8px", width: "80%" }} />
            <br />
            <button style={{
              marginTop: "10px",
              padding: "10px 20px",
              background: "#ff7a00",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}>
              Send
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
        © 2026 LeadEX
      </footer>

    </div>
  );
}
