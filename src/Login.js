import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "firebase";
require("firebase/auth");

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
          alt=""
        />

        <h1>Sign in to Kakashi's Platform</h1>
        <p>kakashi.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
