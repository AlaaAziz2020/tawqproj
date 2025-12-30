import React from "react";
import "./ChooseSupport.css";
import logo from "../../assets/logo.png";

export default function ChooseSupport() {
  return (
    <div className="choose-support fade-in">

      {/* العنوان */}
      <h1 className="support-title fade-in">دعم التطبيق</h1>

      {/* اللوجو */}
      <div className="support-logo-box fade-in">
        <img src={logo} className="support-logo" alt="logo" />
      </div>

      {/* النص */}
      <p className="support-text fade-in">
        اختر نوع الدعم الذي ترغب في تقديمه:
      </p>

      {/* الأزرار */}
      <div className="support-btns fade-in">
        <button className="support-btn">دعم مادي</button>
        <button className="support-btn">دعم عيني</button>
      </div>

    </div>
  );
}
