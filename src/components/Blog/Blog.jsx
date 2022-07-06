import React, { useState, useEffect } from "react";
import "./Blog.css";
import BlogsPostImage from "../asset/BlogImage.webp";
import parser from "html-react-parser";
import {
  AccessTime,
  ChatBubble,
  Facebook,
  Instagram,
  LinkedIn,
  PersonOutlined,
  Twitter,
} from "@mui/icons-material";
import BlogsCardsData from "../../BlogsCardData";
import leftstar from "../asset/leftstar.png";
import rightstar from "../asset/rightstar.png";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export default function Blog(BlogsCardsData) {
  const [ShowComments, SetShowComments] = useState(false);
  const [Comments, setComments] = useState([]);
  useEffect(() => {
    BlogComments();

    return () => {};
  }, []);

  function BlogComments() {
    getBlogComments().then((resp) => {
      console.log(resp);
      if (resp.success) {
        setComments(resp.data);
      }
    });
  }
  const handleclick = () => {
    SetShowComments(true);
  };
  const [Viewblog, setViewblog] = useState({});
  const [comment, setComment] = useState({
    Email: "",
    Name: "",
    Comments: "",
  });
  function handleComment(evt) {
    const value = evt.target.value;
    setComment({
      ...comment,
      [evt.target.name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(comment);
    postComment(comment).then((resp) => {
      console.log(resp);
      if (resp.success) {
        alert("Sent for Verification");
      } else {
        alert("Comment UnSuccessful");
      }
    });
  }

  const { getBlogById, postComment, getBlogComments } = useAuth();
  const params = useParams();
  const blog_id = params.blog_id;
  console.log(blog_id);
  useEffect(() => {
    getBlogById(blog_id).then((resp) => {
      if (resp.success) {
        console.log(resp.data);
        setViewblog(resp.data[0]);
      }
    });

    return () => {};
  }, []);

  return (
    <div className="Single-Blog-Page-Container">
      <div className="Container-Blog-Page">
        <div className="BlogPost-Image">
          <img src={Viewblog.image_url} alt="" />
        </div>
        <div className="BlogPost-Content">
          <div className="BlogPost-AdminName-PostingTime-Date-col">
            <div className="BlogPost-PostingTime-Date-row">
              <AccessTime /> <p>{Viewblog.Date}</p>
            </div>
            <div className="BlogPost-AdminName-row">
              <PersonOutlined /> <p>{Viewblog.author}</p>
            </div>
            <div className="Blog-Social-Media-Links">
              <p>Follow :</p>
              <a className="Blog-Social-Media-Instagram" href="/">
                {" "}
                <Instagram />{" "}
              </a>
              <a className="Blog-Social-Media-Facebook" href="/">
                {" "}
                <Facebook />{" "}
              </a>
              <a className="Blog-Social-Media-Twitter" href="/">
                {" "}
                <Twitter />{" "}
              </a>
              <a className="Blog-Social-Media-LinkedIn" href="/">
                <LinkedIn />
              </a>
            </div>
          </div>

          <div className="BlogPost-Title">
            <h1>{Viewblog.title}</h1>
            <span></span>
          </div>

          <div className="Description"> {parser(String(Viewblog.content))}</div>
          <div className="BlogPost-Content-Comment">
            <button className="Comment-Btn" onClick={handleclick}>
              <ChatBubble /> Comment
            </button>
          </div>
        </div>

        {ShowComments && (
          <div className="Show-Comments-Container">
            {Comments.map((Comments, index) => {
              return (
                <div className="Comments">
                  <div className="Comment-Col">
                    <p>{Comments.Comments}</p>
                    <p>{Comments.Name}</p>
                  </div>
                </div>
              );
            })}

            <div className="Commenting-Form">
              <div className="Commenting-Form-header">
                {" "}
                <h4>Leave a Reply</h4>
                <span></span>
              </div>

              <div className="Commenting-Form-Row">
                <textarea
                  name="Comments"
                  id="id-01"
                  cols="80"
                  rows="10"
                  placeholder="Your Comment here..."
                  onChange={handleComment}
                ></textarea>
              </div>
              <div className="Commenting-Form-Row">
                <input
                  type="text"
                  name="Name"
                  id="id-02"
                  placeholder="Your Name..."
                  onChange={handleComment}
                />
                <input
                  type="email"
                  name="Email"
                  id="id-03"
                  placeholder="Your Email..."
                  onChange={handleComment}
                />
                <div className="Commenting-Form-PostButton">
                  <button className="Post-Btn" onClick={(e) => handleSubmit(e)}>
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
