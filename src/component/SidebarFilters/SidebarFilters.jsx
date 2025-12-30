import React from "react";
import "./SidebarFilters.css";

export default function SidebarFilters() {
  return (
    <div className="filters-box">

      <h4 className="title">اختيار التصنيف</h4>

      <div className="group">
        <label>الدولة</label>
        <input value="مصر" readOnly className="form-control" />
      </div>

      <div className="group mt-4">
        <label>السعر</label>
        <p className="range-text">٢ ر.س — ١٠ ر.س</p>
        <input type="range" className="form-range" min="2" max="10" />
      </div>

      <hr />

    </div>
  );
}
