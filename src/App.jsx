import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 700);
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ color: "#ff7a00" }}>LeadEX</h1>
      </div>
    );
  }

  return (
    <div style={styles.page}>

      <div style={styles.nav}>
        <div style={styles.logo}>LeadEX</div>
        <div style={styles.links}>
          <a href="#services">What We Do</a>
          <a href="#process">How It Works</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div style={styles.hero}>
        <h1>Stop Chasing Leads. Start Closing Deals.</h1>
        <p>
          LeadEX helps B2B companies in Australia connect directly with qualified decision-makers.
        </p>

        <button style={styles.btn}>Get Started</button>
      </div>

      <Section id="services" title="What We Do" items={[
        "We identify your ideal clients",
        "We reach out on your behalf",
        "We qualify leads",
        "We filter opportunities",
        "We book meetings",
        "We manage scheduling",
        "We deliver appointments"
      ]} />

      <Section id="process" title="How It Works" items={[
        "Discovery",
        "Research",
        "Outreach",
        "Qualification",
        "Booking",
        "Delivery"
      ]} />

      <Section id="industries" title="Industries" items={[
        "Telecom",
        "SaaS",
        "Cybersecurity",
        "Cleaning",
        "Logistics",
        "Mobile"
      ]} />

      <div id="contact" style={styles.contact}>
        <h2>Contact Us</h2>

        <p>info@lea-dex.com</p>
        <p>0272651399</p>

        <input placeholder="Name" style={styles.input} />
        <input placeholder="Email" style={styles.input} />
        <textarea placeholder="Message" style={styles.textarea} />

        <button style={styles.btn}>Send</button>
      </div>

      <div style={styles.footer}>
        © 2026 LeadEX
      </div>

    </div>
  );
}

function Section({ title, items, id }) {
  return (
    <div id={id} style={styles.section}>
      <h2>{title}</h2>

      <div style={styles.grid}>
        {items.map((i) => (
          <div key={i} style={styles.card}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    background: "#f7f4ef",
    color: "#222",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#fff",
  },

  logo: {
    color: "#ff7a00",
    fontWeight: "bold",
  },

  links: {
    display: "flex",
    gap: "10px",
    fontSize: "13px",
  },

  hero: {
    textAlign: "center",
    padding: "60px 20px",
  },

  btn: {
    marginTop: "15px",
    background: "#ff7a00",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
  },

  section: {
    padding: "40px 20px",
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "10px",
    marginTop: "20px",
  },

  card: {
    background: "#fff",
    padding: "12px",
    borderRadius: "8px",
  },

  contact: {
    padding: "50px 20px",
    textAlign: "center",
  },

  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "250px",
  },

  textarea: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "250px",
    height: "80px",
  },

  footer: {
    textAlign: "center",
    padding: "10px",
    fontSize: "12px",
    color: "#777",
  },
};
