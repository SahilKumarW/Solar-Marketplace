import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignupPage.css"; // Create a new CSS file for SignupPage styles

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // Perform your signup logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // You may want to redirect the user or perform other actions after successful signup
  };

  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
          Welcome to <span style={{ color: "orange" }}>Energy Matrix!</span>
        </h2>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>
      <div className="signup-container">
        <form>
          <label>Full Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div>
            <button
              type="submit"
              className="custom-button"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <h4 style={{ marginRight: "8px" }}>Already have an account?</h4>
            <Link to="/LoginPage" className="text-blue-600">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
