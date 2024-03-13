import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/apiService";
import { useProductsContext } from "../context/ProductsContext";

const ProductList = () => {
  const { products, setProducts } = useProductsContext();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.products);
    };
    getProducts();
  }, [setProducts]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductList;
