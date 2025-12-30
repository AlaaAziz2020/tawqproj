import React, { useState } from "react";
import axios from "axios";
import '../ResetPassword/ResetPassword.css'; 
import registerbg from "../../assets/register-bg.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const email = localStorage.getItem("resetEmail");
    const otp = localStorage.getItem("otpValue");

    axios.post("https://toknagah.viking-iceland.online/api/user/auth/reset-password", {
      email: email,
      otp: otp,
      new_password: password,
      new_password_confirmation: confirm
    })
    .then((res)=>{
      console.log("RESET SUCCESS ✅", res.data);
      navigate("/Login");
    })
    .catch((err)=>{
      console.log(err);
      if(err.response?.data?.message){
        setError(err.response.data.message);
      }
    });
  };

  return (
    <div className="reset-wrapper">
      <div className="reset-container">
        <div className="row">

          <div className="reset-image col-12 col-md-6 p-0">
            <img src={registerbg} alt="reset-bg" className="img-fluid w-100 h-100"/>
          </div>

          <div className="reset-form col-12 col-md-6 d-flex flex-column ">
            <div className="reset-logo mb-4 text-center">
              <img src={logo} alt="logo"/>
            </div>

            <h3 className="reset-title mt-3 text-center">تغيير كلمة المرور</h3>
            <p className="reset-subtitle mt-1 text-center">
              أدخل كلمة المرور الجديدة
            </p>

            <label className="reset-label mt-3">كلمة المرور الجديدة</label>
            <input 
              type="password"
         style={{ backgroundColor: "#fafafa", padding: "20px 5px !important" }}

              className="reset-input mb-1"
              placeholder="*******"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />

            <label className="reset-label mt-3">تأكيد كلمة المرور</label>
            <input 
              type="password"
                            style={{ backgroundColor: "#fafafa", padding: "20px 5px !important" }}

              className="reset-input mb-1"
              placeholder="*******"
              value={confirm}
              onChange={(e)=> setConfirm(e.target.value)}
            />

            {error && <p className="reset-error">{error}</p>}

            <button className="reset-btn text-white font-bold mt-4" onClick={handleSubmit}>
              حفظ كلمة المرور
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
