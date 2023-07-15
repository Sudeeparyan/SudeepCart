import React from "react";
import homeData from "./HomeData";
import ProductCard from "./ProductCard";
const HomeProducts = ({ handleClick }) => {


  return (
    <div className="homeProduct">
      {homeData.map((item) => (
        <ProductCard item={item} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default HomeProducts;
