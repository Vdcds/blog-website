"use client";
import React, { useEffect, useState } from "react";
import { fetchBlogs } from "@/helpers/fetchData";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
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
  }, [params.blogId,router]);

  if (!blog) {
    return <Loading></Loading>
  }

  return <div>Post : {blog.title}</div>;
};

export default Post;
