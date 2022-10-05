import "./App.css";
import Products from "./components/products/Products";
import Navbar from "./components/navBar/Navbar";
import { useState, useEffect } from "react";
import Cart from "./components/cart/Cart";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleClick = (product) => {
    if (cart.indexOf(product) !== -1) return;
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
        <Products handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;
