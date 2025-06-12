import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/NewsCard.css";

export default function NewsCard({ title, image, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${id}`);
  };

  return (
    <div className="box split tall" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="top" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}></div>
      <div className="bottom">{title}</div>
    </div>
  );
}
