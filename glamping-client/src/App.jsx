import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.status === "ok") {
        setToken(data.data.token);
        setError("");
        console.log("Token modtaget:", data.data.token);
      } else {
        setError(data.message || "Noget gik galt");
      }
    } catch (err) {
      console.error("Fejl under login:", err);
      setError("Serverfejl");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: "1rem", width: "100%" }}
        />
        <input
          type="password"
          placeholder="Adgangskode"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: "1rem", width: "100%" }}
        />
        <button type="submit">Log ind</button>
      </form>

      {token && (
        <div style={{ marginTop: "1rem", color: "green" }}>
          ✅ Logget ind! <br />
          <small>Token: {token.slice(0, 20)}...</small>
        </div>
      )}

      {error && (
        <p style={{ marginTop: "1rem", color: "red" }}>
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}

export default App;

