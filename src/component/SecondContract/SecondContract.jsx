import React from "react";
import "./SecondContract.css";

import profilepicture from "../../assets/profile-img.png";
import accountimg from "../../assets/account-img.png";
import marketingimg2 from "../../assets/m2.png";
import survimg from "../../assets/contrac.png";
import logoutimg from "../../assets/logout-img.png";
import star from "../../assets/con-star.png";

export default function SecondContract() {
  const ratingData = [
    { label: "5 نجوم", value: "40%" },
    { label: "4 نجوم", value: "30%" },
    { label: "3 نجوم", value: "20%" },
    { label: "2 نجوم", value: "15%" },
    { label: "1 نجمة", value: "5%" }
  ];

  return (
    <div className="profile-wrapper contract container">

      {/* Sidebar */}
      <div className="marketing-sidebar mt-5">
        <button className="side-btn"><img src={profilepicture} /> حسابي الشخصي</button>
        <button className="side-btn"><img src={accountimg} /> الحساب البنكي</button>
        <button className="side-btn"><img src={marketingimg2} /> التسويق</button>
        <button className="side-btn active"><img src={survimg} /> التقييم والتعاقد</button>
        <button className="side-btn logout"><img src={logoutimg} /> تسجيل الخروج</button>
      </div>

      {/* Content */}
      <div className="contract-content">

        {/* Rating Box */}
        <div className="rate-box">
          <div className="rate-header">
            <h1>التقييم العام</h1>
            <span className="rate-number">4.0 <img src={star} /></span>
          </div>

          {ratingData.map((item, index) => (
            <div className="rate-row" key={index}>

              {/* Percentage Right */}
              <div className="rate-percentage">{item.value}</div>

              {/* Progress Bar */}
              <div className="rate-progress">
                <span style={{ width: item.value }}></span>
              </div>

              {/* Label + Star Left */}
              <div className="rate-label">
                <img src={star} /> {item.label}
              </div>

            </div>
          ))}
        </div>

        {/* Contract */}
        <h2 className="contract-title">التعاقد</h2>

        {/* Contract Date (inline input) */}
        <div className="date-box input-inline">
          <div className="date-inline-content">
            <span className="date-label-inline">تاريخ التعاقد</span>
            <span className="date-value-inline">11/12/2026</span>
          </div>
        </div>

        <div className="date-box input-inline">
          <div className="date-inline-content">
            <span className="date-label-inline">تاريخ الانتهاء</span>
            <span className="date-value-inline">11/12/2026</span>
          </div>
        </div>

        <button className="renew-btn">طلب التجديد</button>

      </div>

    </div>
  );
}
