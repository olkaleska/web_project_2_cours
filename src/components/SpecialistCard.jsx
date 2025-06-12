import React from 'react';
import './styles/SpecialistCard.css';

export default function SpecialistCard({ name, title, email, image }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={`Фото: ${name}`} className="card-image" />
        </div>
        <div className="flip-card-back">
          <p>{name}</p>
          <p>{title}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
