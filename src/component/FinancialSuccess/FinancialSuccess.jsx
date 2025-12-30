import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../FinancialSuccess/FinancialSuccess.css";
import eyedark from '../../assets/eyedark.png'
import whitesupport from '../../assets/whitesupport.png'
import eyesuccess from '../../assets/successcase.png'

export default function FinancialSuccess() {
  return (
    <div className="support-wrapper  ">
<div className="container ">
 <div className="row">

        {/* ===== RIGHT SIDE TABS ===== */}
        <div className="col-lg-3 d-none d-lg-block support-tabs-column">

          <div className="support-tabs">

            <div className="support-tab text-white inactive-tab ">
              <img src={eyedark}/>
               
            <span className="eye-text ">الدعم العيني</span>
            </div>

            <div className="support-tab  active-tab">
              <img src={whitesupport}/>
              <span className="f-text mx-3 text-white">الدعم المادي</span>
            </div>

          </div>

        </div>

        {/* ===== LEFT SIDE FORM ===== */}
        <div className="col-lg-9 col-12 ayni-wrapper text-center mt-3 mb-5">
               <img src={eyesuccess} className="successcase "/>
               <h1 className="success-heading pt-5">تم الإرسال بنجاح.</h1>
               <p className="success-text mb-5 pb-5"> طلبك قيد المراجعة من قبل الإدارة. سيتم إخطارك <br/>قريبًا.</p>
        </div>

      </div>
</div>
     

    </div>
  );
}
