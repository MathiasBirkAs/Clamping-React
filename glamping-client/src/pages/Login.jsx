import useAuth from "../hooks/useAuth.jsx";

// Input- og knap-styles til loginformularen
const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  backgroundColor: "#2e2e2e",
  color: "white",
};

const buttonStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#4caf50",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

export default function Login() {
  // Bruger data og funktioner fra useAuth-hooken
  const {
    email,
    setEmail,
    password,
    setPassword,
    signIn,
    error,
    signedIn,
    signOut,
    user,
  } = useAuth();

  // Funktion der kaldes når man trykker "Log ind"
  const handleSubmit = async (e) => {
    e.preventDefault(); // Forhindrer at siden refresher
    await signIn();     // Kalder login-funktionen fra hooken
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "5rem auto",
      padding: "2rem",
      backgroundColor: "#1e1e1e",
      borderRadius: "1rem",
      boxShadow: "0 0 20px rgba(0,0,0,0.3)",
      color: "white",
      fontFamily: "sans-serif"
    }}>
      <h2 style={{ marginBottom: "2rem", color: "#90ee90" }}>🌲 Login til Glamping</h2>

      {signedIn ? (
        // Hvis brugeren er logget ind, vis denne del
        <div style={{ textAlign: "center" }}>
          <p>✅ Velkommen, <strong>{user?.name}</strong> ({user?.role})</p>
          <img src={user?.image} alt="Profil" width={100} style={{ borderRadius: "50%", margin: "1rem 0" }} />
          <br />
          <button
            onClick={signOut} // Kalder logout-funktionen fra hooken
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#ff4d4d",
              color: "white",
              cursor: "pointer"
            }}>
            Log ud
          </button>
        </div>
      ) : (
        // Hvis brugeren ikke er logget ind, vis formularen
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Gemmer værdien i hook'en
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Adgangskode"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Gemmer adgangskoden i hook'en
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Log ind</button>
          {error && <p style={{ color: "#ff4d4d", marginTop: "1rem" }}>{error}</p>}
        </form>
      )}
    </div>
  );
}

