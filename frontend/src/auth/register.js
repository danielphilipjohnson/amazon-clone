import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    const registerInfo = {
      username: username,
      email: email,
      password: password,
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
      //login
      const { data } = await axios.post("http://localhost:1337/auth/local", {
        identifier: email,
        password: password,
      });

      console.log(data);
      // store the data in a token context
    }
    console.log(register);

    const registerResponse = await register.json();
    console.log(registerResponse);
  }
  return (
    <form>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="Username"
      />
      <br />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
      />
      <br />
      <button type="button" onClick={() => handleRegister()}>
        Register
      </button>
    </form>
  );
}

export default Register;
