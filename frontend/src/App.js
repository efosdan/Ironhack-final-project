import "./App.css";
import Products from "./components/products/Products";
import Navbar from "./components/navBar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <h1>The best pasta in Europe</h1>

      <route>
        <Products />
      </route>
    </div>
  );
}

export default App;
