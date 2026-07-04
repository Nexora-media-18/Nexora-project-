export default function Login() {
  return (
    <div style={{ padding: 50 }}>
      <h1>Admin Login</h1>

      <input placeholder="Email" /><br /><br />

      <input
        type="password"
        placeholder="Password"
      /><br /><br />

      <button>Login</button>
    </div>
  );
}