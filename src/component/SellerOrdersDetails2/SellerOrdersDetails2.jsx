import React from "react";
import "../SellerOrdersDetails2/SellerOrdersDetails2.css";
import conforder from '../../assets/conf-order2.png'
import ordercheck from '../../assets/order2.png'
import delivered from '../../assets/delivered.png'

export default function SellerOrdersDetails2() {
  return (
    <div className="container orderdetails-pagenew">

      {/* عنوان الصفحة */}
      <h1 className="page-titlenew pt-4 pb-3">
        تفاصيل الطلب / <span className="neworders">الطلبات الجديدة</span>
      </h1>

      {/* زر الطلب */}
      <div className="button mb-4">
        <button className="order-btn">الطلب</button>
      </div>

      {/* صندوق معلومات العميل */}
      <div className="customer-box">
        <div className="customer-info">

          <div className="right-side">
            <div className="icon-and-text">

              <div className="text-side">
                <h4 className="name text-dark">احمد محمد</h4>
                <p className="phone">+966 5145125</p>
                <p className="location">المملكة العربية السعودية، الرياض</p>
              </div>

              <div className="info">
                <i className="fa-solid fa-user"></i>
              </div>

            </div>
          </div>

          <div className="left-side-price">
            100 ر.س
          </div>

        </div>
      </div>

      {/* زر تفاصيل المنتج على اليمين */}
<div className="button pt-1">
  <button className="product-btn">تفاصيل المنتج</button>
</div>
<div className="product-details-boxnew ">

  <div className="row-line">
    <span className="label">اسم المنتج</span>
    <p className="value">سترة شتوية بسعر خاص</p>
  </div>

  <div className="row-line">
    <span className="label">الكمية</span>
    <p className="value">1</p>
  </div>

  <div className="row-line">
    <span className="label">السعر</span>
    <p className="value">100 ر.س</p>
  </div>

  <div className="row-line">
    <span className="label">مصاريف الشحن</span>
    <p className="value">200 ر.س</p>
  </div>

  <div className="row-line total">
    <span className="label">الإجمالي</span>
    <p className="value">1000 ر.س</p>
  </div>

</div>
  
 <div className="button ">
  <button className="product-btn">حالة الطلب</button>
</div> 
<div className="order-status-sectionnew">

  {/* <div className="status-header">
    <button className="status-btn">حالة الطلب</button>
  </div> */}

 <div className="order-timeline">

  <div className="timeline-graynew"></div>
  <div className="timeline-orange"></div>

  <div className="timeline-steps">

    <div className="t-step">
      <div className="t-circle active">
        <img src={conforder} alt="" />
      </div>
      <p className="t-title">تم تأكيد الطلب</p>
      <p className="t-date">2025/12/10</p>
    </div>

    <div className="t-step">
      <div className="t-circle2">
        <img src={ordercheck} alt="" />
      </div>
      <p className="t-title">تم الشحن</p>
      <p className="t-date">2025/12/10</p>
    </div>

    <div className="t-step">
      <div className="t-circlelast">
        <img src={delivered} alt="" />
      </div>
      <p className="t-title">تم الاستلام</p>
      <p className="t-date">2025/12/10</p>
    </div>

  </div>

</div>


  <div className="confirm-wrappernew text-center">
    <button className="confirm-btn mb-5 mt-3 pt-3 pb-3">تأكيد الطلب</button>
  </div>

</div>




    </div>
  );
}
