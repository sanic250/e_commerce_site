import React from "react";
import { useState } from "react";
import styles from "./styles/register.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      })

      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setIsRegistered(true);
  };

  if (isRegistered) {
    navigate("/Login");
  }

  return (
    <div className={styles.container}>
      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h3>Register</h3>
          <label htmlFor="username">
            <span>Username</span>
            <input
              type="text"
              placeholder="Username.."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
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
            Register
          </button>
          <p>
            Do you have an account? Please <Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
