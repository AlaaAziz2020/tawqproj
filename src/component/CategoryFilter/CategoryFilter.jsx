import React, { useState } from "react";
import "./CategoryFilter.css";
export default function CategoryFilter() {
  const [price, setPrice] = useState(10);

  return (
<div className="filter-box">
  <h2 className="filter-title">اختيار التصنيف</h2>

  {/* الفئة */}
  <div className="filter-section">
    <h4 className="filter-heading">الفئة</h4>

    <label className="filter-checkbox">
      <input type="checkbox" defaultChecked />
      <span className="ch">حريمي</span>
    </label>

    <label className="filter-checkbox">
      <input type="checkbox" />
      <span className="ch">رجالي</span>
    </label>

    <label className="filter-checkbox">
      <input type="checkbox" />
      <span className="ch">اطفال</span>
    </label>

    <label className="filter-checkbox">
      <input type="checkbox" />
      <span className="ch">أحذية</span>
    </label>
  </div>

  {/* السعر */}
  <div className="filter-section mt-4">
    <h4>السعر</h4>

    <p className="price-range-text">ر.س 2 - ر.س {price}</p>

    <input
      type="range"
      min="2"
      max="100"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      className="price-slider"
    />
  </div>
</div>

  );
}

