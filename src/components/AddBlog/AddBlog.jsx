import React, { useState } from "react";
import "./AddBlog.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useAuth } from "../../context/AuthContext";
import ManageBlog from "../ManageBlog/ManageBlog";
export default function AddBlog() {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "Admin",
    blog_description: "",
    image_file: null,
  });
  const { addBlog } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blog)
    addBlog(blog).then((resp) => {
      console.log(resp);
      if (resp.success) {
        alert(resp.message);
      }
    });
  };
  const updateHandler = (e) => {
    setBlog({ ...blog, image_file: e.target.files[0] });
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setBlog({
      ...blog,
      [evt.target.name]: value,
    });
  }
  return (
    <div className="AddBlog-Container">
      <div className="AddBlog-Header">
        <h1>Add Blog</h1>
        <span></span>
      </div>
      <div className="AddBlog-Form">
        <div className="AddBlog-Form-Col">
          <label htmlFor="Title">Title*</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            required
            placeholder="Enter Your Title..."
          />
        </div>
        <div className="AddBlog-Form-Col">
          <label htmlFor="Title">Description*</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            required
            placeholder="Enter Brief Description of blog..."
          />
        </div>
        <div className="AddBlog-Form-Col">
          <h5>Content</h5>
          <CKEditor
            editor={ClassicEditor}
            data={blog.content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setBlog({ ...blog, content: data });
            }}
          />
        </div>
        <div className="AddBlog-Form-UploadImage">
          <label htmlFor="file">Upload Image:</label>
          <input onChange={updateHandler} type="file" />
        </div>
      </div>
      <div className="Post-Reset">
        <button className="Post-btn" onClick={handleSubmit}>
          Post
        </button>
        <input type="reset" name="reset" className="Reset-btn" />
      </div>
      <div className="Manage-Blog">
        <ManageBlog blog={blog} setBlog={setBlog}/>
      </div>
    </div>
  );
}
