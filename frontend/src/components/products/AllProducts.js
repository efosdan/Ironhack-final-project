import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";

const API_URL = "http://localhost:5005";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="product-card-wrapper">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </main>
  );
}

export default AllProducts;
