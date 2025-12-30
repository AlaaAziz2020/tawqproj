import React, { useState } from "react";
import axios from "axios";
import './SellerForgetPassword.css'; 
import registerbg from "../../assets/register-bg.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function SellerForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [apiError, setApiError] = useState("");

  const handleSubmit = () => {
    setApiError("");

    axios.post("https://toknagah.viking-iceland.online/api/user/auth/forget-password", {
      email: email
    })
    .then((res)=>{
      console.log("SUCCESS", res.data);
      localStorage.setItem("resetEmail", email);
      navigate("/otpres");
    })
    .catch((err)=>{
      if(err.response?.data?.errors){
        setApiError(err.response.data.errors.email[0]);
      } else if(err.response?.data?.message){
        setApiError(err.response.data.message);
      }
    })
  }

  return (
    <div className="forget-wrapperr">
      <div className="forget-container">
        <div className="row">

          <div className="forget-image col-12 col-md-6 p-0">
            <img src={registerbg} alt="Forget" className="img-fluid w-100 h-100" />
          </div>

          <div className="forget-form col-12 col-md-6 d-flex flex-column text-end">
            <div className="forget-logo mb-4 text-center">
              <img src={logo} alt="logo" />
            </div>

            <h3 className="forget-title mb-3 fw-bold text-center">نسيت كلمة المرور ؟</h3>

            <label className="forget-label mt-2">البريد الإلكتروني</label>
            <input
              type="email"
              className="forget-input mb-1"
              placeholder="example@email.com"
                            style={{ backgroundColor: "#fafafa", padding: "20px 5px !important" }}

              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />

            {apiError && <small className="forget-error">{apiError}</small>}

            <button className="forget-btn text-white font-bold mt-4" onClick={handleSubmit}>
              ارسال
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
