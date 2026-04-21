import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f4ef",
        }}
      >
        <h1 style={{ color: "#ff7a00" }}>LeadEX</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#f7f4ef",
        padding: "40px",
        textAlign: "center",
      }}
    >
      {/* HERO */}
      <h1>Stop Chasing Leads. Start Closing Deals.</h1>
      <p>
        We generate qualified B2B leads and book decision-maker meetings so your
        sales team focuses only on closing deals.
      </p>

      {/* CONTACT INFO */}
      <h2 style={{ marginTop: "40px", color: "#ff7a00" }}>Contact Us</h2>

      <p>📞 02 7265 1399</p>
      <p>✉️ info@lea-dex.com</p>

      {/* FORM */}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          emailjs.sendForm(
            "service_id",
            "template_id",
            e.target,
            "public_key"
          );

          alert("Message sent successfully!");
          e.target.reset();
        }}
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />

        <button
          style={{
            background: "#ff7a00",
            color: "#fff",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
