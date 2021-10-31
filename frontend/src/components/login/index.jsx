import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import useUser from "../../hooks/useUser";

import axios from "axios";
import isEmail from "validator/lib/isEmail";

import AltFooter from "../sitewide/alt-footer/index";

import AmazonLogo from "../../images/amazon-logo-black.png";
import "./login.css";

function Login() {
  const [{ user, status, error }, userDispatch] = useUser();
  const history = useHistory();
  const [mode, setMode] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (mode === "login") {
      loginUser(userDispatch, user, data).catch(() => {});
    }
    if (mode === "register") {
      registerUser(userDispatch, user, data).catch(() => {});
    }
  };

  const isPending = status === "pending";
  const isRejected = status === "rejected";

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

  return (
    <div className="login">
      <Link to="/" className="header__link header__link-alt">
        <img className="login__logo" src={AmazonLogo} alt="amazon fake clone" />
        <span>.fake</span>
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {isRejected ? (
            <pre style={{ color: "red" }}>{error.message}</pre>
          ) : null}
          <label htmlFor="email">E-mail</label>
          {errors.email && (
            <div className="alert" role="alert">
              Sorry, that doesn't match.
            </div>
          )}
          <input
            id="email"
            aria-invalid={errors.email ? "true" : "false"}
            name="email"
            {...register("email", {
              required: true,
              validate: (input) => isEmail(input),
            })}
            style={{ borderColor: errors.email && "red" }}
          />

          <label htmlFor="password">Password</label>

          {errors.password && errors.password.type === "required" && (
            <div className="alert" role="alert">
              This is required
            </div>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <div className="alert" role="alert">
              Must contain more than 5 characters
            </div>
          )}
          {errors.password && errors.password.type === "maxLength" && (
            <div className="alert" role="alert">
              Must not contain more than 30 characters
            </div>
          )}
          <input
            id="password"
            type="password"
            aria-invalid={errors.password ? "true" : "false"}
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 30,
            })}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={() => {
              setMode("login");
            }}
          >
            {isPending ? "..." : isRejected ? "✖ Try again" : "Continue"}
          </button>

          <p>
            This is an <a href="/">AMAZON FAKE CLONE</a> This site isn't real so
            please use a fake email you will not have to confirm it. Nor will
            any emails be sent to you.
          </p>

          <button
            type="submit"
            onClick={() => {
              setMode("register");
            }}
            className="login__registerButton"
          >
            {isPending
              ? "..."
              : isRejected
              ? "✖ Try again"
              : "Create your Amazon Account"}
          </button>
        </form>
      </div>
      <AltFooter />
    </div>
  );
}

export default Login;
