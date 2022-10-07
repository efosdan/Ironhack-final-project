import "./App.css";
import AllProducts from "./components/products/AllProducts";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./components/products/AddProduct";
import SignUp from "./components/singup-login/SignUp";
import Login from "./components/singup-login/Login";
import Cart from "./components/cart/Cart";
import { useState, useEffect } from "react";
import Main from "./components/Main";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  return (
    <div className="App">
      <Navbar setShow={setShow} size={cartQuantity} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              show={show}
              setShow={setShow}
              setCartQuantity={setCartQuantity}
              cart={cart}
              setCart={setCart}
            />
          }
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
