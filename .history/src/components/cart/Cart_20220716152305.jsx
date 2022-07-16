import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteToCart,
  qtyDiscount,
  qtyIncrease,
} from "../../redux/actions/actions";
import "./cart.css";

const Cart = () => {
  const state = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  var total = 0;
  var price = 0;

  const handleBtnDiscount = (cartItem) => {
    dispatch(qtyDiscount(cartItem));
  };

  const handleBtnIncrease = (cartItem) => {
    dispatch(qtyIncrease(cartItem));
  };

  const handleRemove = (cartItem) => {
    dispatch(deleteToCart(cartItem));
  };

  return (
    <div>
      {(state.length !== 0 && (
        <div className="cart-block">
          <table className="table">
            <thead className="th">
              <tr>
                <th style={{ width: "30px" }}>#</th>
                <th style={{ width: "150px" }}>Hình Ảnh</th>
                <th style={{ width: "200px" }}>Sản Phẩm</th>
                <th style={{ width: "100px" }}>Giá</th>
                <th style={{ width: "100px" }}>Số Lượng</th>
                <th style={{ width: "100px" }}>Tổng Giá</th>
                <th style={{ width: "200px" }}>Xoá Sản Phẩm</th>
              </tr>
              {state.map((cartItem, index) => {
                total += cartItem.qty * cartItem.price;
                price = cartItem.qty * cartItem.price;
                return (
                  <tr key={index}>
                    <td className="cart-index">{index + 1}</td>
                    <td className="cart-img">
                      <img src={cartItem.image} alt={cartItem.title} />
                    </td>
                    <td>{cartItem.title}</td>
                    <td>$ {cartItem.price}</td>
                    <td>
                      <td className="cart-quantity">
                        <button
                          onClick={() => handleBtnDiscount(cartItem)}
                          className="cart-btn"
                        >
                          -
                        </button>
                        <p className="cart-qty">{cartItem.qty}</p>
                        <button
                          onClick={() => handleBtnIncrease(cartItem)}
                          className="cart-btn"
                        >
                          +
                        </button>
                      </td>
                    </td>
                    <td className="cart-price">$ {price.toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => handleRemove(cartItem)}
                        className="cart-btn_remove"
                      >
                        Xoá
                      </button>
                    </td>
                  </tr>
                );
              })}
            </thead>
          </table>
          {/* <div className="cart-mobile_wrapper">
            {state.map((cartItem, index) => {
              total2 += cartItem.qty * cartItem.price;
              price2 = cartItem.qty * cartItem.price;
              return (
                <>
                  <div className="cart-mobile">
                    <div className="cart-mobile_left">
                      <img
                        className="cart-mobile_img"
                        src={cartItem.image}
                        alt={cartItem.title}
                      />
                    </div>
                    <div className="cart-mobile_right">
                      <div className="cart-mobile_title">{cartItem.title}</div>
                      <div className="cart-mobile_price">${cartItem.price}</div>
                      <div className="cart-mobile_quantity">
                        <button
                          onClick={() => handleBtnDiscount(cartItem)}
                          className="cart-btn"
                        >
                          -
                        </button>
                        <p className="cart-qty">{cartItem.qty}</p>
                        <button
                          onClick={() => handleBtnIncrease(cartItem)}
                          className="cart-btn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="distance1"></div>
                </>
              );
            })}
          </div> */}
          <div className="cart-total">
            <div className="total">Tổng Thanh Toán: $ {total.toFixed(2)}</div>
            <button className="check-out">Thanh Toán</button>
          </div>
        </div>
      )) || <div className="cart-empty">Chưa có sản phẩm</div>}
    </div>
  );
};

export default Cart;
