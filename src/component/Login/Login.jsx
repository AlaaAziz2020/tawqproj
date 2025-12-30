import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import loginbg from "../../assets/sidelogo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
const handleSubmit = () => {
  let temp = {};

  if (!email.trim()) temp.email = "البريد الإلكتروني مطلوب";
  if (!password.trim()) temp.password = "كلمة المرور مطلوبة";

  setErrors(temp);
  if (Object.keys(temp).length !== 0) return;

  localStorage.setItem("isLoggedIn", "true");

  navigate("/home"); 
};


  return (
    <div className="login-wrapper ">
      <div className="login-container container-fluid">
        <div className="row">
          <div className="login-image col-md-6 p-0">
            <img src={loginbg} alt="login" className="w-100 h-100 " />
          </div>

          <div className="login-form col-12 col-md-6 d-flex flex-column ">
            <div className="login-logo mb-4 text-center ">
              <img className="mt-3" src={logo} alt="logo" />
            </div>

            <h3 className="mb-3 fw-bold forgot-password">!..مرحبا بعودتك</h3>

            <label className="input-label mt-2">البريد الالكتروني</label>
            <input
              type="email"
              className="input-field mb-1"
              placeholder="ادخل البريد الالكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <small className="input-error">{errors.email}</small>
            )}

            <label className="input-label mt-3">كلمة المرور</label>

            <div className="special-password-box">
              <input
                type={showPassword ? "text" : "password"}
                className="login-special-password-input"
                placeholder="ادخل كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <i
                className={`fa-regular ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                } special-pass-icon`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>

            {errors.password && (
              <small className="input-error">{errors.password}</small>
            )}

            <div className="forgot-password mt-1">
              <span
                className="link"
                style={{
                  color: "#1d3a77",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("/forgetpassword")}
              >
                هل نسيت كلمة المرور؟
              </span>
            </div>

            <button
              className="login-btn btn w-100 text-white mt-4"
              onClick={handleSubmit}
            >
              تسجيل دخول
            </button>

            <p className="login-account-text mt-3 text-center fw-bold">
              لا تمتلك حساب ؟{" "}
              <span
                className="link fw-normal"
                onClick={() => navigate("/accounttype")}
                style={{ color: "#1d3a77", cursor: "pointer" }}
              >
                إنشاء حساب
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
