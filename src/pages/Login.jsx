import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin123" && password === "Admin123") {
      localStorage.setItem("auth", "true");
      navigate("/users");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
<h2 className="login-title">Welcome to User Dashboard</h2>
        <p>Manage users, roles and access securely</p>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
