import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <button>Home</button>
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
    </nav>
  );
}

export default Navbar;
