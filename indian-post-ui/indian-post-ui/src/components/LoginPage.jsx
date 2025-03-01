import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login Response:", data);
      toast.success("Login Successful!");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Login failed. Please try again.");
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="login-card">
        <h2 className="login-title">Welcome to Bharat Postal Network</h2>
        {error && <div className="error-message">{error}</div>}
        <form className="login-form" onSubmit={sendData}>
          <div className="input-group">
            <label htmlFor="email">
              <FaEnvelope className="input-icon" /> Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              <FaLock className="input-icon" /> Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? <span className="loading"></span> : "Login"}
          </button>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}
