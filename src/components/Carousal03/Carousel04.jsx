import React, { useState, useEffect } from "react";
import "./Carousel04.css";
import { useAuth } from "../../context/AuthContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Carousel04() {
  const [ShowImage, setShowImage] = useState([]);
  const { getCarouselimage } = useAuth();
  useEffect(() => {
    getCarouselimage( "Carousel04" ).then((resp) => {
      if (resp.success) setShowImage(resp.data);
    });

    return () => {};
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="Carousel04-Container">
      {" "}
      <div className="Carousal04-Header">
        <h1>Doctor Card</h1>
        <h2>Promo Code and Discounts Pan-India!</h2>
        <span></span>
      </div>
      <div className="Carousal04">
        <Carousel responsive={responsive}>
          {ShowImage.map((CardData, index) => (
            <Carousal04Card key={index} {...CardData} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
function Carousal04Card(props) {
  const { url } = props;
  return (
    <div className="Carousal04-Slides">
      <img src={url} alt="" />
    </div>
  );
}
