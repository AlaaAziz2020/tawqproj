import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../EyeSupport/EyeSupport.css";
import fsupport from "../../assets/fsupport.png";
import eyedark from "../../assets/eyesupport.png";
import { Link } from "react-router-dom";

export default function EyeSupport() {
  return (
    <div className="support-wrapper">
      <div className="container">
        <div className="row">

          {/* ===== RIGHT SIDE TABS ===== */}
          <div className="col-lg-3 d-none d-lg-block support-tabs-column">
            <div className="support-tabs">

              <Link to="/eyesupport " className="support-tab text-white text-decoration-none active-tab">
                <img src={eyedark} />
                <span className="eye-text text-white">الدعم العيني</span>
              </Link>

              <Link to="/financialsupport" className="support-tab text-decoration-none inactive-tab">
                <img src={fsupport} />
                <span className="f-text mx-3">الدعم المادي</span>
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
            <Row className="mb-4 w-50">
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
              <Form.Label className="label-title">نوع الدعم العيني</Form.Label>
              <Form.Control className="input-box" placeholder="مثال: طعام، ملابس" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label-title">وصف المنتج</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                className="input-box textarea-box"
                placeholder="مثال: شنطة جديدة تكفي جميع الأغراض"
              />
            </Form.Group>

            <Button className="submit-btn w-100">إرسال الطلب</Button>

          </div>

        </div>
      </div>
    </div>
  );
}
