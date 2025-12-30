import React from "react";
import "./SellerMysecodStore.css";
import emptycart from '../../assets/empty-cart.png'
export default function SellerMysecodStore() {


  return (
    <div className="container neworders-page mt-5 mb-5 pt-5 pb-5">

      <div className="orders2-image text-center mt-5 mb-5 pt-5 pb-5">
       <img src={emptycart} />
       <h4>لا يوجد طلبات لعرضها . </h4>
      </div>

    </div>
  );
}
