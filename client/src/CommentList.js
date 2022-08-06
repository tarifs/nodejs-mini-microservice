import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (content.status === "approved") {
      content = comment.content;
    }

    if (content.status === "pending") {
      content = "This comment is awaiting moderation";
    }

    if (content.status === "rejected") {
      content = "This comment has been rejected";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
