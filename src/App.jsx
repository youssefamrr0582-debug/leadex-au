import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={styles.center}>
        <h1 style={{ color: "#ff7a00" }}>LeadEX</h1>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      
      {/* NAV */}
      <div style={styles.nav}>
        <div style={styles.logo}>LeadEX</div>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <h1>Stop Chasing Leads. Start Closing Deals.</h1>
        <p>
          We help B2B companies connect with decision makers and book meetings.
        </p>
      </div>

      {/* SERVICES */}
      <div style={styles.section}>
        <h2>What We Do</h2>

        <div style={styles.grid}>
          <div style={styles.card}>Lead Generation</div>
          <div style={styles.card}>Outbound Calls</div>
          <div style={styles.card}>Appointment Setting</div>
          <div style={styles.card}>Qualified Meetings</div>
        </div>
      </div>

      {/* CONTACT */}
      <div style={styles.section}>
        <h2>Contact</h2>

        <p>info@lea-dex.com</p>
        <p>0272651399</p>
      </div>

    </div>
  );
}

/* ===== styles (no Tailwind needed) ===== */
const styles = {
  page: {
    fontFamily: "Arial",
    background: "#f7f4ef",
    color: "#2b2b2b",
    minHeight: "100vh",
  },

  center: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  nav: {
    padding: "20px",
    background: "#fff",
    borderBottom: "1px solid #ddd",
  },

  logo: {
    color: "#ff7a00",
    fontWeight: "bold",
    fontSize: "22px",
  },

  hero: {
    padding: "60px 20px",
    textAlign: "center",
  },

  section: {
    padding: "40px 20px",
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
    marginTop: "20px",
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #eee",
  },
};
