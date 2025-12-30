import React, { useState } from "react";
import "../MyOrders/MyOrders.css";
import emptyImg from "../../assets/empty-cart.png"; 

export default function MyOrders() {

  const [activeTab, setActiveTab] = useState("confirmed");

  return (
    <div className="orders-pagenew container  ">

      {/* الجزء اليمين - Tabs */}
      <div className="orders-tabsnew">

        <button
          className={activeTab === "confirmed" ? "tab active" : "tab"}
          onClick={() => setActiveTab("confirmed")}
        >
          (1) المؤكدة
        </button>

        <button
          className={activeTab === "shipped" ? "tab active" : "tab"}
          onClick={() => setActiveTab("shipped")}
        >
          (1) المشحونة
        </button>

        <button
          className={activeTab === "completed" ? "tab active" : "tab"}
          onClick={() => setActiveTab("completed")}
        >
          (1) المكتملة
        </button>

      </div>

      {/* الجزء الشمال */}
      <div className="orders-contentnew">
        <img src={emptyImg} alt="no orders" className="empty-img" />
        <p className="empty-text">
          لا يوجد طلبات لعرضها عند تلقي طلب سيتم <br/> إخطارك.
        </p>
      </div>

    </div>
  );
}
