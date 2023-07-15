import React from "react";
import NavBar from "../NavBar/NavBar";
import Categories from "../Categories/Categories";
import Announcement from "../Announcement/Announcement";
import "./product.css";
import fig4 from "./4.png";
function Product4() {
  return (
    <div>
      <div className="style">
        <img src={fig4} alt="laptop" height="570px" width="800px" />
        <container className="dis">
          <h1>
            Rolex Watch from Vikram
          </h1>
          
At Rolex we want to ensure that your watch performs as well throughout your life as on the day you bought it. All that is needed is to give your Rolex just the smallest bit of care.
          <h2>Price: 99,999 Rs</h2>
          <div className="btn btn-warning">ADD TO CART</div>
          <div className="btn btn-danger">BUY</div>
        </container>
      </div>
    </div>
  );
}

export default Product4;
