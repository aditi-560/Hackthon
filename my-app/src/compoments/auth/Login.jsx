import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    return (
      <div className="login-container">
        <div className="login-card">
          <h2>Login to your account</h2>
          <form>
            <input
              type="email"
              placeholder="Enter email"
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              required
            />
            <button type="submit">Sign In</button>
          </form>
          <p>
            Don't have an account?{" "}
            <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Login;
  