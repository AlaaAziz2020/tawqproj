import React from "react";
import "../MydeliveredOrders/MydeliveredOrders.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import wintershirt from "../../assets/winter-shirt.jpg";

export default function MyDeliveredOrders() {
  return (
    <div className="delivered-wrapper container pt-0">

      {/* اليمين - Tabs */}
    <div className="orders-page container pt-0">

      {/* ===== Tabs ===== */}
      <div className="tabs-row">
        <Link to="/confirmedorders" className="tab">
          (1) المؤكدة
        </Link>

        <Link to="/shippedorders" className="tab ">
          (1) المشحونة
        </Link>

        <button  className="tab active">
          (1) تم التسليم
        </button>
      </div>

      {/* الشمال - الكارت */}
      <div className="completed-box">

        {/* تم التسليم */}
        <div className="completed-statusdelivered">تم التسليم</div>

        {/* الكارد */}
        <Card className="completed-card">
          <div className="completed-contentdelivered">

            <img src={wintershirt} className="completed-img" />

            <div className="completed-text-wrapper">
              <h5 className="completed-title">تيشيرت شتوي</h5>
              <p className="completed-desc">تيشيرت شتوي ذات عرض خاص</p>
              <p className="completed-price">1500 ر.س</p>
            </div>

          </div>
        </Card>
</div>
      </div>

    </div>
  );
}
