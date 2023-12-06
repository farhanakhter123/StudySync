import React, { useState } from "react";
import "./Log-Sign.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import "animate.css";


const Login = () => {
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();
  //   const [isActive, setIsActive] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
    } else {
      setErrorMsg("");
      setButtonDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.pass)
        .then((response) => {
          setButtonDisabled(false);
          navigate("/home");
          console.log(response);
        })
        .catch((err) => {
          setButtonDisabled(false);
          setErrorMsg(err.message.slice(22, -2));
          console.log("Error", err.message);
        });
      console.log(values);
    }
  };

  return (
    <>
      <div className="mainBody">
        <div className="log-sign-box animate__animated animate__fadeInUp">
          <h1>
            Welcome Back !<h2>Please enter your account details to logIn</h2>
          </h1>
          <div className="input-fields space-y-2">
            <input
              type="email"
              placeholder="Email"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            />
            <h3>{errorMsg}</h3>
          </div>
          <button onClick={handleSubmission} disabled={buttonDisabled}>
            Log In{" "}
          </button>
          <div className="check-field">
            <label htmlFor="">
              <input type="checkbox" className="check-box mr-2" />
              Remember me
            </label>
            <span>Need help ?</span>
          </div>
          <div className="last-div">
            <span>Doesn't have an account?</span>
            <span className="signin-link">
              <Link to="/signup">Sign Up </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
