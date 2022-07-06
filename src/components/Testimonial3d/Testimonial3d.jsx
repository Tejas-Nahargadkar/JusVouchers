import React, { useEffect, useState } from "react";
import "./Testimonial3d.css";
import avatar from "../asset/avatar.jpg";
import { useAuth } from "../../context/AuthContext";
import avatar01 from "../asset/avatar01.webp";
export default function Testimonial3d(props) {
  const { postTestimonial, getAllVerifiedTestimonials } = useAuth();
  const [Slides, setSlides] = useState([]);
  useEffect(() => {
    getAllVerifiedTestimonials().then((resp) => {
      console.log(resp);
      if (resp.success) setSlides(resp.data);
    });
    return () => {};
  }, []);

  const [Testimonial, setTestimonial] = useState({
    Message: "",
    Name: "",
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setTestimonial({
      ...Testimonial,
      [evt.target.name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(Testimonial);
    postTestimonial(Testimonial).then((resp) => {
      console.log(resp);
      if (resp.success) {
        alert("Sent For Verification");
      } else {
        alert("Testimonials UnSuccessfull");
      }
    });
  }
  // const Slides = [
  //   {
  //     image: avatar,
  //     name: "Ikang Delos",
  //     message:
  //       "Never did i regret choosing this clinic for my braces adjustment. I know i am in good hands. So looking forward for a more confident smile once everything is done. Cheers!",
  //     location: "Australia",
  //   },
  //   {
  //     image: avatar,
  //     name: "Ony Roy",
  //     message:
  //       "I have chosen this clinic in a whim but it rendered its services way above par. Great doctors and staff. The environment is so neat. Indeed, i am confident that id have the outcome i am longing to have. Cheers! #braces adjustment",
  //     location: "Japan",
  //   },
  //   {
  //     image: avatar,
  //     name: "Levi Ackerman",
  //     message:
  //       "Wonderful treatment by the doctor at clinic. Everything required for treatment is ready at clinic. One stop point for all oral care related ailments. Appointment Recommeneded.",
  //     location: "Joji J",
  //   },
  //   {
  //     image: avatar,
  //     name: "Alex Maullon",
  //     message:
  //       "Excellent overall. The dentists are very nice, the staffs are very accomodating and great experience. Glad i came here.",
  //     location: "Japan",
  //   },
  // ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let auto = setInterval(() => {
      if (index < Slides.length) {
        let i = index;
        if (index < Slides.length - 1) {
          setIndex(i + 1);
        } else {
          setIndex(0);
        }
      } else {
        setIndex(0);
      }
    }, 4000);
    return () => {
      clearInterval(auto);
    };
  }, [index, Slides.length]);

  return (
    <section className="testimonial">
      <div className="text">
        <h2>What our customer saying..</h2>
        <div className="dot-container">
          {Slides.length > 0 &&
            Slides.map((x, dot_index) => (
              <div
                key={dot_index}
                className="dot"
                style={{
                  backgroundColor: index === dot_index ? "#DF6951" : "",
                }}
              ></div>
            ))}
        </div>
        <div className="Submit-Testimonial">
          <textarea
            name="Message"
            id="id-01"
            cols="70"
            rows="10"
            onChange={handleChange}
          >
            Your Message
          </textarea>
          <input
            type="text"
            name="Name"
            placeholder="Name"
            onChange={handleChange}
          />
          <button className="Testimonial-Submit-Btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
     {Slides.length > 0 &&
      <div className="wrapper">
        <div
          className="card active"
          style={{
            animationName:
              index % 2 === 0 ? "slide-fwd-tl-1" : "slide-fwd-tl-2",
          }}
        >
          <img src={avatar01} alt="profile" />
          {console.log(Slides)}
          <p>{Slides[index].Message}</p>
          <span></span>
          <div>
            <h5>{Slides[index].Name}</h5>
          </div>
        </div>
        <div
          className="card inactive"
          style={{
            animationName:
              index % 2 === 0 ? "slide-bck-br-1" : "slide-bck-br-2",
          }}
        >
          <img
            src={
              index < Slides.length - 2
                ? Slides[index + 1].avatar01
                : Slides[0].avatar01
            }
            alt="profile"
          />
          <p>
            {index < Slides.length - 2
              ? Slides[index + 1].Message
              : Slides[0].Message}
          </p>
          <div>
            <h5>
              {index < Slides.length - 2
                ? Slides[index + 1].Name
                : Slides[0].Name}
            </h5>
          </div>
        </div>
      </div>}
    </section>
  );
}
