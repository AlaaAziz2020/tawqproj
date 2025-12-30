import React from 'react'
import fsupport from "../../assets/fsupport.png";
import eyesuccess from '../../assets/fsupport.png'
import eyesupport from "../../assets/eyesupport.png";
export default function FSuccess() {
  return (
    <div>
         <div className="support-wrapper  ">
      <div className="container ">
       <div className="row">
      
              {/* ===== RIGHT SIDE TABS ===== */}
              <div className="col-lg-3 d-none d-lg-block support-tabs-column">
      
                <div className="support-tabs">
      
                  <div className="support-tab text-white active-tab ">
                    <img src={eyesupport}/>
                     
                  <span className="eye-text text-white">الدعم العيني</span>
                  </div>
      
                  <div className="support-tab  inactive-tab">
                    <img src={fsupport}/>
                    <span className="f-text mx-3 text-dark">الدعم المادي</span>
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
    </div>
  )
}
