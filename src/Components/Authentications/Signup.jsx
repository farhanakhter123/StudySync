import React, {useState} from "react";
import "./Log-Sign.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";
import "animate.css";


const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
      });
      const [errorMsg, setErrorMsg] = useState("");
      const [buttonDisabled, setButtonDisabled] = useState(false);
      const navigate = useNavigate();
    //   const [isActive, setIsActive] = useState(false);
    
        const handleSubmission = () => {
        if (!values.name || !values.email || !values.pass) {
          setErrorMsg("Fill all fields");
        } else {
          setErrorMsg("");
          setButtonDisabled(true);
          createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (response) => {
              setButtonDisabled(false);
              const user = response.user;
              await updateProfile(user, {
                displayName: values.name,
              });
              // setIsActive(true)
              navigate("/login");
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
            Create an account<h2>Please create an account to continue....</h2>
          </h1>
          <div className="input-fields space-y-2    ">
            <input type="text" placeholder="Name" onChange={(event)=>setValues((prev)=>({...prev, name: event.target.value}))}/>
            <input type="email" placeholder="Email" onChange={(event)=>setValues((prev)=>({...prev, email: event.target.value}))}/>
            <input type="password" placeholder="Password" onChange={(event)=>setValues((prev)=>({...prev, pass: event.target.value}))}/>
            <h3>{errorMsg}</h3>
          </div>
          <button onClick={handleSubmission} disabled={buttonDisabled}>Sign Up</button>
          <div className="last-div">
            <span>Already have an account</span>
            <span className="login-link">
              <Link to="/login">Log In</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
