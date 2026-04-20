import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={styles.center}>
        <h1 style={styles.logo}>LeadEX</h1>
      </div>
    );
  }

  return (
    <div style={styles.page}>

      {/* NAV */}
      <div style={styles.nav}>
        <div style={styles.logoSmall}>LeadEX</div>
        <div style={styles.navLinks}>
          <a href="#services">What We Do</a>
          <a href="#process">How It Works</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.h1}>
          Stop Chasing Leads. Start Closing Deals.
        </h1>

        <p style={styles.p}>
          LeadEX helps B2B companies in Australia connect directly with
          qualified decision-makers and turn conversations into revenue.
        </p>

        <button style={styles.button}>
          Get Started
        </button>
      </div>

      {/* SERVICES */}
      <div id="services" style={styles.section}>
        <h2>What We Do</h2>

        <div style={styles.grid}>
          {[
            "We identify your ideal clients",
            "We reach out on your behalf",
            "We qualify leads",
            "We filter real opportunities",
            "We book meetings",
            "We manage scheduling",
            "We deliver sales-ready appointments"
          ].map((item) => (
            <div key={item} style={styles.card}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div id="process" style={styles.sectionDark}>
        <h2>How It Works</h2>

        <div style={styles.grid}>
          {[
            "Discovery & Targeting",
            "Lead Research",
            "Outreach",
            "Qualification",
            "Booking",
            "Briefing",
            "Delivery"
          ].map((item) => (
            <div key={item} style={styles.cardDark}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <div id="industries" style={styles.section}>
        <h2>Industries</h2>

        <div style={styles.grid}>
          {[
            "Telecom",
            "SaaS",
            "Cybersecurity",
            "Cleaning Services",
            "Logistics",
            "Business Mobile",
            "Cloud Solutions",
            "VoIP"
          ].map((item) => (
            <div key={item} style={styles.card}>
              ● {item}
            </div>
          ))}
        </div>
      </div>

      {/* QUALITY */}
      <div style={styles.sectionDark}>
        <h2>Quality Control</h2>

        <div style={styles.list}>
          <p>✔ We verify every lead</p>
          <p>✔ We confirm decision-makers</p>
          <p>✔ We review conversations</p>
          <p>✔ We ensure sales-ready meetings</p>
          <p>✔ We optimize performance</p>
        </div>
      </div>

      {/* CASE STUDY */}
      <div style={styles.section}>
        <h2>Case Study</h2>
        <p style={styles.box}>
          We helped a B2B company increase sales meetings by switching to
          qualified appointment setting.
        </p>
      </div>

      {/* CONTACT */}
      <div id="contact" style={styles.sectionDark}>
        <h2>Contact Us</h2>

        <p>info@lea-dex.com</p>
        <p>0272651399</p>

        <div style={styles.form}>
          <input placeholder="Name" style={styles.input} />
          <input placeholder="Email" style={styles.input} />
          <textarea placeholder="Message" style={styles.textarea} />

          <button style={styles.button}>
            Send
          </button>
        </div>
      </div>

      <div style={styles.footer}>
        © 2026 LeadEX
      </div>
    </div>
  );
}

/* ===== Styles ===== */
const styles = {
  page: {
    fontFamily: "Arial",
    background: "#f7f4ef",
    color: "#2b2b2b",
  },

  center: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    color: "#ff7a00",
    fontSize: "40px",
    fontWeight: "bold",
  },

  logoSmall: {
    color: "#ff7a00",
    fontWeight: "bold",
    fontSize: "20px",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "white",
    borderBottom: "1px solid #ddd",
  },

  navLinks: {
    display: "flex",
    gap: "15px",
    fontSize: "14px",
  },

  hero: {
    textAlign: "center",
    padding: "70px 20px",
  },

  h1: {
    fontSize: "38px",
    marginBottom: "15px",
  },

  p: {
    maxWidth: "600px",
    margin: "0 auto",
    color: "#555",
  },

  button: {
    marginTop: "20px",
    background: "#ff7a00",
    color: "white",
    padding: "12px 25px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
  },

  section: {
    padding: "50px 20px",
    textAlign: "center",
  },

  sectionDark: {
    padding: "50px 20px",
    textAlign: "center",
    background: "#fff",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "12px",
    marginTop: "25px",
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #eee",
  },

  cardDark: {
    background: "#f7f4ef",
    padding: "15px",
    borderRadius: "10px",
  },

  list: {
    marginTop: "20px",
    lineHeight: "1.8",
  },

  box: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "0 auto",
  },

  form: {
    marginTop: "20px",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },

  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    height: "100px",
  },

  footer: {
    textAlign: "center",
    padding: "15px",
    fontSize: "12px",
    color: "#777",
  },
};
