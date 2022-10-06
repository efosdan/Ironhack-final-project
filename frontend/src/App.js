import "./App.css";
import AllProducts from "./components/products/AllProducts";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./components/products/AddProduct";
import SignUp from "./components/singup-login/SignUp";
import Login from "./components/singup-login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/new" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
