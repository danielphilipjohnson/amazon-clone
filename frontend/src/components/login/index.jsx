import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import AltFooter from "../sitewide/alt-footer/index";
import axios from "axios";

import "./login.css";
import AmazonLogo from "../../images/amazon-logo-black.png";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [{ user, status, error }, userDispatch] = useUser();
  const [formState, setFormState] = React.useState({ password: "", ...user });

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
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

  async function registerUser(dispatch, user, updates) {
    //password contaminated // move to stored
    dispatch({ type: "start update", updates });
    try {
      const registerInfo = {
        username: updates.email,
        email: updates.email,
        password: updates.password,
      };
      console.log(user);
      console.log(registerInfo);

      const register = await fetch(
        `${process.env.REACT_APP_STRAPI_URL}/auth/local/register`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerInfo),
        }
      );
      console.log(register);

      if (register.status === 200) {
        loginUser(dispatch, user, registerInfo);
      } else {
        console.log("dispatch error");
        throw new error();
      }
    } catch (error) {}
  }

  async function loginUser(dispatch, user, updates) {
    dispatch({ type: "start update", updates });

    try {
      const { data } = await axios.post("http://localhost:1337/auth/local", {
        identifier: updates.email,
        password: updates.password,
      });

      const updatedUser = {
        username: data.user.username,
        email: data.user.email,
      };

      const jwt = data.jwt;

      dispatch({ type: "finish update", updatedUser });
      dispatch({ type: "set token", jwt });
      history.push("/");
      // return updatedUser;
    } catch (error) {
      dispatch({ type: "fail update", error });
      console.log(error);
      return Promise.reject(error);
    }
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    loginUser(userDispatch, user, formState);
  }

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    registerUser(userDispatch, user, formState);
    // const registerInfo = {
    //   username: username,
    //   email: email,
    //   password: password,
    // };

    // const register = await fetch(
    //   `${process.env.REACT_APP_STRAPI_URL}/auth/local/register`,
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(registerInfo),
    //   }
    // );
    // console.log(register);
    // // what is stored in here
    // if (register.status === 200) {
    //   //login
    //   const { data } = await axios.post("http://localhost:1337/auth/local", {
    //     identifier: email,
    //     password: password,
    //   });

    //   console.log(data.jwt);
    //   console.log(data.user);
    //   // store the data in a token context
    // }
    // console.log(register);

    // const registerResponse = await register.json();
    // console.log(registerResponse);
  }

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
            value={formState.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            onClick={handleLoginSubmit}
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

        <button
          onClick={handleRegisterSubmit}
          className="login__registerButton"
        >
          Create your Amazon Account
        </button>
      </div>

      <AltFooter />
    </div>
  );
}

export default Login;
