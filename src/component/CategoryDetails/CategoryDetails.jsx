import React from "react";
import "./CategoryDetails.css";

import electronicsImg from "../../assets/phoneimg.jpg"; 
import installement from "../../assets/installement.png";
import international from "../../assets/international.png";
import Lstore from "../../assets/lorfi-store.jpg";
import star from "../../assets/product-rating.png";
import insta from "../../assets/insta.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";

import { useLocation } from "react-router-dom";

export default function CategoryDetails() {
  const { state } = useLocation();

  const categoryTitle = state?.title || "فئة غير معروفة";

  // تطابق دقيق
  const isElectronics = categoryTitle === "إلكترونيات";

  // إن كانت إلكترونيات → استخدم صورة الهاتف
  // لو غير كده → استخدم الصورة القادمة من Categories.jsx
  const categoryImage = isElectronics ? electronicsImg : state?.img;

  return (
    <div className="cat-page">

      <h1 className="cat-heading">
        تفاصيل الفئة / <span className="cat-gray">ذات صلة</span>
      </h1>

      <div className="cat-main">
        {/* الصورة */}
        <div className="cat-img-box">
          <img src={categoryImage} className="cat-img" alt={categoryTitle} />
        </div>

        {/* النص */}
        <div className="cat-info">
          <h2 className="cat-title">{categoryTitle}</h2>

          <div className="cat-rate-row">
            <img src={star} alt="rating" />
            <span>4.9</span>
          </div>

          <p className="cat-desc">
            فئة {categoryTitle} تشمل مجموعة واسعة من المنتجات التي يبحث عنها
            المستخدمون دائماً. نوفر منتجات ذات جودة عالية وخيارات متعددة تناسب
            جميع الاحتياجات.
          </p>
        </div>
      </div>

      {/* أزرار */}
      <div className="cat-action">
        <div className="cat-blue">
          <img src={installement} alt="installement" />
          <span>تقسيط</span>
        </div>

        <div className="cat-orange">
          <img src={international} alt="international" />
          <span>شحن دولي وداخلي</span>
        </div>
      </div>

      {/* صندوق المتجر */}
      <div className="cat-box">
        <div className="cat-seller">
          <div className="cat-seller-info">
            <img src={Lstore} className="cat-seller-img" alt="store" />
            <div>
              <h4 className="cat-seller-name">متجر طوق نجاة</h4>
              <p className="cat-seller-loc">المملكة العربية السعودية</p>
            </div>
          </div>

          <div className="cat-social">
            <img src={facebook} alt="facebook" />
            <img src={whatsapp} alt="whatsapp" />
            <img src={insta} alt="instagram" />
          </div>
        </div>

        <hr className="cat-divider" />

        <h3 className="cat-rate-title">تقييمك للفئة</h3>

        <div className="cat-stars">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
      </div>

    </div>
  );
}
