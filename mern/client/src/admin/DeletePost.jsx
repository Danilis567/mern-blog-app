// DeletePost.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeletePost = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts data from your API
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:4000/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      // Make a DELETE request to your API endpoint
      await fetch(`http://localhost:4000/posts/${postId}`, {
        method: "DELETE",
      });

      // Redirect to the admin page after successful deletion
      navigate("/miyav/admin");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl mb-6 text-white">Gönderi Sil</h1>
      <p></p>
      <ul className="flex flex-col  mt-4">
        {posts.map((post) => (
          <li key={post._id} className="flex flex-row justify-between py-4">
            {post.title}
            <button
              className="bg-red-500 py-1 px-4 text-lg rounded-sm"
              onClick={() => handleDelete(post._id)}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeletePost;
