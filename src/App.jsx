import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  if (loading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f7f4ef"
      }}>
        <h1 style={{ color: "#ff7a00", fontSize: 40 }}>LeadEX</h1>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f7f4ef", padding: 40 }}>
      
      <h1 style={{ fontSize: 45, color: "#ff7a00" }}>
        Stop Chasing Leads. Start Closing Deals.
      </h1>

      <p style={{ maxWidth: 700, color: "#444" }}>
        LeadEX helps B2B companies connect with qualified decision-makers and book sales-ready meetings.
      </p>

      <button style={{
        marginTop: 20,
        background: "#ff7a00",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: 8
      }}>
        Get Started
      </button>

      <hr style={{ margin: "40px 0" }} />

      <h2>What We Do</h2>
      <ul>
        <li>We identify your ideal clients</li>
        <li>We reach decision-makers directly</li>
        <li>We book qualified meetings</li>
        <li>We deliver sales-ready leads</li>
      </ul>

      <hr style={{ margin: "40px 0" }} />

      <h2>Contact</h2>
      <p>Email: info@lea-dex.com</p>
      <p>Phone: 0272651399</p>

    </div>
  );
}
