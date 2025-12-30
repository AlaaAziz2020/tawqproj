import React from "react";
import { Container } from "react-bootstrap";
import "../Uppernav/Uppernav.css";
import cartnav from "../../assets/cartnav.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function UpperNav() {
  return (
    <div className="tn-uppernav">
      <div className="tn-uppernav-wrapper px-2 px-md-4">
        <img src={logo} alt="logo" className="tn-nav-logo" />

        <div className="tn-search-box">
          <input type="text" placeholder="البحث عن المنتج" />
          <i className="fa fa-search tn-search-icon"></i>
        </div>

        <div className="tn-left-icons">
          <span className="tn-lang-btn">
            EN <i className="fa fa-exchange"></i>
          </span>

          <i className="fa fa-bell tn-nav-icon"></i>
          <svg
            width="40"
            height="40"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.6 34.6C34.6 35.932 33.532 37 32.2 37C31.5635 37 30.953 36.7471 30.5029 36.2971C30.0529 35.847 29.8 35.2365 29.8 34.6C29.8 33.268 30.868 32.2 32.2 32.2C32.8365 32.2 33.447 32.4529 33.8971 32.9029C34.3471 33.353 34.6 33.9635 34.6 34.6ZM20.2 32.2C18.868 32.2 17.8 33.268 17.8 34.6C17.8 35.2365 18.0529 35.847 18.5029 36.2971C18.953 36.7471 19.5635 37 20.2 37C21.532 37 22.6 35.932 22.6 34.6C22.6 33.268 21.532 32.2 20.2 32.2ZM20.44 28.156L20.404 28.3C20.404 28.468 20.536 28.6 20.704 28.6H34.6V31H20.2C19.5635 31 18.953 30.7471 18.5029 30.2971C18.0529 29.847 17.8 29.2365 17.8 28.6C17.8 28.18 17.908 27.784 18.088 27.448L19.72 24.508L15.4 15.4H13V13H16.924L18.052 15.4H35.8C36.46 15.4 37 15.94 37 16.6C37 16.804 36.94 17.008 36.856 17.2L32.56 24.964C32.152 25.696 31.36 26.2 30.46 26.2H21.52L20.44 28.156ZM22 23.8H23.8V21.4H20.872L22 23.8ZM25 21.4V23.8H28.6V21.4H25ZM28.6 20.2V17.8H25V20.2H28.6ZM32.332 21.4H29.8V23.8H31L32.332 21.4ZM34.336 17.8H29.8V20.2H33.004L34.336 17.8ZM19.168 17.8L20.296 20.2H23.8V17.8H19.168Z"
              fill="#1D3A77"
            />
          </svg>
          <Link to={"/profileaccount"}>
            <i className="fa fa-user tn-nav-icon"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
