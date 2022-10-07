import "./App.css";
import AllProducts from "./components/products/AllProducts";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./components/products/AddProduct";
import SignUp from "./components/singup-login/SignUp";
import Login from "./components/singup-login/Login";
import Cart from "./components/cart/Cart";
import { useState, useEffect } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

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
    <div className="App">
      <Navbar setShow={setShow} size={cartQuantity} />
      {show ? (
        <AllProducts handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;
