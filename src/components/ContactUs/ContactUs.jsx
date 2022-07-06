import React, { useState } from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { GoMailRead } from "react-icons/go";
import "./ContactUs.css";
import { LocationOn } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";
export default function ContactUs() {
  const { ContactUs } = useAuth();
  const [contactUs, setcontactUs] = useState({
    first_Name: "",
    last_Name: "",
    Email: "",
    Mobile_Number: "",
    Message: "",
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setcontactUs({
      ...contactUs,
      [evt.target.name]: value,
    });
  }

  function handleContactUs(e) {
    e.preventDefault();
    console.log(contactUs);
    ContactUs(contactUs).then((resp) => {
      console.log(resp);
      if (resp.success) {
        alert("Query Sent Successful");
      } else {
        alert("Query Sending UnSuccessful");
      }
    });
  }
  return (
    <div className="ContactUs">
      <div className="ContactUs-Header">
        <span></span>
        <h1>Contact Us</h1>
        <span></span>
      </div>
      <div className="contactus">
        <div className="Address">
          <div className="office-address">
            <h2>OFFICE ADDRESS:</h2>
            <p>
              <LocationOn />
              2nd Floor Sheela Arcade, Near IDFC Bank, MP Nagar, Zone-1, Bhopal
              (M.P)
            </p>
            <hr />
          </div>
          <div className="Contact-Details">
            <h2>CONTACT DETAILS:</h2>
            <a href="tel:1800-889-1312">
              <GiRotaryPhone /> 1800-889-1312{" "}
            </a>
            <a href="tel:+91-6267 757 223">
              <MdOutlinePhoneAndroid /> +91-6267 757 223
            </a>
            <a href="mailto:info@jusvouchers.com">
              <GoMailRead /> info@jusvouchers.com
            </a>
            <hr />
          </div>
          <div className="G-map">
            <iframe
              title="loction"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29329.31093754284!2d77.41735653955077!3d23.237123300000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4265d61f094b%3A0x208057dfde3dbae8!2sIDFC%20First%20Bank%20Loan%20Centre!5e0!3m2!1sen!2sus!4v1652334862926!5m2!1sen!2sus"
              width="550"
              height="200"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="form">
          <h2>CONTACT US FOR ANY QUESTIONS!</h2>
          <form action="submit">
            <div className="name">
              <div className="Name">
                <label htmlFor="First">First Name</label>
                <input
                  type="text"
                  name="first_Name"
                  id=""
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="Name">
                <label htmlFor="Last">Last Name</label>
                <input
                  type="text"
                  name="last_Name"
                  id=""
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="message">
              <label htmlFor="Email ">Email </label>
              <input
                type="email"
                name="Email"
                id=""
                onChange={handleChange}
                required
              />
              <label htmlFor="Mobile Number">Mobile Number </label>
              <input
                type="text"
                name="Mobile_Number"
                id=""
                onChange={handleChange}
                required
              />
              <label htmlFor="Comment or Message *">Comment or Message</label>
              <textarea
                onChange={handleChange}
                name="Message"
                id=""
                cols="30"
                rows="08"
              ></textarea>
              <button className="Sub-Btn" onClick={(e) => handleContactUs(e)}>
                {" "}
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
