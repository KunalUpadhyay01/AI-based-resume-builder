import React, { useState } from "react";
import Layout from "../../Components/Layout";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(true);
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleClose = () => {
    setModal(false);
    navigate('/');
  };

  return (
    <div>
      <Layout>
        {modal && (
<div className="registerForm">
          <div className="formContainer">
            <button className="closeButton" onClick={handleClose}>
              x
            </button>
            <h3>Login</h3>
            <form type="submit">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                placeholder="Enter your email"
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter your password"
              />
              <button type="submit" onClick={handleSubmit}>
                Login
              </button>
            </form>
            <span className="loginLink">
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </div>
        </div>
        )}
      </Layout>
    </div>
  );
}
