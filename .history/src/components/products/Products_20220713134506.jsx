import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import "./products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="loading-list">
        <div className="loading-item">
          <Skeleton height={350} count={2} />
        </div>
        <div className="loading-item">
          <Skeleton height={350} />
        </div>
        <div className="loading-item">
          <Skeleton height={350} />
        </div>
        <div className="loading-item">
          <Skeleton height={350} />
        </div>
      </div>
    );
  };

  const FilterProduct = (e) => {
    const updateListFilter = data.filter((x) => x.category === e);
    setFilter(updateListFilter);
  };

  const ShowProducts = () => {
    return (
      <div className="products-list">
        <div onClick={() => setFilter(data)} className="products-item">
          All
        </div>
        <div
          onClick={() => FilterProduct("men's clothing")}
          className="products-item"
        >
          Men's Clothing
        </div>
        <div
          onClick={() => FilterProduct("women's clothing")}
          className="products-item"
        >
          Women's Clothing
        </div>
        <div
          onClick={() => FilterProduct("jewelery")}
          className="products-item"
        >
          Jewelry
        </div>
        <div
          onClick={() => FilterProduct("electronics")}
          className="products-item"
        >
          Electronic
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="products">
        <h1 className="products-title">Latest Products</h1>
        <ShowProducts />
        <div className="products-menu">{loading ? <Loading /> : ""}</div>
      </div>
      <div className="card">
        {filter.map((product, index) => (
          <div key={index} className="card-item">
            <img className="card-img" src={product.image} alt="" />
            <div className="card-title">{product.title}</div>
            <div className="card-price">${product.price}</div>
            <NavLink to={`/products/${product.id}`} className="card-button">
              Buy Now
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
