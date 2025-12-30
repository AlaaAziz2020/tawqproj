import React from "react";
import "./AllOffers.css";
import item1 from "../../assets/wool.jpg";
import item2 from "../../assets/wintershirt.jpg";
import item3 from "../../assets/classic.png";
import carticon from "../../assets/whitecarts.png";
import star from "../../assets/Star 3.png";
import { useNavigate, Link } from "react-router-dom";

export default function AllOffers() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "الملابس",
      products: [
        { id: 1, img: item1, name: "بلوزة صوف", desc: "دفء وأناقة", oldPrice: 450, price: 250, rate: 4.9, discount: 20 },
        { id: 2, img: item2, name: "تيشيرت شتوي", desc: "خامة ثقيلة", oldPrice: 400, price: 240, rate: 4.8, discount: 20 },
      ],
    },
    {
      title: "الإلكترونيات",
      products: [
        { id: 3, img: item3, name: "سماعة بلوتوث", desc: "جودة عالية", oldPrice: 500, price: 299, rate: 4.6, discount: 30 },
      ],
    },
    {
      title: "الألعاب",
      products: [
        { id: 4, img: item1, name: "يد بلايستيشن", desc: "تحكم دقيق", oldPrice: 300, price: 199, rate: 4.8, discount: 25 },
      ],
    },
    {
      title: "السوبر ماركت",
      products: [
        { id: 5, img: item2, name: "منظف أرضيات", desc: "رائحة منعشة", oldPrice: 90, price: 60, rate: 4.5, discount: 20 },
      ],
    },
  ];

  return (
    <div className="alloffers-page container pt-5">
      {sections.map((sec, index) => (
        <div key={index}>
          <h2 className="offers-section-title">{sec.title}</h2>

          <div className="customer-products-grid">
            {sec.products.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="customer-product-card"
              >
                <div className="customer-discount">{p.discount}%</div>

                <img src={p.img} className="customer-product-img" alt={p.name} />

                <div className="d-flex justify-content-around">
                  <h3>{p.name}</h3>
                  <div>
                    <img src={star} /> {p.rate}
                  </div>
                </div>

                <p>{p.desc}</p>

                <div className="customer-price">
                  <span className="new">{p.price} ر.س</span>
                  <span className="old">{p.oldPrice} ر.س</span>
                </div>

                <button
                  className="customer-add-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/paymentpage");
                  }}
                >
                  إضافة للعربة
                  <img src={carticon} />
                </button>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
