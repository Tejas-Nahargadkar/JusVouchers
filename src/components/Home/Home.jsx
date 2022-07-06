import React from "react";
import HomeCarousel from "../Home-Carousel/Home-Carousel";
import "./Home.css";
import GymCard01 from "../asset/gym-card01.webp";
import DietCard01 from "../asset/diet-card01.webp";
import PhysioCard01 from "../asset/physio-card01.webp";
import YogaCard01 from "../asset/yoga-card01.webp";
import Testimonial3d from "../Testimonial3d/Testimonial3d";
import CategoryCarousel from "../CategoryCarousel/CategoryCarousel";
import HomeMobileCarousel from "../Home-Mobile-Carousel/HomeMobileCarousel";
import Home3rdCarousel from "../Home3dCarousel/Home3rdCarousel";
import Carousal02 from "../Carousal02/Carousal02";
import Carousel05 from "../HomeCarousel5/Carousel05";
import Carousel04 from "../Carousal03/Carousel04";
import firstleftframe from "../asset/homeleftframe.png";
import firstrightframe from "../asset/homerightframe.png";
import leftstar from "../asset/leftstar.png";
import rightstar from "../asset/rightstar.png";
import HomePageContent from "../HomePageContent/HomePageContent";
import CategoryCards from "../CategoryCards/CategoryCards";
export default function Home() {
  return (
    <div className="Home-Container">
      <div className="Home-Cards-Carousel">
        <div className="firstCarousel-leftframe">
          <img src={firstleftframe} alt="" />
        </div>
        <HomeCarousel />
        <div className="firstCarousel-rightframe">
          <img src={firstrightframe} alt="" />
        </div>
      </div>
      {/* <div className="Home-Mobile-Carousel">
        <HomeMobileCarousel />
      </div> */}
      <div className="CategoryCards-Container">
        <CategoryCards />
      </div>
      <div className="Carousal-02">
        <div className="left-star">
          <img src={leftstar} alt="" />
        </div>
        <Carousal02 />
        <div className="right-star">
          <img src={rightstar} alt="" />
        </div>
      </div>
      <div className="Home-Page-Content">
        <HomePageContent />
      </div>
      <div className="Home3dCarousel">
        <Home3rdCarousel />
      </div>

      <div className="Home-Carousel-04">
        <Carousel04 />
      </div>
      {/* <div className="Home-Carousel-05">
        <div className="left-star">
          <img src={leftstar} alt="" />
        </div>
        <Carousel05 />
        <div className="right-star">
          <img src={rightstar} alt="" />
        </div>
      </div> */}
      <div className="Testimonials-Container">
        <Testimonial3d />
      </div>
    </div>
  );
}
