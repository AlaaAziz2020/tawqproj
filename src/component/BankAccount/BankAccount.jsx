import React from "react";
import "./BankAccount.css";

import profilepicture from "../../assets/profile-img.png";
import accountimg from "../../assets/vector2.png";
import marketingimg2 from "../../assets/m2.png";
import survimg from "../../assets/contrac.png";
import logoutimg from "../../assets/logout-img.png";

export default function BankAccount() {
  return (
    <div className="profile-wrapper banckaccount container">

      {/* ===== Sidebar ===== */}
      {/* <div className="marketing-sidebar mt-5">

        <button className="side-btn">
          <img src={profilepicture} /> حسابي الشخصي
        </button>

        <button className="side-btn active">
          <img src={accountimg} /> الحساب البنكي
        </button>

        <button className="side-btn">
          <img src={marketingimg2} /> التسويق
        </button>

        <button className="side-btn">
          <img src={survimg} /> التقييم والتعاقد
        </button>

        <button className="side-btn logout">
          <img src={logoutimg} /> تسجيل الخروج
        </button>

      </div> */}

      {/* ===== Content ===== */}
      <div className="bank-content  mb-3">
        <h1 className="text-center ">الحساب البنكي</h1>

        {/* اسم البنك */}
        <div className="bank-input">
          <label className="pb-2">اسم البنك</label>
          <input type="text" placeholder="ادخل اسم البنك" />
        </div>

        {/* رقم IBAN */}
        <div className="bank-input">
          <label className="pb-2">رقم (IBAN)</label>
          <input type="text" placeholder="s562374512" />
        </div>

        {/* اسم صاحب الحساب */}
        <div className="bank-input">
          <label className="pb-2">اسم صاحب الحساب</label>
          <input type="text" placeholder="ادخل الاسم الكامل كما هو مسجل في البنك" />
        </div>

        {/* رقم الجوال */}
        <div className="bank-input">
          <label className="pb-2">رقم الجوال المرتبط بالحساب</label>
          <input type="text" placeholder="ادخل رقم الجوال المسجل في البنك" />
        </div>

        {/* رفع صورة */}
                <div className="bank-input">

                    <label className="pb-2">إثبات ملكية الحساب البنكي</label>

        <div className="upload-input-bank">
          
          <div className="upload-text">
            <i className="fa-solid fa-upload upload-icon"></i>
            اضغط هنا لرفع صورة كشف الحساب او البطاقة البنكية
          </div>
        </div>
        </div>

        {/* Button */}
        <button className="submit-btn">إرسال للمراجعة</button>
      </div>
    </div>
  );
}
