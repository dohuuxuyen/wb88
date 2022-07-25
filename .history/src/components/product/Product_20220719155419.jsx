import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addToCart } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./product.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const handleAddProduct = (product) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return <div className="loading1">...Đang tải</div>;
  };

  const ShowProduct = () => {
    return (
      <div className="product">
        <div className="product-img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="distance"></div>
        <div className="product-info">
          <div className="product-category">{product.category}</div>
          <div className="product-title">{product.title}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-desc">{product.description}</div>
          <div className="product-button">
            <button
              onClick={() => handleAddProduct(product)}
              className="product-btn"
            >
              Thêm vào giỏ hàng
            </button>
            <button className="product-btn">
              <NavLink className="btn" to="/cart">
                Đi đến giỏ hàng
              </NavLink>
            </button>
            <button className="product-btn">
              <NavLink className="btn" to="/cart">
                Sản phẩm khác
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return <div>{loading ? <Loading /> : <ShowProduct />}</div>;
};

export default Product;