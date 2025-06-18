import React, { useState } from "react";
import Layout from "../../Components/Layout";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.stopPropagation();
    navigate("/");
  };
  const closeContainer = () =>{
    setShowModal(false);
    navigate("/");
  }
  return (
    <Layout>
      {showModal && (
        <div className="registerForm">
          <div className="formContainer">
            <button className="closeButton" onClick={closeContainer}>x</button>
            <h3>Register here</h3>
            <form type="submit">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter your name"
              />
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
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                placeholder="Confirm your password"
              />

              <button type="submit" onClick={handleSubmit}>
                {" "}
                Register{" "}
              </button>
            </form>
            <span className="loginLink">
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Register;
