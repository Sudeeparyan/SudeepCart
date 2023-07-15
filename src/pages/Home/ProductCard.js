import React from "react";
import "./ProductCard.css";
const ProductCard = ({item, handleClick}) => {
  return (
    <div className="homeCard">
      
      <h2>        
        {item.Category}
      </h2>
      <img className="productImg" src={item.Image} alt={Image} />
      <h2><u>{item.Title}</u></h2>
      <div className="details">
        <h5>Description {item.Description}</h5>
        <h5>Price: {item.Price}</h5>
        <h5>Rating: {item.Stars}</h5>
        <h5>Availability : {item.Availability}</h5>
        <button className="btn btn-info" onClick={() => handleClick(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
