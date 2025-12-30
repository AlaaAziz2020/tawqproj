import React from "react";
import "./CategoriesSlider.css";

import market from "../../assets/market1.jpg";
import health from "../../assets/health1.jpg";
import kitchen from "../../assets/kitchen1.jpg";
import games from "../../assets/gamesimg.jpg";
import furniture from "../../assets/furn1.jpg";
import clothes from "../../assets/wintershirt.jpg";
import electronics from "../../assets/airpods.jpg";

export default function CategoriesSlider() {
  const categories = [
    { id: 1, name: "السوق", img: market },
    { id: 2, name: "صحة", img: health },
    { id: 3, name: "مطبخ", img: kitchen },
    { id: 4, name: "ألعاب", img: games },
    { id: 5, name: "أثاث", img: furniture },
    { id: 6, name: "ملابس", img: clothes },
    { id: 7, name: "إلكترونيات", img: electronics },
  ];

  return (
    <div className="categories-slider-wrapper container">
      <h2 className="categories-title">الفئات</h2>

      <div className="categories-slider">
        {categories.map((cat) => (
          <div className="category-slide" key={cat.id}>
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
