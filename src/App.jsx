export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#070b14",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "40px"
    }}>
      
      <h1 style={{ color: "#34d399", fontSize: "50px" }}>
        Leadex
      </h1>

      <h2 style={{ marginTop: "10px" }}>
        B2B Lead Generation & Appointment Setting
      </h2>

      <p style={{ opacity: 0.7, maxWidth: "600px", marginTop: "15px" }}>
        We help Australian companies book qualified meetings with decision-makers.
      </p>

      <button style={{
        marginTop: "25px",
        padding: "12px 24px",
        background: "#34d399",
        border: "none",
        borderRadius: "10px",
        fontWeight: "bold",
        cursor: "pointer"
      }}>
        Book a Call
      </button>

    </div>
  )
}
