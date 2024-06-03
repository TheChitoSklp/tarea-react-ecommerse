import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
export const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ displayName, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Registration failed");
      }

      const data = await response.json();
      alert("Registration successful!");

      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const newUser = { displayName, email, token: data.data.token };
      const updatedUsers = [...existingUsers, newUser];

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      navigate("/login");
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="container-register">
      <h2 className="title-register">Register</h2>
      <form className="form-register" onSubmit={handleSubmit}>
        <input
          className="input-register"
          type="text"
          placeholder="Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
        <input
          className="input-register"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input-register"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="button-register" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
