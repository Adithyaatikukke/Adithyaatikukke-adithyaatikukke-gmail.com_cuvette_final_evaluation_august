import React, { useEffect } from "react";
import style from "./Nav.module.css";
import { FaFileInvoice, FaRegUser } from "react-icons/fa6";
import { TbShoppingCart } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  currentPage,
  logOutUser,
  setNewPage,
  user,
} from "../../Redux/User/UserSlice";
const Nav = () => {
  const { name, cart } = useSelector(user);
  const currPage = useSelector(currentPage);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleNavigateUser = (route) => {
    if (name) {
      navigate(route);
    } else {
      navigate("/sign-in");
    }
  };
  const handleLogoutOrLoginUser = (name) => {
    if (name === "Logout") {
      dispatch(logOutUser());
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <section className={style.nav_container}>
      <div className={style.nav_section}>
        <div onClick={() => handleNavigateUser("/")} className={style.nav_item}>
          <span
            className={`${
              currPage === "Home" ? style.line_on : style.line_off
            }`}
          ></span>
          <span className={style.nav_icon}>
            <IoHomeOutline />
          </span>
          <span className={style.nav_text}>Home</span>
        </div>
        <div
          onClick={() => handleNavigateUser("/invoice")}
          className={style.nav_item}
        >
          <span
            className={`${
              currPage === "Invoice" ? style.line_on : style.line_off
            }`}
          ></span>
          <span className={style.nav_icon}>
            <FaFileInvoice />
          </span>
          <span className={style.nav_text}>Invoices</span>
        </div>

        <div
          onClick={() => handleNavigateUser("/cart")}
          className={style.nav_item}
        >
          <span
            c
            className={`${
              currPage === "Cart" ? style.line_on : style.line_off
            }`}
          ></span>
          <span className={style.nav_icon}>
            <TbShoppingCart />
          </span>
          {cart && <span className={style.cart}>{cart?.length}</span>}
          <span className={style.nav_text}>Cart</span>
        </div>
        <div
          onClick={() => handleLogoutOrLoginUser(name ? "Logout" : "Login")}
          className={style.nav_item}
        >
          <span className={style.line}></span>
          <span className={style.nav_icon}>
            <FaRegUser />
          </span>
          <span className={style.nav_text}>{name ? "Logout" : "Login"}</span>
        </div>
      </div>
    </section>
  );
};

export default Nav;
