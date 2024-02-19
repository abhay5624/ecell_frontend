import React, { useState, useEffect } from "react";
import "../styles/LoginForm.css"  
import avatar from '../images/avatar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function LoginForm() {
  const [registrationNo, setRegistrationNo] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();    
    console.log("Registration No:", registrationNo);
    console.log("Password:", password);
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    const addFocusClass = (event) => {
      let parent = event.target.parentNode.parentNode;
      parent.classList.add("focus");
    };

    const removeFocusClass = (event) => {
      let parent = event.target.parentNode.parentNode;
      if (event.target.value === "") {
        parent.classList.remove("focus");
      }
    };

    inputs.forEach(input => {
      input.addEventListener("focus", addFocusClass);
      input.addEventListener("blur", removeFocusClass);
    });

    return () => {
      inputs.forEach(input => {
        input.removeEventListener("focus", addFocusClass);
        input.removeEventListener("blur", removeFocusClass);
      });
    };
  }, []);

  return (
    <>
      <div className="login-container">
        <div className="login-content">
          <form onSubmit={handleLogin}>
            <img src={avatar} alt="Avatar" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
              {/* <i class="fa-solid fa-user"></i> */}
              <FontAwesomeIcon icon={faUser} className="links"/>

              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  value={registrationNo}
                  onChange={(e) => setRegistrationNo(e.target.value)}
                  className="input" // Added class name here
                  required
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
              {/* <i class="fa-solid fa-lock"></i> */}
            <FontAwesomeIcon icon={faLock} className=""/>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input" // Added class name here
                  required
                />
              </div>
            </div>
            <div className="forgot-password">
          <button onClick={handleForgotPassword}>Forgot Password?</button>
        </div>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
     
      </div>
    </>
  );
}

export default LoginForm;
