import React, { useEffect, useState } from "react";
import "./CategoryWisePage.css";
import healthpluscard from "../asset/health-plus-card-38.png";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export default function CategoryWisePage(Card,Category_title) {
  const [ShowCategory, setShowCategory] = useState([]);
  const { getCarouselCategory } = useAuth();
  const params = useParams();
  const category = params.category;
  console.log(category);
  useEffect(() => {
    getCarouselCategory(category).then((resp) => {
      if (resp.success) {
        console.log(resp.data);
        setShowCategory(resp.data);
      }
    });
    return () => {};
  }, []);

  return (
    <div className="CategoryWisePage-Container">
      <div className="Category-wise-header">
        <h1>{category}</h1>
        <span></span>
      </div>
      <div className="Image-Grid">
        {ShowCategory.map((Category, index) => {
          return (
            <div className="Image-Card">
              <img src={Category.url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
