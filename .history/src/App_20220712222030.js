import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import { Routes, Route } from "react-router-dom";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
