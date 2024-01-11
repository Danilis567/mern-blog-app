// Post.js
import React from "react";
import { Link } from "react-router-dom";

export default function Post({ title, date, id }) {
  return (
    <article className=" by py-4 text-white opacity-85 flex flex-row justify-between">
      <Link to={`/blog/${id}`} className="text-base">
        {title}
      </Link>
      <time>{new Date(date).toLocaleDateString()}</time>
    </article>
  );
}
