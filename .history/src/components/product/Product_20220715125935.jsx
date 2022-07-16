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
    if (product === 1) {
      dispatch(addToCart(product));
      alert("Bạn đã thêm sản phẩm vào giỏ hàng thành công !");
    } else {
      alert(
        "Sản phẩm này đã được thêm vào giỏ hàng rồi, vui lòng chọn sản phẩm khác"
      );
    }
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
    return <div className="loading1">...Loading</div>;
  };

  const ShowProduct = () => {
    return (
      <div className="product">
        <div className="product-img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <div className="product-category">{product.category}</div>
          <div className="product-title">{product.title}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-desc">{product.description}</div>
          <div className="product-button">
            <button
              onClick={() => handleAddProduct(product)}
              className="product-btn btn"
            >
              Add to Cart
            </button>
            <NavLink to="/cart" className="product-btn">
              Go to Cart
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return <div>{loading ? <Loading /> : <ShowProduct />}</div>;
};

export default Product;
