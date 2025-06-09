import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/article.css";

export default function ArticleList({ articles }) {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div key={article.id} className="article-item">
          <h2 className="article-title">{article.title}</h2>
          <p className="article-summary">{article.excerpt}</p>
          <p className="article-meta">
            By {article.author.name} |{" "}
            {new Date(article.date).toLocaleDateString()}
          </p>
          <Link className="read-more" to={`/article/${article.id}`}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}
