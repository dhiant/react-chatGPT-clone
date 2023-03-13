import React, { useContext, useState } from "react";
import "./loginform.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SvgComponent from "../SvgComponent";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const { dispatch } = useContext(AuthContext);
  console.log("context", dispatch);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("user", user);
      dispatch({ type: "LOGIN", payload: user });
      console.log("email", email);
      // once user is signed in navigate them to the home page
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setErrorMessage(true);
    }
  };

  return (
    <div className="loginFormContainer">
      <SvgComponent w={50} h={50} stroke="#202123" />
      <h1>Create your account</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="password"
        />
        <button type="submit">Continue</button>
        {errorMessage && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default LoginForm;
