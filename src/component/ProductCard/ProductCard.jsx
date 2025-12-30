import React from "react";
import "./ProductCard.css";
import img from "../../assets/winter-shirt.jpg";

export default function ProductCard() {
  return (
    <div className="product-card">
      <div className="discount-tag">20%</div>
      <img src={img} alt="" className="product-img" />

      <div className="product-info">
        <h5 className="product-title">تيشيرت شتوي</h5>

        <div className="product-rating">
          <i className="fa-solid fa-star"></i> 4.9
        </div>

        <p className="product-desc">
          تيشيرت عملي وعصري قماشة جيدة من الصوف
        </p>

        <p className="price">250 ر.س</p>
      </div>
    </div>
  );
}
