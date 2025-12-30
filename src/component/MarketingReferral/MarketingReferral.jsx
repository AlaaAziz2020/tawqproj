import React from 'react'
import './MarketingReferral.css'

import giftImg from '../../assets/gift.png'
import phoneIcon from '../../assets/phoneicon.png'

import profilepicture from "../../assets/profileicon.png";
import marketingimg from "../../assets/m-img.png";
import myadvertisements from "../../assets/myadvertisements.png";
import addadvertisements from "../../assets/addadvertisements.png";
import logoutimg from "../../assets/logout-img.png";

import { Link } from "react-router-dom";

export default function MarketingReferral() {
  return (
    <div className="mmarketing-wrapper  container">

      {/* ==== SIDEBAR (نفس شكل البروفايل) ==== */}
      <div className="mmarketing-sidebar acc-profile mt-5">

        <Link to="/profileaccount" className="side-btn white">
          <img className="px-3" src={profilepicture} alt="" />
          حسابي الشخصي
        </Link>

        <Link to="/marketing" className="side-btn active text-white">
          <img className="px-3" src={marketingimg} alt="" />
          التسويق
        </Link>

        <Link to="/advertisementdetails" className="side-btn white">
          <img className="px-3" src={myadvertisements} alt="" />
          إعلاناتي
        </Link>

        <Link to="/addadvertisement" className="side-btn white">
          <img className="px-3" src={addadvertisements} alt="" />
          إضافة إعلان
        </Link>

        <Link to="/logoutconfirm" className="side-btn logout">
          <img className="px-3" src={logoutimg} alt="" />
          تسجيل الخروج
        </Link>

      </div>

      {/* ==== MAIN CONTENT ==== */}
      <div className="marketing-contentt">

        <div className="marketing-illustration">
          <img src={giftImg} alt="marketing" />
        </div>

        <h2 className="marketing-title">
          شارك كود الإحالة الخاص بك مع اصدقائك!
        </h2>

        <p className="marketing-subtitle">
          كل شخص يستخدم كودك لتسجيل الدخول تحصل على مكافآت مالية
        </p>

        {/* Code Box */}
        <div className="info-box">
          <span className="info-icon">
            <img src={phoneIcon} alt="phone" />
          </span>
          <span className="info-text">TQ-14515</span>
        </div>

        {/* Users Count */}
        <div className="info-box">
          <span className="info-value">10</span>
          <span className="info-text">عدد المستخدمين الذين استخدموا كودك</span>
        </div>

        {/* Balance */}
        <div className="info-box">
          <span className="info-value">$50</span>
          <span className="info-text">رصيدك الحالي</span>
        </div>

        {/* Withdraw Button */}
        <button className="withdraw-btn">سحب الأرباح</button>

      </div>

    </div>
  );
}
