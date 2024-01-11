import React from "react";
import { Link } from "react-router-dom";

export default function IconBox({ icon, path }) {
  return (
    <div>
      <Link to={path}>
        <span>{icon}</span>
      </Link>
    </div>
  );
}
