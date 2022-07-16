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
                <th style={{ width: "150px" }}>Image</th>
                <th style={{ width: "200px" }}>Product</th>
                <th style={{ width: "100px" }}>Price</th>
                <th style={{ width: "100px" }}>Quantity</th>
                <th style={{ width: "100px" }}>Total Price</th>
                <th style={{ width: "200px" }}>Remove</th>
              </tr>
              {state.map((cartItem, index) => {
                total += cartItem.qty * cartItem.price;
                price = cartItem.qty * cartItem.price;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={cartItem.image} alt={cartItem.title} />
                    </td>
                    <td>{cartItem.title}</td>
                    <td>$ {cartItem.price}</td>
                    <td>
                      <div className="cart-quantity">
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
                    </td>
                    <td>$ {price.toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => handleRemove(cartItem)}
                        className="cart-btn_remove"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </thead>
          </table>
          <div className="cart-total">
            <div className="total">Total: $ {total.toFixed(2)}</div>
            <button className="check-out">Check Out</button>
          </div>
        </div>
      )) || <div className="cart-empty">Chưa có sản phẩm</div>}
    </div>
  );
};

export default Cart;
