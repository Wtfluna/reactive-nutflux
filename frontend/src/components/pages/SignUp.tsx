import { useState } from "react";
import Axios from 'axios';
import '../../scss/pages/signup.scss';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [usernameReg, setUsernameReg] = useState('');

  const Register =() => {
    Axios.post('http://localhost3001/register', {username: usernameReg, email: email, password: passwordReg})
    .then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="signup">
      <div className="signup__h">
        <h2>Sign Up</h2>
      </div>

      <div className="signup__form">

        <input
          type="text" 
          onChange={(e) => {setUsernameReg(e.target.value);
          }}
          placeholder="Username"
          value={usernameReg}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {setEmail(e.target.value);
          }}
          required
        />
        <input
          type="password"
          onChange={(e) => {setPasswordReg(e.target.value);
          }}
          placeholder="Password"
          value={passwordReg}
          required
        />
        <p><a href="#">Choose an avatar</a></p>
        <button onClick={register} role="button" type="submit">Sign Up</button>
      </div>
    </div>
  );
}
