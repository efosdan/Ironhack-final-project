import React from "react";
import AllProducts from "./products/AllProducts";
import Cart from "./cart/Cart";
import Navbar from "./Navbar";

import { useState, useEffect } from "react";

function Main({ show, setShow, cartQuantity, setCartQuantity, cart, setCart }) {
  const handleClick = (product, e) => {
    if (cart.indexOf(product) !== -1) return;
    product.qty = 1;
    setCart([...cart, product]);
  };

  const handleChange = (product, d) => {
    const ind = cart.indexOf(product);
    const arr = cart;
    arr[ind].qty += d;

    if (arr[ind].qty === 0) arr[ind].qty = 1;
    setCart([...arr]);
  };

  useEffect(() => {
    const sumOfQuantities = cart
      .map((product) => product.qty)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    setCartQuantity(sumOfQuantities);
  }, [cart]);

  return (
    <div>
      {show ? (
        <AllProducts handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}

export default Main;
