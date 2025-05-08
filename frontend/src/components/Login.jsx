import React from "react";
import { useState } from "react";
import styles from "./styles/register.module.css";
import axios from "axios";
import useAuthStore from "../services/authStore.js";
import { useNavigate } from "react-router";
import { Link, Navigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const { isLoggedIn, login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log("Full response:", response);

      useAuthStore.getState().login({
        token: response.data.token,
        user: response.data.user, // Teraz zawiera rolę
      });

      navigate("/");
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
    }
  };

  if (isLogged) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.container}>
      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h3>Login</h3>
          <label htmlFor="email">
            Email
            <input
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className={styles.button}>
            Login
          </button>
          <p>
            You dont have an account? Please <Link to="/Register">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
