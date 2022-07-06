import React, { useEffect, useState } from "react";
import "./CategoryCards.css";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
export default function CategoryCards() {
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
    <div className="Category">
      {ShowCategory.map((Card, index) => {
        return (
          <Link to={`/categorypage/${Card.Category_title}`}>
            <div className="CategoryCard">
              <div className="CategoryCard-image">
                <img src={Card.Category_image_url} alt="" />
              </div>
              <div className="Category-title">
                <h3>{Card.Category_title}</h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
