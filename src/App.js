import React, { useState } from "react";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="thank-you">
        {isLogin ? (
          <h1>THANK-YOU</h1>
        ) : (
          <h1 className="success-msg">Registration done successfully..!!</h1>
        )}
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        {!isLogin && <p>It's free and only takes a minute</p>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </>
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {!isLogin && <input type="password" placeholder="Confirm Password" required />}
          <button type="submit">Submit</button>

          {!isLogin ? (
            <>
              <p className="terms">
                By clicking the Sign Up button, you agree to our{" "}
                <a href="#">Terms and Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </p>
              <p className="login-link">
                Already have an account?{" "}
                <span className="link" onClick={() => setIsLogin(true)}>
                  Login Here
                </span>
              </p>
            </>
          ) : (
            <p className="login-link">
              Not have an account?{" "}
              <span className="link" onClick={() => setIsLogin(false)}>
                Sign Up Here
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
