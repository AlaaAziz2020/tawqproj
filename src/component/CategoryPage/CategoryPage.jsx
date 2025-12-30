import React, { useState } from "react";
import "../CategoryPage/CategoryPage.css";

import item1 from "../../assets/wool.jpg";
import item2 from "../../assets/wintershirt.jpg";
import item3 from "../../assets/classic.png";

import star from "../../assets/Star 3.png";
import carticon from "../../assets/carticon.png";

export default function CategoryPage() {
  const [price, setPrice] = useState(10);

  const products = [
    {
      id: 1,
      img: item1,
      name: "بلوزة صوف",
      rate: 4.9,
      desc: "بلوزة من الصوف لونها اسود تعطي  جمال وأناقة",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 2,
      img: item2,
      name: "تيشيرت شتوي",
      rate: 4.9,
      desc: "تيشيرت عملي وعصري خامته جيدة من الصوف",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 3,
      img: item3,
      name: "بنطلون كلاسيك",
      rate: 4.9,
      desc: "بنطلون كلاسيك بيج يكسر من الامام يعطي مظهر فورمال",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
      {
      id: 1,
      img: item1,
      name: "بلوزة صوف",
      rate: 4.9,
      desc: "بلوزة من الصوف لونها اسود تعطي  جمال وأناقة",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 2,
      img: item2,
      name: "تيشيرت شتوي",
      rate: 4.9,
      desc: "تيشيرت عملي وعصري خامته جيدة من الصوف",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 3,
      img: item3,
      name: "بنطلون كلاسيك",
      rate: 4.9,
      desc: "بنطلون كلاسيك بيج يكسر من الامام يعطي مظهر فورمال",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
      {
      id: 1,
      img: item1,
      name: "بلوزة صوف",
      rate: 4.9,
      desc: "بلوزة من الصوف لونها اسود تعطي  جمال وأناقة",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 2,
      img: item2,
      name: "تيشيرت شتوي",
      rate: 4.9,
      desc: "تيشيرت عملي وعصري خامته جيدة من الصوف",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 3,
      img: item3,
      name: "بنطلون كلاسيك",
      rate: 4.9,
      desc: "بنطلون كلاسيك بيج يكسر من الامام يعطي مظهر فورمال",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    
    
  ];

  return (
    <div className="category-page">
      <div className="container">
        <div className="row">

          {/* فلتر الجانب */}
          <div className="col-md-3 filter-column">
            <div className="box">

              <div className="cat mt-5">
                <h3>اختيار التصنيف</h3>
              </div>

              <div className="catsec d-flex flex-column">
                <h4 className="heading-filter">الفئة</h4>

                <label><input type="checkbox" /> <span>حريمي</span></label>
                <label><input type="checkbox" /> <span>رجالي</span></label>
                <label><input type="checkbox" /> <span>اطفال</span></label>
                <label><input type="checkbox" /> <span>أحذية</span></label>
              </div>

              <div className="filter-section">
                <h4 className="filter-title-small">السعر</h4>

                <p className="price-range-text">
                  ر.س 2 - ر.س {price}
                </p>

                <input
                  type="range"
                  min="2"
                  max="100"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="price-slider"
                />
              </div>

            </div>
          </div>

          {/* محتوى الكروت */}
          <div className="col-md-9 mt-5">

            <h1 className="breadcrumb">
              <span className="heading-title">عروض طوق نجاة / </span>
              <span className="main-title">الرئيسية</span>
            </h1>

            <p className="results">النتيجة 1 - 12 من 214526</p>

            {/* التاجز المختارة */}
            <div className="active-tags d-flex justify-content-start gap-6">
              <span className="cat-title pt-2">التصنيف</span>

              <span className="tag">السعر : 2 ر.س - 10 ر.س ×</span>
              <span className="tag">الفئة : حريمي ×</span>

              <button className="clear-btn bg-transparent border-0">
                <a href="#">مسح الكل</a>
              </button>
            </div>

            {/* الكروت */}
            <div className="customer-products-grid">
              {products.map((p) => (
                <div className="customer-product-card" key={p.id}>
                  
                  <div className="customer-discount">{p.discount}%</div>

                  <img src={p.img} className="customer-product-img" alt="product" />

                  <div className="heart">
                    <i className="fa fa-heart heart-icon position-absolute" />
                  </div>

                  <div className="d-flex justify-content-around gap-5">
                    <h3 className="customer-product-name">{p.name}</h3>
                    <div className="customer-rate">
                      <img src={star} alt="" /> {p.rate}
                    </div>
                  </div>

                  <p
                    className="customer-desc"
                    dangerouslySetInnerHTML={{ __html: p.desc }}
                  ></p>

                  <div className="customer-price">
                    <span className="new">{p.price} ر.س</span>
                    <span className="old">{p.oldPrice} ر.س</span>
                  </div>

                  <button className="customer-add-btn">
                    <span className="carts">إضافة للعربة</span>
                    <img src={carticon} alt="cart" />
                  </button>

                </div>
              ))}
            </div>

       {/* زرار عرض المزيد */}
{/* <div className="load-more-wrapper">
  <button className="load-more-btn">عرض المزيد</button>
</div> */}

{/* الباجينايشن */}
{/* <div className="pagination-wrapper">

  <button className="pagination-arrow">{'<'}</button>

  <div className="page-number">10</div>
  <div className="page-number">...</div>
  <div className="page-number">3</div>
  <div className="page-number">2</div>

  <div className="page-number active">1</div>

  <button className="pagination-arrow">{'>'}</button>

</div> */}


          </div>
        </div>
      </div>
    </div>
  );
}
