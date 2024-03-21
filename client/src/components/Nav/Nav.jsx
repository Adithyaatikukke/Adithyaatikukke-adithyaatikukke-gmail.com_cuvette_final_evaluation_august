import React from "react";
import style from "./Nav.module.css";
import { FaRegUser } from "react-icons/fa6";
import { TbShoppingCart } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
const Nav = () => {
  return (
    <section className={style.nav_container}>
      <div className={style.nav_section}>
        <div className={style.nav_item}>
          <span className={style.line}></span>
          <span className={style.nav_icon}>
            <IoHomeOutline />
          </span>
          <span className={style.nav_text}>Home</span>
        </div>
        <div className={style.nav_item}>
          <span className={style.line}></span>
          <span className={style.nav_icon}>
            <TbShoppingCart />
          </span>
          <span className={style.cart}>5</span>
          <span className={style.nav_text}>Home</span>
        </div>
        <div className={style.nav_item}>
          <span className={style.line}></span>
          <span className={style.nav_icon}>
            <FaRegUser />
          </span>
          <span className={style.nav_text}>Home</span>
        </div>
      </div>
    </section>
  );
};

export default Nav;
