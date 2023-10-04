import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  // State
  const [email, setEmail] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const navigate = useNavigate();

  // Comportement

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO mettre dans .env (API_URL)
    await axios.post("http://localhost:3000/register", {
      username: usernameReg,
      email: email,
      password: passwordReg,
    });
    navigate("/login");
  };

  // Render
  return (
    <div className="signup">
      <div className="signup__h">
        <h2>Sign Up</h2>
      </div>

      <form className="signup__form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          placeholder="Username"
          value={usernameReg}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          placeholder="Password"
          value={passwordReg}
          required
        />
        <p>
          <a href="#">Choose an avatar</a>
        </p>
        <button role="button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
