import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 700);
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
          Stop Chasing Leads. Start Closing Deals.
        </h1>

        <p style={styles.p}>
          We help B2B companies connect with real decision makers and book qualified meetings.
        </p>

        <button style={styles.button}>
          Get Started
        </button>
      </div>

      {/* SERVICES */}
      <div id="services" style={styles.section}>
        <h2>What We Do</h2>

        <div style={styles.grid}>
          {["Lead Generation", "Outbound Calls", "Appointment Setting", "Qualified Meetings"].map((item) => (
            <div key={item} style={styles.card}>
              {item}
            </div>
          ))}
        </div>
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
        © LeadEX
      </div>

    </div>
  );
}

/* ===== Styles ===== */
const styles = {
  page: {
    fontFamily: "Arial",
    background: "#f7f4ef",
    color: "#222",
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

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 25px",
    background: "#fff",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
  },

  logoSmall: {
    color: "#ff7a00",
    fontWeight: "bold",
  },

  links: {
    display: "flex",
    gap: "15px",
    fontSize: "14px",
  },

  hero: {
    textAlign: "center",
    padding: "70px 20px",
  },

  h1: {
    fontSize: "36px",
    marginBottom: "10px",
  },

  p: {
    maxWidth: "600px",
    margin: "0 auto",
    color: "#555",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "10px",
    marginTop: "20px",
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #eee",
  },

  form: {
    marginTop: "20px",
    maxWidth: "350px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },

  textarea: {
    padding: "10px",
    height: "90px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },

  button: {
    background: "#ff7a00",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "20px",
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    padding: "15px",
    fontSize: "12px",
    color: "#777",
  },
};
