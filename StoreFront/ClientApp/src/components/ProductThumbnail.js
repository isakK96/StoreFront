import React from "react";
import { Link } from "react-router-dom";

const ProductThumbnail = (props) => {
  return (
    <div className="card">
        <Link to={"/product/"+props.id} className="thumbnail-container">
          <img src={props.image} alt="thumbnail" className="card-img-top thumbnail-img"></img>
          <div class="card-body">
            <h6 className="card-title">{props.title}</h6>
            <p className="card-text"> ${props.price} </p>
          </div>
          <button className="btn btn-primary" type="submit">Add to cart</button>
        </Link>
    </div>
  );
};

export default ProductThumbnail;
