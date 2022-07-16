import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import { Routes, Route } from "react-router-dom";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
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
