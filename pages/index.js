import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { BlogList } from "../components";

const BlogListPage = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetch(
          `https://wowtalent.live/wp-json/wp/v2/posts`
        );
        const allPosts = await response.json();
        setPosts(allPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllPosts();
  }, []);
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
  try {
    const initialPosts = await response.json();
    return {
      props: {
        posts: initialPosts,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        initialPosts: [],
      },
    };
  }
}
