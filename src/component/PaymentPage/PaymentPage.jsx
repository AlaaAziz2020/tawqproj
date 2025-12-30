import React, { useState } from "react";
import "./PaymentPage.css";

export default function PaymentPage() {
  const [method, setMethod] = useState("cash");

  return (
    <div className="payment-page container mb-5 mt-5 pt-5 pb-5">

      <h1 className="payment-title mt-5 pt-5">
        الدفع / <span>العربة</span> / التسوق
      </h1>

      <div className="payment-wrapper">

        {/* ===== Left Box - Order Summary ===== */}
        <div className="order-summary">
          <h3 className="summary-title">محتويات الطلب</h3>

          <div className="summary-row">
            <span>المنتجات</span>
            <span>2</span>
          </div>

          <div className="summary-row">
            <span>المجموع</span>
            <span>230</span>
          </div>

          <div className="summary-row">
            <span>الشحن</span>
            <span>30</span>
          </div>

          <div className="summary-row total">
            <span>الإجمالي</span>
            <span className="total-num">260</span>
          </div>
        </div>

        {/* ===== Right Box - Payment Methods ===== */}
        <div className="payment-methods">

          <label className="method-row">
            <span>نقداً</span>
            <input
              type="radio"
              name="pay"
              checked={method === "cash"}
              onChange={() => setMethod("cash")}
            />
          </label>

          <label className="method-row">
            <span>فيزا</span>
            <input
              type="radio"
              name="pay"
              checked={method === "visa"}
              onChange={() => setMethod("visa")}
            />
          </label>

          <button className="pay-btn">ادفع الآن</button>
        </div>

      </div>

    </div>
  );
}
