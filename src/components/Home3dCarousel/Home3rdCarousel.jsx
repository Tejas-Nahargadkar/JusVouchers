import React, { useEffect, useState } from "react";
import { Carousel } from "3d-react-carousal";
import "./Home3rdCarousel.css";
import h1 from "../asset/health-plus-card-39.png";
import h2 from "../asset/health-plus-card-38.png";
import h3 from "../asset/health-plus-card-40.png";
import h4 from "../asset/health-plus-card-41.png";
import h5 from "../asset/health-plus-card-42.png.webp";
import h6 from "../asset/health-plus-card-43.png.webp";
import { useAuth } from "../../context/AuthContext";
export default function Home3rdCarousel() {
  const [ShowImage, setShowImage] = useState([]);
  const { getCarouselimage } = useAuth();
  useEffect(() => {
    getCarouselimage("Carousel03").then((resp) => {
      console.log(resp);
      if (resp.success) setShowImage(resp.data);
    });

    return () => {};
  }, []);
  let slides = ShowImage.map((url, i) => <img src={url.url} alt="" key={i} />);
  const callback = function (index) {};
  return (
    <div className="Home3rdCarousel">
      <div className="Carousal3d-Header">
        <h1>Other Cards</h1>
        <h2>Best Discounts are here!</h2>
        <span></span>
      </div>
      <div className="Carousal-Slides">
        {" "}
        <Carousel
          slides={slides}
          autoplay={true}
          interval={1000}
          onSlideChange={callback}
        />
      </div>
    </div>
  );
}
