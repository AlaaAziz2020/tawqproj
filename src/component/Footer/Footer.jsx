import React from "react";
import "../Footer/Footer.css";
import logo from "../../assets/footer-logo.png";
import Facebook from "../../assets/facebook (2).png";
import WhatsApp from "../../assets/whatsapp (2).png";
import Linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";
import location from '../../assets/location.png';
import mail from '../../assets/mail.png';
import phone from '../../assets/phone.png';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">

        <div className="row footer-content">

          {/* Logo + Description */}
          <div className="col-12 col-md-3 footer-col">
            <img src={logo} className="footer-logo" alt="logo" />
            <p className="footer-desc">
              نساعد التجار على عرض منتجاتهم بفعالية، ونمنح العملاء تجربة تسوق سريعة ومريحة.
            </p>
          </div>

          {/* Company */}
          <div className="col-6 col-md-3 footer-col">
            <h3>الشركة</h3>
            <ul className="company-list">
              <li>من نحن</li>
              <li>الخدمات</li>
              <li>تواصل معنا</li>
              <li>فروع المؤسسة</li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-md-3 footer-col">
            <h3>خدماتنا</h3>
            <ul className="service-list">
              <li>تاجر</li>
              <li>مستخدم</li>
              <li>مسوق</li>
              <li>مساعدتك في الشراء والبيع</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-3 footer-col">
            <h3>التواصل</h3>
            <ul className="comm-list">
              <li><img src={location} className="icon" alt="" /> الرياض / السعودية</li>
              {/* <li className="footer-ph"><img src={phone} className="icon" alt="" /> +966 142 514 514</li> */}
               {/* <li><img src={phone} className="icon" alt="" /> 415415241669+</li> */}
<li className="footer-phone-row">
  <img src={phone} className="icon" alt="" />
  <span className="footer-phone-text">+966 142 514 514</span>
</li>

              <li><img src={mail} className="icon" alt="" /> Toknaga@gmail.com</li>
            </ul>

            <div className="social-icons">
              <img src={Linkedin} alt="LinkedIn" />
              <img src={Instagram} alt="Instagram" />
              <img src={Facebook} alt="Facebook" />
              <img src={WhatsApp} alt="WhatsApp" />
            </div>
          </div>

        </div>
      </div>

      {/* ✅ Footer Bottom */}
      <div className="footer-bottom">
        جميع الحقوق محفوظة © 2025 لشركة  
        <a  className="footercompany-link mx-2 text--white fw-bold"
          href="http://trend-social.com/" 
          target="_blank" 
          rel="noreferrer"
        >
          Trend Social
        </a>
      </div>
    </div>
  );
}
