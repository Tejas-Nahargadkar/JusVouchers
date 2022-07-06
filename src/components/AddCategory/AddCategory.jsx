import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./AddCategory.css";
import DeleteCategoryTable from "../deleteCategory/DeleteCategoryTable";
export default function AddCategory() {
  const [Category, setCategory] = useState({
    Category_title: "",

    image_file: null,
  });
  const { addCategory } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(Category).then((resp) => {
      console.log(resp);
      if (resp.success) {
        alert(resp.message);
      }
    });
  };
  const updateHandler = (e) => {
    setCategory({ ...Category, image_file: e.target.files[0] });
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setCategory({
      ...Category,
      [evt.target.name]: value,
    });
  }
  return (
    <div className="AddCategory-Container">
      <div className="AddCategory-Header">
        <h1>Add Category</h1>
      </div>
      <div className="AddCategory-Input-Col">
        <label htmlFor="title">Category Title</label>
        <input
          type="text"
          onChange={handleChange}
          name="Category_title"
          placeholder="enter title here..."
        />
        <input
          type="file"
          onChange={updateHandler}
          name="Category_image_url"
          id=""
        />
      </div>
      <div className="AddCategory-Submit">
        <button className="AddCategory-Submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="Manage-Category">
        <DeleteCategoryTable />
      </div>
    </div>
  );
}
