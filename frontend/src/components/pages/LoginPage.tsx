import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authTokenKey } from "../../localStorage";

export default function LoginPage() {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Comportement

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3000/login", {
      email: email,
      password: password,
    });

    const token = response.data;

    localStorage.setItem(authTokenKey, token);

    navigate("/home");
  };
  // Render
  return (
    <div className="login">
      <div className="login__h">
        <h3>Welcome back!</h3>
      </div>
      <form className="login__form" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button role="button" type="submit">
          Login to your account
        </button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register now!</a>
      </p>
    </div>
  );
}
