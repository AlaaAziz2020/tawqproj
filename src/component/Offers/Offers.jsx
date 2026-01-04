import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Offers/Offers.css"; // make sure this file contains the responsive CSS

import star from "../../assets/Star 3.png";
import carticon from "../../assets/whitecarts.png";
import item1 from "../../assets/wool.jpg";
import item2 from "../../assets/wintershirt.jpg";
import item3 from "../../assets/classic.png";


const sections = [
  {
    title: "عروض طوق نجاة",
    products: [
      { id: 1, img: item1, name: "بلوزة صوف", desc: "دفء وأناقة", oldPrice: 450, price: 250, rate: 4.9, discount: 20 },
      { id: 2, img: item2, name: "تيشيرت شتوي", desc: "خامة ثقيلة", oldPrice: 400, price: 240, rate: 4.8, discount: 20 },
      { id: 3, img: item3, name: "بنطلون كلاسيك", desc: "ستايل فورمال", oldPrice: 500, price: 299, rate: 4.9, discount: 40 },
      { id: 4, img: item1, name: "جاكيت شتوي", desc: "مقاوم للبرد", oldPrice: 600, price: 399, rate: 4.7, discount: 35 },
    ],
  },

  
];

export default function Offers() {
  const navigate = useNavigate();

  return (
    <div className="offersproducts-wrapper1  ">
      <div className="offers container  ">
        {sections.map((sec, index) => (
          <section key={index} className="">
            <div className="offerscustomer-products-header1  ">
              <h2 className="offerscustomer-products-title ">{sec.title}</h2>
              {/* <span className="customer-view-more">رؤية المزيد</span> */}
            </div>

            {/* الكروت Bootstrap Responsive: change to col-md-3 for 4 columns at md and up */}
            <div className="row g-4 ">
              {sec.products.map((p) => (
                <div key={p.id} 
                className="col-12 col-sm-6 col-md-3 pb-3 pt-4">
                  <ProductCard p={p} navigate={navigate} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------
      Component: Product Card
------------------------------------------------------------- */

function ProductCard({ p, navigate }) {
  return (
    <Link
      to="/offerstawqnajah"
      state={{ product: p }}
      className="offerscustomer-product-card d-block h-100 d-flex flex-column mt-2"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="offerscustomer-discount">{p.discount}%</div>

      <img src={p.img} className="offerscustomer-product-img" alt={p.name} />

      <button className="customer-heart" aria-label="wishlist">
        <i className="fa fa-heart heart-icon" />
      </button>

      {/* card body grows to push button to bottom */}
      <div className="offerscustomer-card-body px-3 mt-2 ">
        <div className="d-flex justify-content-between align-items-start">
          <h3 className="offerscustomer-product-name">{p.name}</h3>
          <div className="customer-rate">
            <img src={star} alt="rate" style={{ width: 16, marginInlineStart: 6 }} /> {p.rate}
          </div>
        </div>

        <p className="offerscustomer-desc">{p.desc}</p>

        <div className="offerscustomer-price">
          <span className="new">{p.price} ر.س</span>
          <span className="old">{p.oldPrice} ر.س</span>
        </div>
      </div>

      <div className="offerscustomer-card-actions px-3 pb-1">
        <button
          className="offerscustomer-add-btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            navigate("/paymentpage");
          }}
        >
          <span className="carts">إضافة للعربة</span>
          <img src={carticon} alt="cart" />
        </button>
      </div>
    </Link>
  );
}