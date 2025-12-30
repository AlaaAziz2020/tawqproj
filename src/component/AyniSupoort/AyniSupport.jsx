import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./AyniSupport.css";

export default function AyniSupport() {
  return (
    <div className="ayni-wrapper container">

      <h3 className="ayni-title text-center">نموذج الدعم العيني</h3>

      {/* الاسم */}
      <Form.Group className="mb-4">
        <Form.Label className="label-title">الاسم</Form.Label>
        <Form.Control
          className="input-box"
          placeholder="الاسم"
        />
      </Form.Group>

      {/* الدولة + المدينة */}
      <Row className="mb-4">
        <Col md={6} className="mb-3 mb-md-0">
          <Form.Label className="label-title">الدولة</Form.Label>
          <Form.Control className="input-box" placeholder="الدولة" />
        </Col>

        <Col md={6}>
          <Form.Label className="label-title">المدينة/المحافظة</Form.Label>
          <Form.Control className="input-box" placeholder="المدينة/المحافظة" />
        </Col>
      </Row>

      {/* الهاتف */}
      <Form.Label className="label-title">رقم الهاتف</Form.Label>
      <Row className="mb-4">
        <Col xs={4}>
          <Form.Select className="input-box small-box">
            <option>+966</option>
            <option>+20</option>
            <option>+971</option>
          </Form.Select>
        </Col>

        <Col xs={8}>
          <Form.Control
            type="text"
            placeholder="123 456 789"
            className="input-box"
          />
        </Col>
      </Row>

      {/* العنوان */}
      <Form.Group className="mb-4">
        <Form.Label className="label-title">العنوان</Form.Label>
        <Form.Control className="input-box" placeholder="العنوان" />
      </Form.Group>

      {/* نوع الدعم */}
      <Form.Group className="mb-4">
        <Form.Label className="label-title">نوع الدعم العيني</Form.Label>
        <Form.Control
          className="input-box"
          placeholder="مثال: طعام، ملابس"
        />
      </Form.Group>

      {/* وصف المنتج */}
      <Form.Group className="mb-4">
        <Form.Label className="label-title">وصف المنتج</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          className="input-box textarea-box"
          placeholder="مثال: شنطة سواء جديدة عملية تكفي جميع الأغراض"
        />
      </Form.Group>

      <Button className="submit-btn w-100">إرسال الطلب</Button>
    </div>
  );
}
