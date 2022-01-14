import React, { useState, useEffect } from "react";
import ProductThumbnail from "./ProductThumbnail";
const FetchProducts = () => {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const result = await fetch("api/products");
      const data = await result.json();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
      console.log(data);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    let keyword = event.target.value.toLowerCase();
    if (keyword !== '') {
      const results = products.filter((product) => {
        return product.title.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products);
      // If the text field is empty, show all users
    }

    console.log(filteredProducts)
  };

  return (
    <>
      <label>Search: </label>
      <input type="text" onChange={(event) => handleSearch(event)} />

      <div className="products-container">
        {loading
          ? "loading..."
          : filteredProducts.map((product) => {
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
    </>
  );
};

export default FetchProducts;
