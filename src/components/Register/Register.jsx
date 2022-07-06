import React, { useState } from "react";
import "./Register.css";
import { useAuth } from "../../context/AuthContext";
import SignUpImage from "../asset/Sign up-bro.svg";
export default function Register() {
  const { createUser, authenticateUser } = useAuth();
  const [Admin, setAdmin] = useState({
    Name: "",
    Email: "",
    Password: "",
    Address: "",
    Phone_Number: "",
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setAdmin({
      ...Admin,
      [evt.target.name]: value,
    });
  }

  function handleSignUp(e) {
    e.preventDefault();
    console.log(Admin);
    createUser(Admin).then((resp) => {
      console.log(resp);
      if (resp.success) {
        alert("Registration Successful");
      } else {
        alert("Registration UnSuccessful");
      }
    });
  }
  return (
    <div className="Register-Container">
      <div className="SingUp">
        <div className="singup-page">
          {/* <div className="GF-signup">
            <p>
              <FcGoogle /> SignUp using Google
            </p>
            <p>
              {" "}
              <IoLogoFacebook /> SignUp using Facebook
            </p>
            <span></span>
          </div> */}
          <form>
            <div className="Sing-form">
              <label htmlFor="Name">Name</label>
              <input
                autoComplete=""
                type="text"
                onChange={handleChange}
                name="Name"
                required
              />
              <label htmlFor="Email">Email</label>
              <input
                autoComplete=""
                type="email"
                onChange={handleChange}
                name="Email"
                required
              />
              <label htmlFor="Password">Password</label>
              <input
                autoComplete=""
                type="password"
                onChange={handleChange}
                name="Password"
                required
              />
              <label htmlFor="Re-enter-password"> Re-enter Password</label>
              <input
                autoComplete=""
                type="password"
                onChange={handleChange}
                name="Password"
                required
              />
              <label htmlFor="Address">Address</label>
              <textarea
                name="Address"
                onChange={handleChange}
                cols="30"
                rows="04"
              ></textarea>
              <label htmlFor="Phone Number">Phone Number</label>
              <input
                autoComplete=""
                type="text"
                onChange={handleChange}
                name="Phone_Number"
                required
              />
              <div className="Submit-singup">
                <button className="Submit-btn" onClick={(e) => handleSignUp(e)}>
                  Submit
                </button>
                <input type="reset" name="" />
              </div>
            </div>
          </form>
        </div>
        {/* <div className="SignUp-Image">
          <img src={SignUpImage} alt="" />
        </div> */}
      </div>
    </div>
  );
}
