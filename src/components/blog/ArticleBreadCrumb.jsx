import React from "react";
import { Link } from "react-router-dom";

export default function ArticleBreadCrumb({ article }) {
  return (
    <div className="bread-crumb">
      <h2>
        <Link to={`/posts/${article.id}`}>{article.title}</Link>
      </h2>
      <p>{article.content.substring(0, 80)}.....</p>
      <p>
        <small>
          By {article.author.name} |{" "}
          {new Date(article.date).toLocaleDateString()}
        </small>
      </p>
      <Link to={`/posts/${article.id}`} className="read-more">
        Read More
      </Link>
    </div>
  );
}
