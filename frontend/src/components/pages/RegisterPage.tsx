/* eslint-disable @typescript-eslint/no-unused-vars */
import "../../scss/pages/_signup.scss";
import { useRef, useEffect, useState, FormEvent } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'; 

const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,48}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

const RegisterPage: React.FC = () => {
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [username, setUsername] = useState<string>('');
  const [validName, setValidName] = useState<boolean>(false);
  const [userFocus, setUsernameFocus] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);

  const [matchPassword, setMatchPassword] = useState<string>('');
  const [validMatch, setValidMatch] = useState<boolean>(false);
  const [matchFocus, setMatchFocus] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState<string>('');
  const [registerStatus, setRegisterStatus] = useState<string>('');
  
  const register = () => {
    // envoie une requête au serveur backend avec url register
    axios.post("http://localhost:3000/register", {
      username: username,
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus("Account created successfully!");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg('');
  }, [username, email, password, matchPassword]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validName || !validEmail || !validPassword || !validMatch) {
      setErrMsg("Invalid");
      return;
    }

    register();
  }

  return (
    <>
      <section className="signup">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1 className="signup__h">Register</h1>
        <form className="signup__form" onSubmit={handleSubmit}>
          <label htmlFor="username">
            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validName || !username ? "hide" : "invalid"} />
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUsernameFocus(true)}
            onBlur={() => setUsernameFocus(false)}
          />
          <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle}  />
            4 to 24 characters.<br />
            Must begin with a letter.<br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <label htmlFor="email">
            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            aria-invalid={validEmail ? "false" : "true"}
          />
          <label htmlFor="password">
            <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="passwordnote"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <p id="passwordnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.<br />
            Must include uppercase, lowercase letters and a number .<br />
          </p>

          <label htmlFor="confirm_password">
            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? "hide" : "invalid"} />
          </label>
          <input
            type="password"
            id="confirm_password"
            placeholder="Confirm Password"
            onChange={(e) => setMatchPassword(e.target.value)}
            value={matchPassword}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password.
          </p>
          <button
            disabled={!validName || !validEmail || !validPassword || !validMatch}
            type="submit"
          >
            Sign Up
          </button>
          <h1>{registerStatus}</h1>
        </form>
        <p>
          Already have an account?
          <a href="/login"> Log In</a>
        </p>
      </section>
    </>
  );
}

export default RegisterPage;
