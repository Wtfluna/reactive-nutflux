import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");

  return (
    <div className="signup">
      <div className="signup__h">
        <h2>Sign Up</h2>
      </div>

      <div className="signup__form">
        <input
          type="text"
          onChange={() => {
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
          onChange={() => {
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
      </div>
    </div>
  );
}
