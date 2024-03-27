import React from "react";
import style from "./Invoices.module.css";
import logo from "../../images/image1.png";
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { user } from "../../Redux/User/UserSlice";
const Invoices = () => {
  const navigate = useNavigate();
  const { orders = [], name } = useSelector(user);
  const handleNavigateUser = (route) => {
    navigate(route);
  };
  let allProducts = [...orders].reverse();

  return (
    <section className={style.invoices_container}>
      <div className={style.invoices_section}>
        <div className={style.invoices_up}>
          <div className={style.invoices_nav_details}>
            <div className={style.invoices_nav_flex}>
              <span>
                <img src={logo} alt="" />
              </span>
              <span className={style.logo_text}>Musicart</span>
              <span>Home/ Invoices</span>
            </div>
            <div className={style.view_invoices_logo}>
              <MdShoppingCart size={23} /> View Cart 9
            </div>
          </div>
          <div
            onClick={() => handleNavigateUser("/")}
            className={style.invoices_nav}
          >
            <span>Back to home</span>
          </div>
        </div>
        <div className={style.invoices}>
          <span>My Invoices</span>
        </div>
        {allProducts?.length > 0 ? (
          <div className={style.invoices_box}>
            {allProducts?.map(({ paymentMethod, deliveryAddress, id }) => (
              <div className={style.invoices_sec_info}>
                <div className={style.flex_box}>
                  <span>
                    <FaFileInvoice />
                  </span>
                  <div>
                    <span className={style.user_name}>{name}</span>
                    <span className={style.delivery_info}>
                      {deliveryAddress}
                    </span>
                  </div>
                </div>
                <div className={style.view}>
                  <button
                    onClick={() => handleNavigateUser(`/order/detail/${id}`)}
                  >
                    View Invoice
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={style.empty}>
            <span>Your Invoice is empty!</span>
            <button onClick={() => handleNavigateUser("/")}>
              Go back to home
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Invoices;
