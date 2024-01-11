// Post.js
import React from "react";
import { Link } from "react-router-dom";

export default function Post({ title, date, id }) {
  return (
    <article className=" by py-4 text-white opacity-85 flex flex-row justify-between">
      <Link to={`/blog/${id}`} className="text-base">
        {title}
      </Link>
      <time>
        {
          /*Gelen saat verisi 2024-01-04T20:08:39.777+00:00 bu şekilde 😐*/
          new Date(date).toLocaleDateString()
          /*saat formatını ülkemize uygun hale getirir 😒 */
        }
      </time>
    </article>
  );
}
