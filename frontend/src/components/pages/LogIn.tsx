import { useState } from "react";
import '../../scss/pages/login.scss';

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <div className="login">
      <div className="login__h">
        <h3>Welcome back!</h3>
      </div>
      <div className="login__form">
        <input
          type="text"
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
        <button role='button' type="submit">Login to your account</button>
      </div>
      <p>Don't have an account? <a href="./SignUp.tsx">Sign up now!</a></p>
    </div>

  );
}   /* 
      */