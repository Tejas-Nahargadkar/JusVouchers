import React,{useState,useEffect} from "react";
import "./Carousal02.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useAuth } from "../../context/AuthContext";
export default function Carousal02() {
    const [ShowImage, setShowImage] = useState([]);
    const { getCarouselimage } = useAuth();
    useEffect(() => {
      getCarouselimage("Carousel02").then((resp) => {
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
  return (
    <div className="Carousal02-Container">
      <div className="Carousal02-Header">
        <h1>Health Plus Card</h1>
        <h2>It’s raining discounts on JusVouchers!</h2>
        <span></span>
      </div>
      <div className="Carousal02">
        <Carousel responsive={responsive}>
        {ShowImage.map((CardData, index) => (
            <Carousal02Card key={index} {...CardData} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
function Carousal02Card(props) {
    const { url } = props;
    return (
        <div className="Carousal02-Slides"><img src={url} alt="" /></div>
    );
  }