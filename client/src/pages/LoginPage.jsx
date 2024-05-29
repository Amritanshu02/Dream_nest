import React, { useState } from "react";
import "../styles/Login.scss"
import { setLogin } from "../redux/state";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("https://real-estate-website-1.onrender.com/auth/login", { body: JSON.stringify({ email, password }) });
      /* Get data after fetching */
      const loggedIn = await response.json()

      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token
          })
        )
        navigate("/")
      }

    } catch (err) {
      console.log("Login failed", err.message)
    }
  }

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login_content">
          <form className="login_content_form" onSubmit={handleSubmit}>
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
            <button type="submit">LOG IN</button>
          </form>
          <a href="/register">Don't have an account? Sign In Here</a>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
