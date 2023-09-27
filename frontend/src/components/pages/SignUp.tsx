
import '../../scss/pages/signup.scss';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function RegistrationForm() {
  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
  }>({
    username: '',
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', formData);
      // Redirect to ChooseProfile page upon successful registration
      history.push('/ChooseProfile');
    } catch (error) {
      console.error(error);
      // Handle registration failure
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Sign up</button>
    </form>
  );
}

export default RegistrationForm;


/*import { useState } from "react";
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
*/