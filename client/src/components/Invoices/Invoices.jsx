import React from "react";
import style from "./Invoices.module.css";
import logo from "../../images/image1.png";
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";
const Invoices = () => {
  const navigate = useNavigate();
  const handleNavigateUser = (route) => {
    navigate(route);
  };
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
        <div className={style.invoices_box}>
          <div className={style.invoices_sec_info}>
            <div className={style.flex_box}>
              <span>
                <FaFileInvoice />
              </span>
              <div>
                <span className={style.user_name}>Akash Patel</span>
                <span className={style.delivery_info}>
                  104 kk hh nagar, Lucknow Uttar Pradesh 226025
                </span>
              </div>
            </div>
            <div className={style.view}>
              <button>View Invoice</button>
            </div>
          </div>
          <div className={style.invoices_sec_info}>
            <div className={style.flex_box}>
              <span>
                <FaFileInvoice />
              </span>
              <div>
                <span className={style.user_name}>Akash Patel</span>
                <span className={style.delivery_info}>
                  104 kk hh nagar, Lucknow Uttar Pradesh 226025
                </span>
              </div>
            </div>
            <div className={style.view}>
              <button>View Invoice</button>
            </div>
          </div>
          <div className={style.invoices_sec_info}>
            <div className={style.flex_box}>
              <span>
                <FaFileInvoice />
              </span>
              <div>
                <span className={style.user_name}>Akash Patel</span>
                <span className={style.delivery_info}>
                  104 kk hh nagar, Lucknow Uttar Pradesh 226025
                </span>
              </div>
            </div>
            <div className={style.view}>
              <button>View Invoice</button>
            </div>
          </div>
          <div className={style.invoices_sec_info}>
            <div className={style.flex_box}>
              <span>
                <FaFileInvoice />
              </span>
              <div>
                <span className={style.user_name}>Akash Patel</span>
                <span className={style.delivery_info}>
                  104 kk hh nagar, Lucknow Uttar Pradesh 226025
                </span>
              </div>
            </div>
            <div className={style.view}>
              <button>View Invoice</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invoices;
