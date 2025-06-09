// src/pages/Home.jsx

import React, { useEffect, useState } from "react";
import { fetchPosts } from "../utils/api";
import ArticleList from "../components/blog/ArticleList";
import Loader from "../components/Loader";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchPosts();
        setArticles(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="container">
      <h1>Latest Blog Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
}
