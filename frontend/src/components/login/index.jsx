import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useUser from "../../hooks/useUser";
import AltFooter from "../sitewide/alt-footer/index";
import axios from "axios";

import "./login.css";
import AmazonLogo from "../../images/amazon-logo-black.png";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [{ user, status, error }, userDispatch] = useUser();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [formState, setFormState] = React.useState({ password: "", ...user });

  const isPending = status === "pending";
  const isRejected = status === "rejected";

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function registerUser(dispatch, user, updates) {
    //password contaminated // move to stored
    dispatch({ type: "start update", updates });
    try {
      const registerInfo = {
        username: updates.email,
        email: updates.email,
        password: updates.password,
      };

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

      if (register.status === 200) {
        loginUser(dispatch, user, registerInfo);
      } else {
        const error = {
          message: "Make sure to provide valid email and password",
        };
        dispatch({ type: "fail update", error });
      }
    } catch (error) {
      dispatch({ type: "fail update", error });
      return Promise.reject(error);
    }
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
    } catch (error) {
      dispatch({ type: "fail update", error });
      return Promise.reject(error);
    }
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    loginUser(userDispatch, user, formState).catch(() => {});
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();
    registerUser(userDispatch, user, formState).catch(() => {});
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
            {isPending ? "..." : isRejected ? "✖ Try again" : "Continue"}
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
          {isPending
            ? "..."
            : isRejected
            ? "✖ Try again"
            : "Create your Amazon Account"}
        </button>
        {isRejected ? (
          <pre style={{ color: "red" }}>{error.message}</pre>
        ) : null}
      </div>
      <AltFooter />
    </div>
  );
}

export default Login;
