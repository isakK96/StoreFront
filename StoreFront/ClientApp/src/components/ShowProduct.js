import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "./ProductInfo";

const ShowProduct = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async (productID) => {
      setLoading(true);
      const result = await fetch("api/products/" + productID);
      const data = await result.json();
      setProductData(data);
      setLoading(false);
      console.log(productData);
    };
    fetchProduct(id);
  }, []);

  return (
    <div className="products-container">
      {loading ? (
        "loading..."
      ) : (
        <ProductInfo
          image={productData.image}
          description={productData.description}
          title={productData.title}
          price={productData.price}
          category={productData.category}
        />
      )}
    </div>
  );
};

export default ShowProduct;
