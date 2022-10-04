import React from "react";
import "./ProductCardStyles.css";

function ProductCard({ product, handleClick }) {
  return (
    <div>
      <div className="card">
        <img src={product.img} alt="pasta" />

        <section className="details">
          <div className="min-details">
            <h1>
              {product.name}{" "}
              {/* <span>
                <button>add to cart</button>
              </span> */}
            </h1>
            <h1 className="price">{product.price}</h1>
          </div>

          <div className="options">
            <p id="description">{product.description}</p>
          </div>
          <a onClick={() => handleClick(product)} href="#" className="btn">
            add to cart
          </a>
        </section>
      </div>
    </div>
  );
}

export default ProductCard;