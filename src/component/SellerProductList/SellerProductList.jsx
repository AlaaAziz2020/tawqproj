import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

export default function SellerProductList() {

  const products = [1,2,3,4,5,6];

  return (
    <div className="productList">
{/* 
      <p className="breadcrumb">الرئيسية / أنشطة ذات صلة</p>

      <h3 className="page-title">أنشطة ذات صلة</h3>

      <p className="results">النتيجة 1 - 12 من 214526</p>

      <div className="active-tags">
        <span className="tag">السعر : ٢ ر.س - ١٠ ر.س ×</span>
        <span className="tag">الدولة : مصر ×</span>
        <span className="clear">مسح الكل</span>
      </div> */}

      <div className="row mt-4">
        {products.map((item,i)=>(
          <div className="col-lg-4 col-md-6 mb-4" key={i}>
            <ProductCard />
          </div>
        ))}
      </div>

    </div>
  );
}
