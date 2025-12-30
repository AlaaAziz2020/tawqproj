import React from "react";
import { Container } from "react-bootstrap";
import "./SellerFinancialReports.css";

export default function SellerFinancialReports() {

  // Fake data (مؤقت لحد ما يجي API)
  const fakeReports = [
    { order_id: 2450, amount: 150, code: 4444, quantity: 1, status: "مكتمل", date: "2025/12/10" },
    { order_id: 2450, amount: 150, code: 4444, quantity: 1, status: "مكتمل", date: "2025/12/10" },
    { order_id: 2450, amount: 150, code: 4444, quantity: 1, status: "مكتمل", date: "2025/12/10" },
    { order_id: 2450, amount: 150, code: 4444, quantity: 1, status: "مكتمل", date: "2025/12/10" },
    { order_id: 2450, amount: 150, code: 4444, quantity: 1, status: "مكتمل", date: "2025/12/10" },
    { order_id: 2450, amount: 150, code: 4444, quantity: 1, status: "مكتمل", date: "2025/12/10" },
    { order_id: 2450, amount: 150, code: 4444, quantity: 1, status: "مكتمل", date: "2025/12/10" },
  ];

  return (
    <Container className="reports-page">

      {/* ===== Breadcrumb ===== */}
      <h2 className="page-titles pt-5">
        التقارير / <span className="accounts">الحسابات المالية</span> / <span className="main-gray">الرئيسية</span>
      </h2>

      {/* ===== Table ===== */}
      <div className="table-wrapper">

   <table className="finance-table">
        
        <thead>
          <tr className="tableheading">
            <th>رقم الطلب</th>
            <th>المبلغ</th>
            <th>الكود</th>
            <th>الكمية</th>
            <th>الحالة</th>
            <th>التاريخ</th>
          </tr>
        </thead>

        <tbody>
          {fakeReports.map((item, index) => (
            <tr key={index}>
              <td>{item.order_id}</td>
              <td> {item.amount}$</td>
              <td>{item.code}</td>
              <td>{item.quantity}</td>
              <td className="status">{item.status}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
   
              <button className="print-btn text-white ">طباعة </button>



    </Container>
  );
}
