import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
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

        <div style={styles.links}>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.h1}>
          Stop Chasing Leads.<br /> Start Closing Deals.
        </h1>

        <p style={styles.sub}>
          We help B2B companies connect with real decision-makers and book qualified meetings that convert into revenue.
        </p>

        <button style={styles.cta}>Get Started</button>
      </div>

      {/* SERVICES */}
      <div id="services" style={styles.section}>
        <h2 style={styles.title}>What We Do</h2>

        <div style={styles.grid}>
          {[
            "Lead Generation",
            "Outbound Calls",
            "Appointment Setting",
            "Qualified Meetings"
          ].map((item) => (
            <div key={item} style={styles.card}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={styles.contact}>
        <h2 style={styles.title}>Contact Us</h2>

        <p style={styles.info}>info@lea-dex.com</p>
        <p style={styles.info}>0272651399</p>

        <div style={styles.form}>
          <input placeholder="Name" style={styles.input} />
          <input placeholder="Email" style={styles.input} />
          <textarea placeholder="Message" style={styles.textarea} />

          <button style={styles.cta}>Send Message</button>
        </div>
      </div>

      <div style={styles.footer}>
        © {new Date().getFullYear()} LeadEX
      </div>

    </div>
  );
}

/* ===== Styles ===== */
const styles = {
  page: {
    fontFamily: "Arial",
    background: "linear-gradient(180deg, #f7f4ef, #ffffff)",
    color: "#222",
  },

  center: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: "42px",
    color: "#ff7a00",
    fontWeight: "bold",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 30px",
    background: "#fff",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
  },

  logoSmall: {
    fontWeight: "bold",
    color: "#ff7a00",
    fontSize: "18px",
  },

  links: {
    display: "flex",
    gap: "20px",
    fontSize: "14px",
  },

  hero: {
    textAlign: "center",
    padding: "90px 20px",
  },

  h1: {
    fontSize: "42px",
    marginBottom: "15px",
    lineHeight: "1.2",
  },

  sub: {
    maxWidth: "650px",
    margin: "0 auto",
    color: "#555",
    fontSize: "16px",
  },

  cta: {
    marginTop: "25px",
    background: "#ff7a00",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 8px 20px rgba(255,122,0,0.25)",
  },

  section: {
    padding: "70px 20px",
    textAlign: "center",
  },

  title: {
    fontSize: "28px",
    marginBottom: "25px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
    maxWidth: "800px",
    margin: "0 auto",
  },

  card: {
    background: "#fff",
    padding: "18px",
    borderRadius: "14px",
    border: "1px solid #eee",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  },

  contact: {
    padding: "70px 20px",
    textAlign: "center",
    background: "#fff",
  },

  info: {
    color: "#555",
    margin: "5px 0",
  },

  form: {
    marginTop: "25px",
    maxWidth: "380px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
  },

  textarea: {
    padding: "12px",
    height: "100px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    fontSize: "12px",
    color: "#888",
  },
};
