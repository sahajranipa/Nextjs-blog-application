import React from "react";
import Link from "next/link";
import style from "../styles/BlogItem.module.css";
import he from "he";

const BlogItem = ({ title, author, date, content }) => {
  return (
    <div className={style.blog_item_container}>
      <p>
        <Link href={"/"}>Go Back</Link>
      </p>
      <div className={style.blogcard}>
        <h1>{he.decode(title.rendered)}</h1>
        <p>Author: {author}</p>
        <p>Date: {date}</p>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </div>
    </div>
  );
};

export default BlogItem;
