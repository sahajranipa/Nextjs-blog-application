import React from "react";
import style from "../styles/BlogItem.module.css";

const BlogItem = ({ title, author, date, content }) => {
  return (
    <div className={style.blog_item_container}>
      <p>
        <a href={`/blog`}>Go Back</a>
      </p>
      <div className={style.blogcard}>
        <h1>{title.rendered}</h1>
        <p>Author: {author}</p>
        <p>Date: {date}</p>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </div>
    </div>
  );
};

export default BlogItem;
