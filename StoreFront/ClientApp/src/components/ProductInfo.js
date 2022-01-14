import React from "react";
import capitalizeFirstLetter from "../capitalizeFirst";

const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <h1 className="title">{props.title}</h1>
      <div className="info-body">
        <img src={props.image} alt="thumbnail" className="product-img"></img>
        <div className="info-text">
          <p className="category text-right">Category: {capitalizeFirstLetter(props.category)}</p>
          <p className="description">{capitalizeFirstLetter(props.description)}</p>
          <div className="d-flex justify-content-between">
            <h2>${props.price}</h2>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
