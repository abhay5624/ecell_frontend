import React, { useState } from "react";
import "../styles/LoginForm.css"; 

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

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Registration No."
              value={registrationNo}
              onChange={(e) => setRegistrationNo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="forgot-password">
          <button onClick={handleForgotPassword}>Forgot Password?</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
