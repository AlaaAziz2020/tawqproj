import React from "react";
import "../OrderDetails/OrderDetails.css";
import orcheck from '../../assets/or-check.png'
import ordercheck from '../../assets/order2.png'
import delivered from '../../assets/delivered.png'

export default function OrderDetails() {
  return (
    <div className="container corderdetails-page mt-5">

      {/* عنوان الصفحة */}
      <h1 className="cpage-title pt-4 pb-3 ">
        تفاصيل الطلب / <span className="cneworders">الطلبات الجديدة</span>
      </h1>

      {/* زر الطلب */}
      <div className="buttonn mb-4">
        <button className="corder-btn">الطلب</button>
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

          <div className="cleft-side-price">
            100 ر.س
          </div>

        </div>
      </div>

      {/* زر تفاصيل المنتج على اليمين */}
<div className="buttonn pt-1">
  <button className="product-btn">تفاصيل المنتج</button>
</div>
<div className="product-details-box ">

  <div className="crow-line">
    <span className="label">اسم المنتج</span>
    <p className="value">سترة شتوية بسعر خاص</p>
  </div>

  <div className="crow-line">
    <span className="label">الكمية</span>
    <p className="value">1</p>
  </div>

  <div className="crow-line">
    <span className="label">السعر</span>
    <p className="value">100 ر.س</p>
  </div>

  <div className="crow-line">
    <span className="label">مصاريف الشحن</span>
    <p className="value">200 ر.س</p>
  </div>

  <div className="crow-line total">
    <span className="label">الإجمالي</span>
    <p className="value">1000 ر.س</p>
  </div>

</div>
  
 <div className="buttonn ">
  <button className="product-btn">حالة الطلب</button>
</div> 
<div className="order-status-section">

  {/* <div className="status-header">
    <button className="status-btn">حالة الطلب</button>
  </div> */}
{/* شريط حالة الطلب */}
<div className="order-timeline">

  {/* الخطوط */}
  <div className="timeline-gray"></div>
  <div className="timeline-orangee"></div>

  {/* الثلاث خطوات */}
  <div className="timeline-steps">

    <div className="t-step">
      <div className="t-circle accepted delivered">
        {/* <img src={delivered} alt="تم الاستلام" /> */}
        <i className="fa fa-right"></i>
      </div>
      <p className="t-title">تم تأكيد الطلب</p>
      <p className="t-date">2025/12/10</p>
    </div>

    <div className="t-step">
      <div className="t-circle accepted">
        {/* <img src={ordercheck} alt="تم الشحن" /> */}
                <i className="fa fa-right"></i>

      </div>
      <p className="t-title ">تم الشحن</p>
      <p className="t-date">2025/12/10</p>
    </div>

    <div className="t-step">
      <div className="t-circle ">
        {/* <img src={orcheck} alt="تم تأكيد الطلب" /> */}
                <i className="fa fa-right"></i>

      </div>
            <p className="t-title">تم الاستلام</p>
                  <p className="t-date">2025/12/10</p>


    </div>

  </div>
</div>



  <div className="confirm-wrapper ">
    <button className="confirm-btn mb-5 mt-3 pt-3 pb-3">تأكيد الطلب</button>
  </div>

</div>




    </div>
  );
}
