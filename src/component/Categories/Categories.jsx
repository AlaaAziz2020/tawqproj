import React from "react";
import "./Categories.css";

import mobile from "../../assets/mobile-img.png";
import clothes from "../../assets/clothes-img.png";
import chair from "../../assets/furnature-img.png";
import games from "../../assets/games-img.png";
import kitchen from "../../assets/kitchen-img.png";
import health from "../../assets/health-img.png";
import market from "../../assets/white-buyer.png";

import Slider from "../Slider/Slider";

export default function Categories() {
  const categories = [
    { name: "إلكترونيات", img: mobile },
    { name: "ملابس", img: clothes },
    { name: "أثاث", img: chair },
    { name: "العاب", img: games },
    { name: "مطبخ", img: kitchen },
    { name: "صحة", img: health },
    { name: "السوق", img: market },
  ];

  return (
    <div className="customer-categories-section mt-5">
      <div className="container">
        <h2 className="customer-categories-title">الفئات</h2>

        {/* Slider Component */}
        <Slider items={categories} />
      </div>
    </div>
  );
}
