import { ArrowDropDownCircle, ExpandLess } from "@mui/icons-material";
import React, { useState,useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import "./DropDown.css";
export default function DropDown({Carousel,setCarousel}) {
  const [ShowDropDown, setShowDropDown] = useState(false);

  const handleClick = () => {
    setShowDropDown(true);
  };
  const { getAllCategory } = useAuth();
  const [ShowCategory, setShowCategory] = useState([]);

  useEffect(() => {
    getAllCategory().then((resp) => {
      console.log(resp);

      if (resp.success) setShowCategory(resp.data);
    });
    return () => {};
  }, []);
  return (
    <div className="DropDown-Container">
      <div className="trigger">
        <button className="Trigger-dropdown" onClick={handleClick}>
          Choose Category <ArrowDropDownCircle />
        </button>
      </div>
      {ShowDropDown && (
        <div className="Dropdown-section">
          <button className="Close-btn" onClick={() => setShowDropDown(false)}>
            <ExpandLess />
          </button>
          {ShowCategory.map((Category,index) =>{return( <button className={`Drop-down-btn ${Carousel.category === Category.Category_title && "Active-Category-Option"}`} onClick={() => setCarousel({...Carousel,category:Category.Category_title})}>{Category.Category_title}</button>);} )}
         
        </div>
      )}
    </div>
  );
}
