import Link from "next/link";
import React from "react";
import styles from "../styles/BlogList.module.css";
import he from "he";
const BlogList = ({ posts }) => {
  return (
    <div className={styles.blog_container}>
      {posts?.map((post) => (
        <div className={styles.gradient_card} key={post?.id}>
          <h2>{he.decode(post?.title?.rendered)}</h2>
          <p>Author: {post?.author}</p>
          <p>Date: {post?.date}</p>
          <Link href={`/blog/${post?.id}`}>Read Full Post...</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
