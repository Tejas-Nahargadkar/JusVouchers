import React, { useEffect, useState } from "react";
import "./Home-Mobile-Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MobileCarouselData from "../../Home-Carousel-Mobile-Data";
import Card from "../asset/Card-1.webp";
import { useAuth } from "../../context/AuthContext";
export default function HomeMobileCarousel() {
  const [ShowImage, setShowImage] = useState([""]);
  const { getCarousel01image } = useAuth();
  useEffect(() => {
    getCarousel01image().then((resp) => {
      if (resp.success) setShowImage(resp.data);
    });

    return () => {};
  }, []);
  return (
    <div className="HomeMobileCarousel-container">
      <div className="Mobile-Carousel">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          interval={2000}
          showArrows={false}
          showStatus={false}
          preventMovementUntilSwipeScrollTolerance={true}
        >
          {ShowImage.map((MobileCardData, index) => (
            <MobileCarouselCard key={index} {...MobileCardData} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
function MobileCarouselCard(props) {
  const { url } = props;
  return (
    <div className="Mobile-Slides">
      <img src={url} alt="" />
    </div>
  );
}
