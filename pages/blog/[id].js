import React from "react";
import _ from "lodash";
import BlogItem from "../../components/BlogItem";
import Layout from "../../components/Layout";

const BlogDetails = ({ title, author, date, content }) => {
  return (
    <Layout>
      <BlogItem title={title} author={author} date={date} content={content} />
    </Layout>
  );
};

export default BlogDetails;

export async function getServerSideProps({ params }) {
  const fetchPostBySlug = async (slug) => {
    const response = await fetch(
      `https://wowtalent.live/wp-json/wp/v2/posts/${slug}`
    );
    const postData = await response.json();
    return postData;
  };
  try {
    const postData = await fetchPostBySlug(params.id);
    if (!postData || !postData.title) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        title: postData.title,
        author: postData.author,
        date: postData.date,
        content: postData.content,
      },
    };
  } catch (error) {
    console.error("Error fetching post data:", error);

    return {
      notFound: true,
    };
  }
}
