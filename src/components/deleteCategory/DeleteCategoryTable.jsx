import { Check, Close } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./deleteCategoryTable.css";
export default function DeleteCategoryTable() {
  const { getAllCategory, deleteCategory } = useAuth();
  const [ShowCategories, setShowCategories] = useState([]);

  useEffect(() => {
    AllImages();
    return () => {};
  }, []);

  function deleteHandler(Id, Category_image_url) {
    deleteCategory(Id, Category_image_url).then((resp) => {
      console.log(resp);
      if (resp.success) {
        AllImages();
        alert("Category Deleted Successfully");
      }
    });
  }
  function AllImages() {
    getAllCategory().then((resp) => {
      console.log(resp);
      if (resp.success) {
        setShowCategories(resp.data);
      }
    });
  }
  return (
    <div className="DeleteCategoryTable-Container">
      <h2>Manage Category</h2>
      <div className="DeleteCategoryTable-Table">
        <div className="DeleteCategoryTable-Table-orange">
          <h4>Serial No.</h4>
        </div>
        <div className="DeleteCategoryTable-Table-orange">
          <h4>Title</h4>
        </div>
        <div className="DeleteCategoryTable-Table-orange">
          <h4>Category_Image_Url</h4>
        </div>
        <div className="DeleteCategoryTable-Table-orange">
          <h4>Action</h4>
        </div>
        {ShowCategories.map((Category, index) => {
          return (
            <>
              <p>{Category.Id}</p>
              <p>{Category.Category_title}</p>
              <p>{Category.Category_image_url}</p>
              <div className="DeleteCategoryTable-Table-white-button-row">
                <button
                  className="Cross-btn"
                  onClick={() =>
                    deleteHandler(Category.Id, Category.Category_image_url)
                  }
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
