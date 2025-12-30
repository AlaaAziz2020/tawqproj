import React from 'react'
import emptyImg from "../../assets/empty-cart.png"; 
export default function EmptyAdvertisement() {
 
   return (
     <div className="orders-pagenew container  ">
 
       <div className="orders-contentnew">
         <img src={emptyImg} alt="no orders" className="empty-img" />
         <p className="empty-text">
           لا يوجد اعلانات لعرضها  
         </p>
       </div>
 
     </div>
   );
 }
