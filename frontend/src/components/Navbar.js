import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { HiOutlineShoppingCart } from 'react-icons/hi'




const MenuItem = styled.div `
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
    `;

function Navbar({ setShow, size }) {
  return (
    <nav>
      <NavLink to="/">
        <button onClick={() => setShow(true)}>Home</button>
      </NavLink>

      <NavLink to="/signup">
        <button>Sign up</button>
      </NavLink>

      <NavLink to="/login">
        <button>Login</button>
      </NavLink>

      <NavLink to="/product/new">
        <button>Add Product</button>
      </NavLink>


      <NavLink to="/cart">
        <button onClick={() => setShow(false)}> <HiOutlineShoppingCart /></button>
      </NavLink>
      
    </nav>
  );
}

export default Navbar;
