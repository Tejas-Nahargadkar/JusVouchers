import React, { useState, useEffect } from "react";
import "./Carousel05.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useAuth } from "../../context/AuthContext";
export default function Carousel05() {
  const [ShowImage, setShowImage] = useState([]);
  const { getCarouselimage } = useAuth();
  useEffect(() => {
    getCarouselimage("Carousel05").then((resp) => {
      if (resp.success) setShowImage(resp.data);
    });

    return () => {};
  }, []);
  return (
    <div className="Carousel05-Container">
      <div className="Carousal-05-header">
        <h1>Best Health Discounts are here!</h1>
      </div>
      <div className="Carousel-05">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          interval={3000}
          showArrows={false}
          showStatus={false}
          preventMovementUntilSwipeScrollTolerance={true}
        >
          {" "}
          {ShowImage.map((CardData, index) => (
            <Carousel05Card key={index} {...CardData} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
function Carousel05Card(props) {
  const { url } = props;
  return (
    <div className="Carousel05-Slides">
      <img src={url} alt="" />
    </div>
  );
}
