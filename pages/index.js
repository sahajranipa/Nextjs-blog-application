import React from "react";
import Layout from "../components/Layout";
import { BlogList } from "../components";

const BlogListPage = ({ posts }) => {
  return (
    <>
      <Layout>
        <BlogList posts={posts} />
      </Layout>
    </>
  );
};

export default BlogListPage;

export async function getServerSideProps() {
  const fetchAllPosts = async () => {
    const response = await fetch(`https://wowtalent.live/wp-json/wp/v2/posts`);
    const allPosts = await response.json();
    return allPosts;
  };
  try {
    const allPosts = await fetchAllPosts();
    return {
      props: {
        posts: allPosts,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
