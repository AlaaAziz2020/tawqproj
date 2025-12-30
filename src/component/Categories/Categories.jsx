import React from "react";
import "./Categories.css";

import mobile from "../../assets/mobile-img.png";
import clothes from "../../assets/clothes-img.png";
import chair from "../../assets/furnature-img.png";
import games from "../../assets/games-img.png";
import kitchen from "../../assets/kitchen-img.png";
import health from "../../assets/health-img.png";
import market from "../../assets/white-buyer.png";

export default function Categories() {

  const categories = [
    { name: "إلكترونيات", img: mobile },
    { name: "ملابس", img: clothes },
    { name: "أثاث", img: chair },
    { name: "العاب", img: games },
    { name: "مطبخ", img: kitchen },
    { name: "صحة", img: health },
    { name: "السوق", img: market }
  ];

  return (
    <div className="customer-categories-section mt-5">
      <div className="container">

        <h2 className="customer-categories-title">الفئات</h2>

        <div className="customer-categories-grid">

          {categories.map((cat, i) => (
            <div
              key={i}
              className="customer-category-box"
              style={{ cursor: "default" }}   // ما فيش كليك
            >
              {cat.img && (
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="customer-category-icon"
                  style={
                    cat.name === "إلكترونيات"
                      ? { width: "35px", height: "35px" }
                      : cat.name === "السوق"
                      ? { width: "45px", height: "35px", borderRadius: "6px" }
                      : {}
                  }
                />
              )}

              <p className="customer-category-name">{cat.name}</p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
