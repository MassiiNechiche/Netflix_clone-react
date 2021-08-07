import React, { useRef } from "react";
import { auth } from "../firebase";
import "./signUpScreen.css";

function SingUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign in</h1>
        <input ref={emailRef} placeholder="email" type="email" required />
        <input
          ref={passwordRef}
          placeholder="password"
          type="password"
          required
        />
        <button className="login" type="submit" onClick={signIn}>
          Log In
        </button>
        <button type="submit" className="signUpScreen__link" onClick={register}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SingUpScreen;
