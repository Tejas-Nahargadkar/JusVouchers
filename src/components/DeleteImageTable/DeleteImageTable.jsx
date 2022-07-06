import { Check, Close } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./DeleteImageTable.css";
export default function DeleteImageTable() {
  const { getALLCarouselImage, deleteImageById } = useAuth();
  const [ShowImages, setShowImages] = useState([]);

  useEffect(() => {
    AllImages();
    return () => {};
  }, []);

  function deleteHandler(Id, url) {
    deleteImageById(Id, url).then((resp) => {
      console.log(resp);
      if (resp.success) {AllImages();
        alert("Image Deleted Successfully")
      }
    });
  }
  function AllImages() {
    getALLCarouselImage().then((resp) => {
      console.log(resp);
      if (resp.success) {
        setShowImages(resp.data);
      }
    });
  }
  return (
    <div className="DeleteImageTable-Container">
      <h2>Manage Images</h2>
      <div className="DeleteImage-Table">
        <div className="DeleteImage-Table-orange">
          <h4>Serial No.</h4>
        </div>
        <div className="DeleteImage-Table-orange">
          <h4>Image Url</h4>
        </div>
        <div className="DeleteImage-Table-orange">
          <h4>Carousel Name</h4>
        </div>
        <div className="DeleteImage-Table-orange">
          <h4>Action</h4>
        </div>
        {ShowImages.map((Image, index) => {
          return (
            <>
              <p>{Image.Id}</p>
              <p>{Image.url}</p>
              <p>{Image.carousel_name}</p>
              <div className="DeleteImage-Table-white-button-row">
                <button
                  className="Cross-btn"
                  onClick={() => deleteHandler(Image.Id,Image.url)}
                >
                  <Close />
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
