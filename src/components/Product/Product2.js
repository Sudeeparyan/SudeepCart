import React from "react";
import NavBar from "../NavBar/NavBar";
import Categories from "../Categories/Categories";
import Announcement from "../Announcement/Announcement";
import "./product.css";
import fig2 from "./2.png";
function Product2() {
  return (
    <div>
      <div className="style">
        <img src={fig2} className="shoes" alt="laptop" height="500px" width="70%" />
        <container className="dis">
          <h1>
          REEBOK 
          Running Shoes For Men
          </h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
          iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
          tristique tortor pretium ut. Curabitur elit justo, consequat id
          condimentum ac, volutpat ornare.
          <h2>Price: 99,999 Rs</h2>
          <div className="btn btn-warning">ADD TO CART</div>
          <div className="btn btn-danger">BUY</div>
        </container>
      </div>
    </div>
  );
}

export default Product2;
