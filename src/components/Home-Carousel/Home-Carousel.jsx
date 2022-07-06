import React, { useEffect, useState } from "react";
import "./Home-Carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useAuth } from "../../context/AuthContext";
export default function HomeCarousel() {
  const [ShowImage, setShowImage] = useState([]);
  const { getCarouselimage } = useAuth();
  useEffect(() => {
    getCarouselimage("Carousel01").then((resp) => {
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
      items: 1,
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
    <div className="Home-Carousel">
      {/* <div className="Home-Carousel-Banner">
        <img src={Banner} alt="img" />
      </div> */}
      <div className="H-Carousel">
        <Carousel responsive={responsive}>
          {ShowImage.map((CardData, index) => (
            <HomeCarouselCard key={index} {...CardData} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
function HomeCarouselCard(props) {
  const { url } = props;
  return (
    <div className="Slides">
      <img src={url} alt="" />
    </div>
  );
}
