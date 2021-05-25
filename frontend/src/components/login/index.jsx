import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import AltFooter from "../sitewide/alt-footer/index";

import "./login.css";
import AmazonLogo from "../../images/amazon-logo-black.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../adapters/firebase";

function Login() {
  const [{ user }] = useUser();
  console.log(user);
  const [formState, setFormState] = React.useState(user);
  const [password, setPassword] = useState("");

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     history.push("/");
    //   })
    //   .catch((error) => alert(error.message));
    //some fancy firebase login
  };

  const register = (e) => {
    e.preventDefault();
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     // it successfully created a new user with email and password
    //     if (auth) {
    //       history.push("/");
    //     }
    //   })
    //   .catch((error) => alert(error.message));
    // // do some fancy firebase register
  };

  return (
    <div className="login">
      <Link to="/" className="header__link header__link-alt">
        <img className="login__logo" src={AmazonLogo} alt="amazon fake clone" />
        <span>.fake</span>
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            id="email"
            name="email"
            type="text"
            value={formState.email}
            onChange={handleChange}
          />

          <h5>Password</h5>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Continue
          </button>
        </form>

        <p>
          This is an <a href="/">AMAZON FAKE CLONE</a> This site isn't real so
          please use a fake email you will not have to confirm it. Nor will any
          emails be sent to you.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>

      <AltFooter />
    </div>
  );
}

export default Login;
