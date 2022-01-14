import React, { useState, useEffect } from "react";
import ProductThumbnail from "./ProductThumbnail";
const FetchProducts = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const result = await fetch("api/products");
      const data = await result.json();
      setProducts(data);
      setLoading(false);
      console.log(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      {loading
        ? "loading..."
        : products.map((product) => {
            return (
              <ProductThumbnail
                id={product.id}
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                category={product.category}
              />
            );
          })}
    </div>
  );
};

export default FetchProducts;
