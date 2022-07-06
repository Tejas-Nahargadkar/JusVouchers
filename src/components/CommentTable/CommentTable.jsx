import { Check, Close } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import "./CommentTable.css";

export default function CommentTable() {
  const { verifyComment, getAllComments,deleteComment } = useAuth();

  const [ShowComment, setShowComment] = useState([]);

  useEffect(() => {
    AllComments()
    return () => {};
  }, []);
  function verifyHandler(id) {
    verifyComment(id).then((resp) => {
      console.log(resp)
      if (resp.success) AllComments();
    });
  }
  function deleteHandler(id) {
    deleteComment(id).then((resp) => {
      console.log(resp)
      if (resp.success) AllComments();
    });
  }
  function AllComments() {
    getAllComments().then((resp) => {
      console.log(resp);
      if (resp.success) {
        setShowComment(resp.data);
      }
    });
  }
  return (
    <div className="CommentTable-Container">
      <h2>Manage Comments</h2>
      <div className="Comments-Table">
        <div className="Comments-Table-orange">
          <h4>Serial No.</h4>
        </div>
        <div className="Comments-Table-orange">
          <h4>Name</h4>
        </div>
        <div className="Comments-Table-orange">
          <h4>Comment</h4>
        </div>

        <div className="Comments-Table-orange">
          <h4>Verified</h4>
        </div>
        <div className="Comments-Table-orange">
          <h4>Action</h4>
        </div>
        {ShowComment.map((comment, index) => {
          return (
            <>
              <p>{comment.comment_id}</p>

              <p>{comment.Name}</p>

              <p>{comment.Comments}</p>

              <p>{comment.verified}</p>
              <div className="Comments-Table-white-button-row">
                <button
                  className="Check-btn"
                  onClick={() => verifyHandler(comment.comment_id)}
                >
                  <Check />
                </button>
                <button className="Cross-btn" onClick={() => deleteHandler(comment.comment_id)}>
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
