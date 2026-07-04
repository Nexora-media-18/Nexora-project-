export default function Dashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "250px",
          background: "#0F172A",
          color: "white",
          padding: "20px"
        }}
      >
        <h2>Nexora Admin</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Dashboard</li>
          <li>Service Requests</li>
          <li>Users</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>Portfolio</li>
          <li>Testimonials</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main style={{ flex: 1, padding: "40px" }}>
        <h1>Dashboard</h1>

        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ padding: 20, border: "1px solid #ddd" }}>
            Total Users<br />
            <h2>152</h2>
          </div>

          <div style={{ padding: 20, border: "1px solid #ddd" }}>
            Service Requests<br />
            <h2>48</h2>
          </div>

          <div style={{ padding: 20, border: "1px solid #ddd" }}>
            Revenue<br />
            <h2>₹45,000</h2>
          </div>
        </div>
      </main>
    </div>
  );
}