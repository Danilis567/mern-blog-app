// Blog.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Blog/Post";
import Loader from "../../component/Loader";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);
  const uri = "http://localhost:4000/posts";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(uri);
        const sortedPosts = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPosts(sortedPosts);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [uri, posts]);

  return (
    <div className="my-24 m-auto">
      <h1 className="text-6xl text-white text-center my-12 font-medium">
        Bloglarım
      </h1>
      <div className="mt-32 max-w-2xl m-auto mb-24">
        <h3 className="text-white text-2xl mb-8 font-semibold">
         Bloglarım
        </h3>

        {loader ? (
          <div className="flex items-center justify-center my-16">
            <Loader />
          </div>
        ) : (
          posts.map((item, index) => (
            <Post
              key={index}
              title={item.title}
              date={item.date}
              id={item._id}
            />
          ))
        )}
      </div>
    </div>
  );
}
