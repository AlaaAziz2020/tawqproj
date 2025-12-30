import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../FinancialSupport/FinancialSupport.css";
import eyedark from '../../assets/eyedark.png';
import whitesupport from '../../assets/whitesupport.png';

export default function FinancialSupport() {
  return (
    <div className="support-wrapper">
      <div className="container">
        <div className="row">

          {/* ===== RIGHT SIDE TABS ===== */}
          <div className="col-lg-3 d-none d-lg-block support-tabs-column">
            <div className="support-tabs">

              {/* الدعم العيني */}
              <Link to="/eyesupport" className="text-decoration-none support-tab inactive-tab">
                <img src={eyedark} />
                <span className="eye-text">الدعم العيني</span>
              </Link>

              {/* الدعم المادي */}
              <Link to="/financialsupport" className="text-decoration-none support-tab active-tab">
                <img src={whitesupport} />
                <span className="f-text mx-3 text-white">الدعم المادي</span>
              </Link>

            </div>
          </div>

          {/* ===== LEFT SIDE FORM ===== */}
          <div className="col-lg-9 col-12 ayni-wrapper">

            <Form.Group className="mb-4">
              <Form.Label className="label-title">الاسم</Form.Label>
              <Form.Control className="input-box" placeholder="الاسم" />
            </Form.Group>

            <Row className="mb-4">
              <Col md={6}>
                <Form.Label className="label-title">الدولة</Form.Label>
                <Form.Control className="input-box" placeholder="الدولة" />
              </Col>

              <Col md={6}>
                <Form.Label className="label-title">المدينة/المحافظة</Form.Label>
                <Form.Control className="input-box" placeholder="المدينة/المحافظة" />
              </Col>
            </Row>

            <Form.Label className="label-title">رقم الهاتف</Form.Label>
            <Row className="mb-4 keyphone">
              <Col xs={4}>
                <Form.Select className="input-box small-box">
                  <option>+966</option>
                  <option>+20</option>
                  <option>+971</option>
                </Form.Select>
              </Col>

              <Col xs={8}>
                <Form.Control className="input-box" placeholder="123 456 789" />
              </Col>
            </Row>

            <Form.Group className="mb-4">
              <Form.Label className="label-title">العنوان</Form.Label>
              <Form.Control className="input-box" placeholder="العنوان" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label-title">الجهة المدعومة</Form.Label>
              <Form.Control className="input-box" placeholder="ادخل اسم الجهه المدعومة" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label-title">مبلغ التبرع</Form.Label>
              <Form.Control className="input-box" placeholder="ادخل مبلغ التبرع" />
            </Form.Group>

            <Button className="submit-btn w-100">إرسال الطلب</Button>

          </div>

        </div>
      </div>
    </div>
  );
}
