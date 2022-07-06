import React, { useState } from "react";
import "./Login.css";
import login from "./login.svg";
import { useAuth } from "../../context/AuthContext";
import SignUpImage from "../asset/Sign up-bro.svg";
export default function Login() {
  const { createUser, authenticateUser } = useAuth();
  const [Admin, setAdmin] = useState({
    Email: "",
    Password: "",
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setAdmin({
      ...Admin,
      [evt.target.name]: value,
    });
  }
  function handleLogin(e) {
    e.preventDefault();
    console.log(Admin);
    authenticateUser(Admin).then((resp) => {
      console.log(resp);
      if (resp.success) {
        alert("Login");
      } else {
        alert("Login UnSuccessful");
      }
    });
  }
  const [Showform, setShowform] = useState("Login");
  return (
    <div className="Login-SingUp">
      <div className="Top-head">
        <p onClick={() => setShowform("Login")} className="head">
          Login{" "}
        </p>{" "}
      </div>
      {Showform === "Login" && (
        <div className="Login">
          <div className="Login-form">
            <form action="Submit">
              <div className="Uname">
                <label
                  htmlFor="Username or email address *"
                >
                   email address
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="Email"
                  required
                />
                <label htmlFor="Password ">Password</label>
                <input type="password" name="Password" required onChange={handleChange}/>
              </div>
              <div className="Login-submit">
                <input type="checkbox" />
                <label htmlFor=" Remember me"> Remember me</label>
                <button className="forgot-pass">Lost your password?</button>
              </div>
              <button
                onClick={(e) => handleLogin(e)}
                type="submit"
                className="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="Login-img">
            <img src={login} alt="/" />
          </div>
        </div>
      )}
    </div>
  );
}
