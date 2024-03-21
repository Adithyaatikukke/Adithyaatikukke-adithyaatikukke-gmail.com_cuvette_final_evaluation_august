import React from "react";
import style from "./header.module.css";
import { FiPhoneCall } from "react-icons/fi";
const Header = () => {
  return (
    <section className={style.header_container}>
      <div className={style.header_section}>
        <div className={style.header_1}>
          <span>
            <FiPhoneCall size={23} />
          </span>
          <span>912121131313</span>
        </div>

        <div className={style.header_2}>
          <span>Get 50% off on selected items</span>
          <span className={style.line}></span>
          <span>Shop Now</span>
        </div>
        <div className={style.header_3}>
          <span>Login</span>
          <span className={style.line}></span>
          <span>SignUp</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
