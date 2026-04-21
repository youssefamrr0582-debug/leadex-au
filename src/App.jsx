import { useEffect, useState } from "react";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(t);
  }, []);

  if (!loaded) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f0f0f",
        color: "#ff7a00",
        fontSize: "42px",
        fontWeight: "700",
        letterSpacing: "2px"
      }}>
        LeadEX
      </div>
    );
  }

  const card = {
    background: "white",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    transition: "0.3s"
  };

  const section = {
    padding: "80px 20px",
    maxWidth: "1100px",
    margin: "0 auto"
  };

  return (
    <div style={{ fontFamily: "Inter, Arial", background: "#f7f4ef", color: "#111" }}>

      {/* NAVBAR */}
      <header style={{
        position: "sticky",
        top: 0,
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "space-between",
        padding: "18px 40px",
        borderBottom: "1px solid #eee",
        zIndex: 100
      }}>
        <b style={{ fontSize: "18px", color: "#ff7a00" }}>LeadEX</b>

        <div style={{ display: "flex", gap: "18px", fontSize: "14px" }}>
          {["What","How","Industries","Quality","Pricing","Guarantee","Contact"].map((t) => (
            <a key={t} href={`#${t.toLowerCase()}`} style={{ textDecoration: "none", color: "#333" }}>
              {t}
            </a>
          ))}
        </div>
      </header>

      {/* HERO */}
      <section style={{
        ...section,
        textAlign: "center",
        paddingTop: "120px"
      }}>
        <h1 style={{ fontSize: "52px", marginBottom: "20px" }}>
          Stop Chasing Leads. <span style={{ color: "#ff7a00" }}>Start Closing Deals.</span>
        </h1>

        <p style={{ maxWidth: "700px", margin: "0 auto", color: "#555" }}>
          We generate qualified B2B leads and book decision-maker meetings so your sales team only closes.
        </p>

        <button style={{
          marginTop: "30px",
          padding: "12px 26px",
          borderRadius: "999px",
          border: "none",
          background: "#ff7a00",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 10px 20px rgba(255,122,0,0.3)"
        }}>
          Get Started
        </button>
      </section>

      {/* WHAT WE DO */}
      <section id="what" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>What We Do</h2>

        <div style={card}>
          <p>
            We help B2B companies generate qualified leads and book meetings with decision-makers.
          </p>
          <p style={{ marginTop: "10px", color: "#666" }}>
            Our team handles the entire front-end sales process—from identifying prospects to scheduling appointments.
          </p>
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
            ["Define ICP", "We align your ideal customers"],
            ["Outbound", "Multi-channel campaigns"],
            ["Qualify", "Filter serious leads"],
            ["Educate", "Prepare prospects"],
            ["Book", "Schedule meetings"],
            ["Close", "You close deals"]
          ].map((i, idx) => (
            <div key={idx} style={card}>
              <b style={{ color: "#ff7a00" }}>{i[0]}</b>
              <p style={{ marginTop: "8px", color: "#666" }}>{i[1]}</p>
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
          gap: "10px",
          justifyContent: "center"
        }}>
          {["Telecom","SaaS","Cybersecurity","Logistics","Cloud","VoIP","ISP","Mobile"].map((i) => (
            <span key={i} style={{
              padding: "10px 16px",
              background: "white",
              borderRadius: "999px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
            }}>
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* QUALITY */}
      <section id="quality" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Quality Control</h2>

        <div style={card}>
          <p>✔ We prioritize quality over quantity</p>
          <p>✔ Every lead is pre-qualified</p>
          <p>✔ Matches your ICP</p>
          <p>✔ Fully informed before calls</p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Pricing</h2>

        <div style={card}>
          <p>Custom pricing based on:</p>
          <p>• Seats</p>
          <p>• Lead volume</p>
          <p>• Targeting complexity</p>
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Guarantee</h2>

        <div style={{
          ...card,
          border: "2px solid #ff7a00"
        }}>
          <b style={{ color: "#ff7a00" }}>80% Minimum Show Rate</b>
          <p style={{ marginTop: "10px" }}>
            If performance drops below 80%, we compensate with extra meetings or credit.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={section}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Contact</h2>

        <div style={{ ...card, textAlign: "center" }}>
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
              color: "white",
              borderRadius: "8px"
            }}>
              Send
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "30px", fontSize: "12px", color: "#777" }}>
        © 2026 LeadEX
      </footer>

    </div>
  );
}
