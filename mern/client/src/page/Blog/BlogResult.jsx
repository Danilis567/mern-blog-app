// BlogResult.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import Loader from "../../component/Loader";

export default function BlogResult() {
  const { id } = useParams();
  const uri = `http://localhost:4000/posts/${id}`;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(uri);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setPost(null);
      }
    };

    fetchData();
  }, [id, uri]);

  if (!post) {
    return (
      <div className="flex items-center justify-center my-64">
        <Loader />
      </div>
    );
  }
  return (
    <div className="my-24 m-auto flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl text-white text-start  font-medium">
          {post.title}
        </h1>
        <div className="flex flex-col mt-4 gap-2">
          <time className="flex flex-row items-center gap-2">
            <CiCalendarDate size={24} />
            {new Date(post.date).toLocaleDateString()}
          </time>
          <p className="flex flex-row items-center gap-2">
            <FaRegEye size={24} /> {post.views - 1}
          </p>
        </div>
      </div>

      <div className="m-auto my-6">
        {/* gelen html etiketlerini sayfaya reacte uygun hale getirir 😳 */}
        <div
          className="view text-start ql-editor "
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </div>
  );
}
