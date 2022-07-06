import React, { useState, useEffect } from "react";
import "./BlogPage.css";
import BlogsImage from "../asset/Blog-Card-image01.jpg";
import { PlayArrow } from "@mui/icons-material";
import BlogsCardsData from "../../BlogsCardData";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import parser from "html-react-parser";
export default function BlogPage() {
  const [GetBlogs, setGetBlogs] = useState([]);
  const { getAllBlogs } = useAuth();
  useEffect(() => {
    getAllBlogs().then((resp) => {
      console.log(resp);
      if (resp.success) {
        setGetBlogs(resp.data);
      }
    });

    return () => {};
  }, []);

  return (
    <div className="BlogPage-Container">
      <div className="BlogPage-Header">
        <span></span>
        <h1>Our Blogs</h1>
        <span></span>
      </div>

      <div className="Main-Blog-Container">
        <Viewblog {...GetBlogs[RandomInteger(0, GetBlogs.length)]} />
      </div>

      <div className="Display-Blogs-Grid">
        {GetBlogs.map((BlogsCardData, index) => (
          <BlogsDisplayCards key={index} {...BlogsCardData} />
        ))}
      </div>
    </div>
  );
}
function BlogsDisplayCards(props) {
  const { image_url, Date, title, blog_description, blog_id } = props;
  return (
    <div className="Display-Blogs-Card">
      <div className="Display-Blogs-Card-image">
        <Link to={`/viewblog/${blog_id}`}>
          <img src={image_url} alt="" />
        </Link>
      </div>
      <div className="Display-Blogs-Card-Content-Container">
        <div className="Display-Blogs-Card-Content-Date-Row">
          <p>{Date}</p>
        </div>
        <div className="Display-Blogs-Card-Content-Name-Row">
          <h2>{title}</h2>
        </div>
        <div className="Display-Blogs-Card-Content">
          {textLimiter(blog_description, 150)}
        </div>
      </div>
    </div>
  );
}
function RandomInteger(from, to) {
  return Math.floor(Math.random() * to) + from;
}
function Viewblog(props) {
  const { image_url, Date, title, blog_description, blog_id } = props;
  return (
    <div className="Main-Blog-Row">
      <div className="Blog-Image">
        <img src={image_url} alt="" />
      </div>
      <div className="Main-Blog-Content-Container">
        <div className="Date-Row">
          <p>{Date}</p>
        </div>
        <div className="Main-Blog-Name">
          <h1>{title}</h1>
        </div>
        <div className="Main-Blog-Content">{blog_description}</div>
        <div className="Main-Blog-ReadMore">
          <Link to={`/viewblog/${blog_id}`} className="ReadMore-BTN">
            Read More <PlayArrow />
          </Link>
        </div>
      </div>
    </div>
  );
}
const textLimiter = (text, length) => {
  return text.slice(0, length) + "...";
};
