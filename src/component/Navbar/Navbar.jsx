import { useState, useEffect, useRef } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate, NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import {
  FaHome,
  FaShoppingCart,
  FaClipboardList,
  FaHeart,
  FaComments,
  FaHandshake,
  FaUsers,
  FaStore,
  FaGift,
  FaHeadset,
  FaBullhorn,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { CiCreditCard1 } from "react-icons/ci";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest(".tn-nav-hamburger")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // prevent body scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const sidebarLinks = [
    { icon: <FaHome />, text: "الرئيسية", path: "/home" },
    { icon: <FaShoppingCart />, text: "التسوق", path: "/shopping" },
    { icon: <FaClipboardList />, text: "طلباتي", path: "/confirmedorders" },
    { icon: <FaHeart />, text: "المفضلة", path: "/favorites" },
    { icon: <FaComments />, text: "قالوا عن طوق نجاة", path: "/abouttawq" },
    { icon: <FaHandshake />, text: "الشراكات المجتمعية", path: "/communitypartnerships" },
    { icon: <FaUsers />, text: "المسوّقين", path: "/marketers" },
    { icon: <FaStore />, text: "التجار", path: "/sellers" },
    { icon: <FaGift />, text: "عروض طوق نجاة", path: "/offerstawq" },
    { icon: <FiUser />, text: "معلومات الحساب", path: "/profileaccount" },
    { icon: <CiCreditCard1 />, text: "الحساب البنكي", path: "/bankaccount" },
    { icon: <FaBullhorn />, text: "تسويق", path: "/marketing" },
    { icon: <FaHeadset />, text: "دعم التطبيق", path: "/eyesupport" },
  ];

  return (
    <>
      {/* ===== MAIN NAVBAR ===== */}
      <div className="buyertn-nav-main" style={{height: "70px"}}>
        <div className="buyertn-nav-wrapper">

          {/* LEFT */}
          <div className="tn-nav-left">
            <Link to="#" className="tn-nav-download-app">
              تحميل التطبيق <i className="fa fa-download"></i>
            </Link>
          </div>

          {/* CENTER (Desktop) */}
          <Nav className="tn-nav-links">
            <NavLink to="/home" className="tn-nav-link">الرئيسية</NavLink>
            <NavLink to="/shopping" className="tn-nav-link">التسوق</NavLink>
            <NavLink to="/confirmedorders" className="tn-nav-link">طلباتي</NavLink>
            <NavLink to="/favorites" className="tn-nav-link">المفضلة</NavLink>
            <NavLink to="/abouttawq" className="tn-nav-link">قالوا عن طوق نجاة</NavLink>
            <NavLink to="/communitypartnerships" className="tn-nav-link">الشراكات المجتمعية</NavLink>
            <NavLink to="/marketers" className="tn-nav-link">المسوّقين</NavLink>
            <NavLink to="/sellers" className="tn-nav-link">التجار</NavLink>
            <NavLink to="/offerstawq" className="tn-nav-link">عروض طوق نجاة</NavLink>
          </Nav>

          {/* HAMBURGER */}
          <button className="tn-nav-hamburger" onClick={toggleMenu}>
            ☰
          </button>

        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div className={`tn-mobile-menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
        <ul className="tn-mobile-list">
          {sidebarLinks.map((item, index) => (
            <li key={index}>
              <button
                className="tn-mobile-item"
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ===== OVERLAY ===== */}
      <div
        className={`tn-nav-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
