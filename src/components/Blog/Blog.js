import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="p-10">
      <div className="title mb-10 ">
        <h2 className="text-3xl mt-5 mb-2">All Blogs</h2>
        <hr className="mx-auto rounded-2xl" />
      </div>
      <div>
        <div>
          <h2 className="text-3xl">(1) How Does React Work ?</h2>

          <p className="blog-desc mt-3 mx-10 text-lg font-semibold text-gray-800 text-justify">
            ReactJS divides the UI into isolated reusable pieces of code known
            as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props. It's possible to have as many components as necessary without
            cluttering your code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
