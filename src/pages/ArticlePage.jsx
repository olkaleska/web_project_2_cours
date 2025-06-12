import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/articles/${id}`)
      .then((res) => setArticle(res.data))
      .catch((err) => console.error("Помилка при завантаженні статті:", err));
  }, [id]);

  if (!article) {
    return <div>Завантаження...</div>;
  }

  return (
    <>
      <Header />
      <div className="article-page" style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ color: "#3e2c13" }}>{article.title}</h2>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: "100%", height: "auto", marginTop: "20px" }}
        />
        <p style={{ marginTop: "20px", fontSize: "18px", color: "#2c1d0d" }}>{article.content}</p>
        <div style={{ marginTop: "10px", fontStyle: "italic", color: "#666" }}>
          {/* Тип: {article.category} */}
        </div>
      </div>
      <Footer />
    </>
  );
}
