import { useParams } from "react-router-dom";
import "./SellersDetails.css";

import seller1 from "../../assets/seller1.jpg";
import seller2 from "../../assets/seller2.jpg";
import seller3 from "../../assets/seller3.jpg";
import seller4 from "../../assets/seller4.jpg";

export default function SellersDetails() {
  const { id } = useParams();

  const sellers = [
    {
      id: 1,
      name: "Electronics Store",
      type: "إلكترونيات",
      desc: "بيع جميع الأجهزة الإلكترونية الحديثة",
      img: seller1,
    },
    {
      id: 2,
      name: "Games Store",
      type: "ألعاب",
      desc: "أحدث الألعاب والإكسسوارات",
      img: seller2,
    },
    {
      id: 3,
      name: "Furniture Store",
      type: "أثاث",
      desc: "أثاث عصري لجميع المنازل",
      img: seller3,
    },
    {
      id: 4,
      name: "Clothes Store",
      type: "ملابس",
      desc: "أحدث أنواع الملابس الشتوية والصيفية",
      img: seller4,
    },
  ];

  const seller = sellers.find((s) => s.id === Number(id));

  if (!seller) {
    return <h2 style={{ textAlign: "center" }}>التاجر غير موجود</h2>;
  }

  return (
    <div className="seller-details-page">
      <img src={seller.img} alt={seller.name} />
      <h2>{seller.name}</h2>
      <h4>{seller.type}</h4>
      <p>{seller.desc}</p>
    </div>
  );
}
