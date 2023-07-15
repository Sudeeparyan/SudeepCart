import React, { useState } from "react";
import { useAuth } from "../../auth";
import "./Bsellers.css";
function Bsellers({ item, handleClick }) {
  const { title, id, image, description, category, price, rating } = item;
  const auth = useAuth();
  console.log("the user is", auth);
  return (
    <div>
      <div className="BsellerCard">
        <h3 data-testid="title">{title}</h3>
        <img className="BsellerImg" src={image} alt={id} />
        <div className="details">
          {/* <p>{description}</p> */}
          <h5 data-testid="price">Price: {price} /-Rs</h5>
          {/* <h5>Category {category}</h5> */}
          <button className="btn btn-warning" onClick={() => handleClick(item)}>
            Add to Cart
          </button>

          <button
            type="button"
            className="btn btn-info"
            data-toggle="modal"
            data-target={`#${id}`}
          >
            Details
          </button>
        </div>
      </div>

      <div id={id} className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
            <h3 className="modal-title">
              <h1 className="mobileHeading">{title}</h1>
            </h3>
          </div>
          <div className="modal-body">
            <img className="BsellerImg" src={image} alt={title}></img>
            <p>
              <h3>{description}</h3>
            </p>
            <h2>Price: {price}/-</h2>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-warning"
              data-dismiss="modal"
              onClick={() => handleClick(item)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bsellers;
