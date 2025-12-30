import React from "react";
import SidebarFilters from "../SidebarFilters/SidebarFilters";
import ProductList from "../ProductList/ProductList";
import "../RelatedActivites/RelatedActivites.css";

export default function RelatedActivites() {
  return (
    <div className="related-container">

      {/* Sidebar */}
      <div className="sidebar-fixed">
        <SidebarFilters />
      </div>

      {/* Products */}
      <div className="products-content">
        <ProductList />
      </div>

    </div>
  );
}
