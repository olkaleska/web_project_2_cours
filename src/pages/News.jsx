import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";
import axios from "axios";
import "../index.css";

export default function Main() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/articles")
      .then((res) => setArticles(res.data))
      .catch((err) => console.error("Помилка при завантаженні:", err));
  }, []);

  const thematics = articles.filter((a) => a.category === "тематика");
  const news = articles.filter((a) => a.category === "новина");
  const interviews = articles.filter((a) => a.category === "інтерв’ю");

  // Розділимо тематики на 2 колонки:
  const half = Math.ceil(thematics.length / 2);
  const thematics1 = thematics.slice(0, half);
  const thematics2 = thematics.slice(half);

  return (
    <>
      <Header />
      <main>
        <div className="container grid-4-columns">
          <Column title="Тематики" items={thematics1} />
          <Column title="Тематики" items={thematics2} />
          <Column title="Новини" items={news} />
          <Column title="Інтерв’ю" items={interviews} />
        </div>
      </main>
      <Footer />
    </>
  );
}

function Column({ title, items }) {
  return (
    <div className="column">
      <h4>{title}</h4>
      {items.map((item) => (
        <NewsCard key={item.id} title={item.title} image={item.image} id={item.id} />
      ))}
    </div>
  );
}
