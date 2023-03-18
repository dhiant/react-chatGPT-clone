import React, { useContext, useState } from "react";
import "./signupform.css";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, goggleAuthProvider } from "../../firebase.config";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SvgComponent from "../SvgComponent";
import { addDoc, collection } from "firebase/firestore";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch({ type: "SIGNUP", payload: user });

      // add user to firebase database
      const docRef = await addDoc(collection(db, "users"), {
        email,
        password,
        date_of_sign_up: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);

      // once user is signed in navigate them to the home page
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setErrorMessage(errorMessage);
    }
  };

  const handleSignUpWithGoggle = async () => {
    try {
      let userCredential = await signInWithPopup(auth, goggleAuthProvider);
      const user = userCredential.user;
      dispatch({ type: "SIGNUP", payload: user });
      console.log("user", user);

      // data when user signup with goggle account
      const email = user.email;
      const user_ID_from_Goggle_Sign_up = user.uid;
      // add user to firebase database
      const docRef = await addDoc(collection(db, "users"), {
        email,
        user_ID_from_Goggle_Sign_up,
        date_of_sign_up: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      // once user is signed in navigate them to the home page
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div className="signupFormContainer">
      <SvgComponent w={50} h={50} stroke="#202123" />
      <h1>Create your account</h1>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div id="signupPassword">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="password"
          />
          {/* eye icon */}
          <i onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <svg
                width={26}
                height={26}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="#202123"
                  strokeWidth={0.792}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5C5.636 5 2 12 2 12s3.636 7 10 7 10-7 10-7-3.636-7-10-7Z" />
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </g>
                <title>Show Password</title>
              </svg>
            ) : (
              <svg
                width={26}
                height={26}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000"
              >
                <path
                  d="M20 14.834C21.308 13.332 22 12 22 12s-3.636-7-10-7a8.595 8.595 0 0 0-2 .236M12 9a2.995 2.995 0 0 1 3 3M3 3l18 18m-9-6a2.997 2.997 0 0 1-2.959-2.5M4.147 9c-.308.345-.585.682-.828 1C2.453 11.128 2 12 2 12s3.636 7 10 7c.341 0 .675-.02 1-.058"
                  stroke="#202123"
                  strokeWidth={0.768}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <title>Hide Password</title>
              </svg>
            )}
          </i>
        </div>
        <button type="submit">Continue</button>
        {errorMessage.trim() !== " " && <span>{errorMessage}</span>}
      </form>
      <div className="signupSeparator">OR</div>
      <button id="signupWithGoggle" onClick={handleSignUpWithGoggle}>
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={20}
            height={20}
          >
            <path
              fill="#fbbb00"
              d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
            />
            <path
              fill="#518ef8"
              d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
            />
            <path
              fill="#28b446"
              d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
            />
            <path
              fill="#f14336"
              d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
            />
          </svg>
        </i>
        Continue with Goggle
      </button>
    </div>
  );
};

export default SignupForm;
