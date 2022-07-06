import React, { useEffect, useState } from "react";
import Carousel05 from "../HomeCarousel5/Carousel05";
import "./PackagePage.css";
import packageimage from "../asset/packageimage.png";
import packageimage01 from "../asset/packageimage01.png";
import packageimage02 from "../asset/sa1 (7 files merged)_page-0004.jpg";
import packageimage03 from "../asset/package03.jpg";
import packageimage04 from "../asset/packageimage04.jpg";
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export default function PackagePage() {
  const [ShowImage, setShowImage] = useState([]);
  const { getCarouselimage } = useAuth();
  useEffect(() => {
    getCarouselimage("Exclusive_Packages").then((resp) => {
      console.log(resp);
      if (resp.success) setShowImage(resp.data);
    });

    return () => {};
  }, []);
  return (
    <div className="PackagePage-Container">
      <div className="PackagePage-Header">
        <span></span>
        <h1>Exclusive Packages</h1>
        <span></span>
      </div>
      <div className="Package-Row">
        <div className="Package-Carousel">
          <Carousel05 />
        </div>
        <div className="package-Row-Grid">
          <div className="Grid-Col">
            {ShowImage.map((Package_image, index) => {
              return (
                <ModalImage
                  small={Package_image.url}
                  medium={Package_image.url}
                  alt="Hello World!"
                />
              );
            })}
          </div>
          <div className="Grid-Col">
            <Link to="/digitalmarketing">
              <img src={packageimage02} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
