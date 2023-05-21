import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      
      <div className="card-body text-justify">
        <h2 className="card-title">{blog.question}</h2>
        <p>{blog.answer}</p>
      </div>
    </div>
  );
};

export default Blog;
