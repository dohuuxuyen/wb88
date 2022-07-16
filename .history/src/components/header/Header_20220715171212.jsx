import React, { useRef } from "react";
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./header.css";

const Header = () => {
  const state = useSelector((state) => state.productReducer);
  const refMenu = useRef();
  // console.log(refMenu.current.className);

  const handleShowMenu = (refMenu) => {
    const menu = refMenu.current;
    menu.classList.toggle("active-menu");
  };

  const handleRemoveModel = (refMenu) => {
    const menu = refMenu.current;
    menu.classList.remove("active-menu");
  };
  return (
    <div className="container">
      <div className="header">
        <NavLink className="header-logo" to="/">
          WB88
        </NavLink>

        <div ref={refMenu} className="header-list_menu">
          <ul className="header-list ">
            <li className="header-item">
              <NavLink className="header-item_link" aria-current="page" to="/">
                Trang Chủ
              </NavLink>
            </li>
            <li className="header-item">
              <NavLink className="header-item_link" to="/products">
                Sản Phẩm
              </NavLink>
            </li>
            <li className="header-item">
              <NavLink className="header-item_link" to="/about">
                Về Chúng Tôi
              </NavLink>
            </li>
            <li className="header-item">
              <NavLink className="header-item_link" to="/contact">
                Liên Hệ
              </NavLink>
            </li>
          </ul>
          <div
            onClick={() => handleRemoveModel(refMenu)}
            className="header-menu_model"
          ></div>
          <div
            onClick={() => handleRemoveModel(refMenu)}
            className="header-menu_delete"
          >
            X
          </div>
        </div>
        <div className="header-info">
          <NavLink to="/login" className="header-info_login">
            <FaSignInAlt />
            <p>Login</p>
          </NavLink>
          <NavLink to="/register" className="header-info_register">
            <FaUserPlus />
            <p>Register</p>
          </NavLink>
          <NavLink to="/cart" className="header-info_cart">
            <FaShoppingCart />
            <p>Cart ({state.length})</p>
          </NavLink>
        </div>
        <div
          onClick={() => handleShowMenu(refMenu)}
          className="mobile-header_menu"
        >
          <AiOutlineMenu className="mobile-menu_icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
