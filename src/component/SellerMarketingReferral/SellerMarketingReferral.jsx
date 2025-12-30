import React from 'react'
import './SellerMarketingReferral.css'
import giftImg from '../../assets/gift.png'
import phoneIcon from '../../assets/phoneicon.png'
import profilepicture from "../../assets/profileicon.png";
import accountimg from "../../assets/account-img.png";
import marketingimg from "../../assets/m-img.png";
import survimg from "../../assets/surv-img.png";
import logoutimg from "../../assets/logout-img.png";
export default function SellerMarketingReferral() {
  return (
    <div className="marketing-wrapper container">

      {/* Sidebar */}
   <div className="marketing-sidebar mt-5">

        <button className="side-btn">
         <img src={profilepicture} /> حسابي الشخصي 
        </button>

        <button className="side-btn">
         <img src={accountimg}/> الحساب البنكي 
        </button>

        <button className="side-btn active">
        <img src={marketingimg}/>  التسويق 
        </button>

        <button className="side-btn">
        <img src={survimg}/>  التقييم والعقود 
        </button>

        <button className="side-btn logout">
         <img src={logoutimg}/> تسجيل الخروج 
        </button>

      </div>

      {/* Content */}
      <div className="marketing-contentt">

        <div className="marketing-illustration">
          <img src={giftImg} alt="marketing" />
        </div>

        <h2 className="marketing-title">شارك كود الإحالة الخاص بك مع اصدقائك!</h2>

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

        {/* Users Count Box */}
        <div className="info-box">
      
          <span className="info-value">10</span>
              <span className="info-text">
            عدد المستخدمين الذين استخدموا كودك
          </span>
        </div>

        {/* Balance Box */}
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
