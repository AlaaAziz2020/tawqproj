import React from "react";
import "./ProductsElectronics.css";

export default function ProductsElectronics() {

  const products = [
    {
      id: 1,
      img: require("../../assets/electro1.jpg"),
      name: "سماعات بلوتوث",
      desc: "جودة صوت عالية وبطارية تدوم طويلاً",
      price: 250,
      oldPrice: 450,
      rate: 4.9,
      discount: "20%"
    },
    {
      id: 2,
      img: require("../../assets/electro2.jpg"),
      name: "لاب توب حديث",
      desc: "أداء قوي مناسب للعمل و الدراسة",
      price: 250,
      oldPrice: 450,
      rate: 4.9,
      discount: "20%"
    },
    {
      id: 3,
      img: require("../../assets/electro3.jpg"),
      name: "ساعة ذكية",
      desc: "ساعة ذكية متعددة المهام مع بطارية قوية",
      price: 250,
      oldPrice: 450,
      rate: 4.9,
      discount: "20%"
    },
    {
      id: 4,
      img: require("../../assets/electro4.jpg"),
      name: "كيبورد ميكانيكي",
      desc: "إضاءة RGB وأداء ممتاز للألعاب",
      price: 250,
      oldPrice: 450,
      rate: 4.9,
      discount: "20%"
    },
  ];

  return (
    <div className="products-section container mt-5">
      <div className="head-row">
        <h2 className="section-title">عروض إلكترونيات</h2>
        <a className="view-more">رؤية المزيد</a>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>

            <div className="discount-badge">{item.discount}</div>
            <img src={item.img} alt="" className="product-img" />

            <div className="product-info">
              <div className="rate-row">
                <span className="rate">{item.rate}</span>
                <span className="star">⭐</span>
              </div>

              <h3 className="product-name">{item.name}</h3>
              <p className="product-desc">{item.desc}</p>

              <div className="price-row">
                <span className="old-price">{item.oldPrice} ر.س</span>
                <span className="new-price">{item.price} ر.س</span>
              </div>

              <button className="add-btn">🛒 إضافة للعربة</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
