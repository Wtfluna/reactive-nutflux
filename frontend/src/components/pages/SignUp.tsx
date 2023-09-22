import { useState } from "react";
import '../../scss/pages/signup.scss';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="signup">
      <div className="signup-h">
        <h2>Sign Up</h2>
      </div>

      <div className="signup-form">

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <p><a href="#">Choose an avatar</a></p>
        <button role="button" type="submit">Sign Up</button>
      </div>
    </div>
  );
}
