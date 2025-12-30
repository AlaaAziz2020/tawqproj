import React from "react";
import "./Orders.css";
import emptyImg from "../../assets/empty-cart.png"; 

export default function Orders() {
  return (
    <div className="customer-orders corders-page container">

      <div className="row">

        <div className="col-lg-8 col-12 orders-content">
          <img src={emptyImg} alt="" className="orders-img" />
          <p className="orders-text">لا يوجد طلبات لعرضها.</p>
        </div>

        <div className="col-lg-4 col-12 orders-tabs">
          <button className="tab-btn active">الطلبات الحالية</button>
          <button className="tab-btn">الطلبات المكتملة</button>
          <button className="tab-btn mb-5 ">الطلبات الملغية</button>
        </div>

      </div>

    </div>
  );
}
