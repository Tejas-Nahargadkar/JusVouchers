import { Close, Edit } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./ManageBlog.css";
export default function ManageBlog({ blog, setBlog }) {
  const { getAllBlogs, deleteBlog } = useAuth();
  const [ShowBlogs, setShowVlogs] = useState([]);
  useEffect(() => {
    AllBlogs();

    return () => {};
  }, []);
  function AllBlogs() {
    getAllBlogs().then((resp) => {
      console.log(resp);
      if (resp.success) {
        setShowVlogs(resp.data);
      }
    });
  }
  function deleteHandler(id, image_url) {
    deleteBlog(id, image_url).then((resp) => {
      console.log(resp);
      if (resp.success) AllBlogs();
    });
  }
  return (
    <div className="ManageBlog-Table-container">
      <h2>Manage Blogs</h2>
      <div className="ManageBlog-Table">
        <div className="ManageBlog-Table-orange">
          <h4>Serial No.</h4>
        </div>
        <div className="ManageBlog-Table-orange">
          <h4>Blog Name</h4>
        </div>
        <div className="ManageBlog-Table-orange">
          <h4>Description</h4>
        </div>
        <div className="ManageBlog-Table-orange">
          <h4>Action</h4>
        </div>
        {ShowBlogs.map((Blogs, index) => {
          return (
            <>
              {" "}
              <p>{Blogs.blog_id}</p>
              <p>{Blogs.title}</p>
              <p>{Blogs.description}</p>
              <div className="ManageBlog-Table-white-button-row">
                <button
                  className="ManageBlog-Table-Cross-btn"
                  onClick={() => deleteHandler(Blogs.blog_id, Blogs.image_url)}
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
