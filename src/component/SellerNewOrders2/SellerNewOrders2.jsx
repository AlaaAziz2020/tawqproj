import React from "react";
import "./SellerNewOrders2.css";
import emptycart from '../../assets/empty-cart.png'
export default function SellerNewOrders2() {


  return (
    <div className="container neworders-page mt-5 mb-5 pt-5 pb-5">

      {/* <h1 className="heading mt-5 pt-5">
        الطلبات الجديدة/<span className="main">الرئيسية</span>
      </h1> */}

      <div className="orders2-image text-center mt-5 mb-5 pt-5 pb-5">
       <img src={emptycart} />
       <h4>لا يوجد طلبات لعرضها . </h4>
      </div>

    </div>
  );
}
