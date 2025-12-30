import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function AllProductsByCategory() {
  const { category } = useParams();
  const location = useLocation();

  const allSections = location.state?.sections || [];

  const selectedSection = allSections.find(
    (sec) => sec.title === category
  );

  if (!selectedSection) {
    return <h2 style={{ textAlign: "center" }}>لا يوجد منتجات</h2>;
  }

  return (
    <div className="products-wrapper">
      <h2 className="customer-products-title text-center my-4">
        {selectedSection.title}
      </h2>

      <div className="customer-products-grid container">
        {selectedSection.products.map((p) => (
          <div key={p.id} className="customer-product-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <span>{p.price} ر.س</span>
          </div>
        ))}
      </div>
    </div>
  );
}
