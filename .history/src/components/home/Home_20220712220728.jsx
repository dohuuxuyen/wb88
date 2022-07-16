import React from "react";
import About from "../about/About";
import Products from "../products/Products";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-img">
          <div className="home-wrapper">
            <div className="home-wrapper_title">NEW SEASON ARRIVALS</div>
            <p className="home-wrapper_desc">CHECK OUT ALL THE TREND</p>
          </div>
        </div>
      </div>
      <Products />
      <About />
    </>
  );
};

export default Home;
