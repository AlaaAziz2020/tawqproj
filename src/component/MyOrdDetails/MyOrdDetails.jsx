import { useParams } from "react-router-dom";
import "./MyOrdDetails.css";

export default function MyOrdDetails() {

  const { id } = useParams();

  return (
<div className="my-order-details container">

      <h1 className="order-details-title">تفاصيل الطلب رقم {id}</h1>

      <div className="order-details-box">

        <h2 className="order-details-heading">تخفيضات الجمعة السوداء</h2>

        <p className="order-details-desc">
          عروض مدهشة على المنتجات المختارة — تفاصيل الطلب هنا…
        </p>

      </div>
    </div>
  );
}
