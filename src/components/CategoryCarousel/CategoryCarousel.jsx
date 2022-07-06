import React, { useState, useEffect } from "react";
import "./CategoryCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../CategoryCarouselAssets/Health-04.png";
import Data from "../../CategoryCarouselData";
import { ArrowDropDown, ExpandLess } from "@mui/icons-material";
let Category = Object.keys(Data);
console.log(Category);
export default function CategoryCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
  // const [ShowTab, setShowTab] = useState(Category);

  // const toggleTab = (Category) => {
  //   setShowTab(Category);
  // };
  const [Selected, setSelected] = useState(Category[0]);
  const [cardlist, setCardlist] = useState(Data[Selected]);
  useEffect(() => {
    setCardlist(Data[Selected]);

    return () => {};
  }, [Selected]);
  const [ShowCategory, setShowCategory] = useState(false);

  return (
    <div className="CategoryCarousel-Container">
      <div className="CategoryCarousel-Tabs">
        <div className="CategoryCarousel-Tab">
          {Category.map((CategoryData, index) => (
            <button
              onClick={() => setSelected(CategoryData)}
              className={Selected === CategoryData ? "Active" : "Tab"}
            >
              {CategoryData}
            </button>
          ))}
        </div>
        <div className="Category-DropDown">
          <button
            className="Drop-Down-button"
            onClick={() => setShowCategory(true)}
          >
            Categories
            <ArrowDropDown />
          </button>
        </div>
        {ShowCategory && (
          <div className="CategoryCarousel-Tab-Mobile-View">
            <div className="Category-DropDown-Close">
              <button
                className="Category-DropDown-CloseButton"
                onClick={() => setShowCategory(false)}
              >
                {" "}
                <ExpandLess />{" "}
              </button>
            </div>
            {Category.map((CategoryData, index) => (
              <button
                onClick={() => setSelected(CategoryData)}
                className={Selected === CategoryData ? "Active" : "Tab"}
              >
                {CategoryData}
              </button>
            ))}

            <button className="Empty"></button>
          </div>
        )}
        <div className="Carousel-Tab">
          <Carousel responsive={responsive}>
            {cardlist.map((image, index) => (
              <div className="Tab-Slides">
                <img src={image.image} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
