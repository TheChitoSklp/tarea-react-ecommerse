import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/LoginRegister";
import "./Login.css";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, userName, login, logout } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Login failed");
      }

      const data = await response.json();
      const token = data.data.token;
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const loggedInUser = users.find((user) => user.token === token);

      if (loggedInUser) {
        login(token, loggedInUser.displayName);
      } else {
        const newUser = {
          displayName: email.split("@")[0],
          email: email,
          token: token,
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        login(token, newUser.displayName);
      }
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <>
          <h2>Welcome, {userName}</h2>
          <button className="btn-login" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn-login" type="submit">
              Login
            </button>
            <Link to="/register">
              <span>Create Account</span>
            </Link>
          </form>
        </>
      )}
    </div>
  );
};
