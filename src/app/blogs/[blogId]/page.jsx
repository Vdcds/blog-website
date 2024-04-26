"use client";
import React, { useEffect, useState } from "react";
import { fetchBlogs } from "@/helpers/fetchData";
import { useRouter } from "next/navigation";
const Post = ({ params }) => {
  const router = useRouter();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await fetchBlogs(params.blogId);
        setBlog(data.Blog);
      } catch (error) {
        console.error(error);
        router.push("/blogs")
      }
    };

    fetchBlogData();
  }, [params.blogId]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return <div>Post : {blog.title}</div>;
};

export default Post;
