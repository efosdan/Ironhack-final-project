import "./App.css";
import Products from "./components/products/Products";
import Navbar from "./components/navBar/Navbar";
import { useState } from "react";
import Cart from "./components/cart/Cart"





function App() {
  
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  
  const handleClick = (product) => {
    if (cart.indexOf(product) !== -1) return;
       setCart([...cart, product]);  
  };

  const handleChange = (product, d) => {
    const ind = cart.indexOf(product);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0)arr[ind].amount = 1;
    setCart([...arr]);
  };
  


  return (
    <div className="App">
      <Navbar setShow={setShow} size={cart.length} />
      {show ? ( <Products handleClick={handleClick} /> 
      ): (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
         )}      
    </div>
  );
};

export default App;
