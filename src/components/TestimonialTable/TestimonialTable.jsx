import { Check, Close } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import "./TestimonialTable.css";

export default function TestimonialTable() {
  const { getAllTestimonial, verifyTestimonial, deleteTestimonial } = useAuth();
  const [ShowTestimonial, setShowTestimonial] = useState([]);

  useEffect(() => {
    AllTestimonial();
    return () => {};
  }, []);
  function verifyHandler(id) {
    verifyTestimonial(id).then((resp) => {
      console.log(resp);
      if (resp.success) AllTestimonial();
    });
  }
  function deleteHandler(id) {
    deleteTestimonial(id).then((resp) => {
      console.log(resp);
      if (resp.success) AllTestimonial();
    });
  }
  function AllTestimonial() {
    getAllTestimonial().then((resp) => {
      console.log(resp);
      if (resp.success) {
        setShowTestimonial(resp.data);
      }
    });
  }
  return (
    <div className="TestimonialTable-Container">
      <h2>Manage Testimonial</h2>
      <div className="Testimonial-Table">
        <div className="Testimonial-Table-orange">
          <h4>Serial No.</h4>
        </div>
        <div className="Testimonial-Table-orange">
          <h4>Name</h4>
        </div>
        <div className="Testimonial-Table-orange">
          <h4>Testimonials</h4>
        </div>
        <div className="Testimonial-Table-orange">
          <h4>Verified</h4>
        </div>
        <div className="Testimonial-Table-orange">
          <h4>Action</h4>
        </div>
        {ShowTestimonial.map((Testimonial, index) => {
          return (
            <>
              {" "}
              <p>{Testimonial.testimonial_id}</p>
              <p>{Testimonial.Name}</p>
              <p>{Testimonial.Message}</p>
              <p>{Testimonial.verified}</p>
              <div className="Testimonial-Table-white-button-row">
                <button
                  className="Testimonial-Table-Check-btn"
                  onClick={() => verifyHandler(Testimonial.testimonial_id)}
                >
                  <Check />
                </button>
                <button
                  className="Testimonial-Table-Cross-btn"
                  onClick={() => deleteHandler(Testimonial.testimonial_id)}
                >
                  <Close />
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
