import React from "react";
import "./SellerMaddiSupport.css";

export default function SellerMaddiSupport() {
  return (
    <div className="maddi-page maddi-fade-in container mt-5 mb-5">

      {/* عنوان الصفحة */}
      <h1 className="maddi-title">نموذج الدعم المادي</h1>

      <form className="maddi-form">

        {/* الاسم */}
        <div className="maddi-input-group-full">
          <label className="maddi-label">الاسم</label>
          <input
            className="maddi-input"
            type="text"
            placeholder="الاسم"
          />
        </div>

        {/* رقم الهاتف */}
        <div className="maddi-input-group-full">
          <label className="maddi-label">رقم الهاتف</label>

          <div className="maddi-phone-row">
            {/* كود الدولة */}
            <div className="maddi-phone-code-box">
              <select className="maddi-phone-select">
                <option value="+966">+966</option>
                <option value="+20">+20</option>
                <option value="+971">+971</option>
                <option value="+965">+965</option>
              </select>
            </div>

            {/* رقم الجوال */}
            <input
              type="text"
              className="maddi-input maddi-phone-input"
              placeholder="123 456 789"
            />
          </div>
        </div>

        {/* الدولة + المدينة */}
        <div className="maddi-input-row">
          <div className="maddi-input-group">
            <label className="maddi-label">الدولة</label>
            <input
              className="maddi-input"
              type="text"
              placeholder="الدولة"
            />
          </div>

          <div className="maddi-input-group">
            <label className="maddi-label">المدينة/المحافظة</label>
            <input
              className="maddi-input"
              type="text"
              placeholder="المدينة/المحافظة"
            />
          </div>
        </div>

        {/* العنوان */}
        <div className="maddi-input-group-full">
          <label className="maddi-label">العنوان</label>
          <input
            className="maddi-input"
            type="text"
            placeholder="العنوان"
          />
        </div>

        {/* الجهة المدعومة (select) */}
        <div className="maddi-input-group-full">
          <label className="maddi-label">الجهة المدعومة</label>
          <select
            className="maddi-input maddi-support-select"
            defaultValue=""
          >
            <option value="" disabled>
              ادخل اسم الجهة المدعومة
            </option>
            <option value="1">جهة 1</option>
            <option value="2">جهة 2</option>
            <option value="3">جهة 3</option>
          </select>
        </div>

        {/* مبلغ التبرع */}
        <div className="maddi-input-group-full">
          <label className="maddi-label">مبلغ التبرع</label>
          <input
            className="maddi-input"
            type="number"
            placeholder="ادخل مبلغ التبرع"
          />
        </div>

        {/* زر الإرسال */}
        <button type="submit" className="maddi-send-btn">
          إرسال الطلب
        </button>
      </form>
    </div>
  );
}
