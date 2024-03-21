import React from "react";
import style from "./Cart.module.css";
import logo from "../../images/image1.png";
import { IoBagOutline, IoCafeOutline } from "react-icons/io5";
import pro from "../../images/image 3.png";
import { GoArrowLeft } from "react-icons/go";
import { MdShoppingCart } from "react-icons/md";
import BackArrow from "../BackArrow/BackArrow";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const handleNavigateUser = (route) => {
    navigate(route);
  };

  return (
    <>
      <section className={style.cart_container}>
        <div className={style.cart_section}>
          <div className={style.cart_up}>
            <div className={style.cart_nav_details}>
              <div className={style.cart_nav_flex}>
                <span>
                  <img src={logo} alt="" />
                </span>
                <span className={style.logo_text}>Musicart</span>
                <span>Home/ View Cart</span>
              </div>
              <div className={style.view_cart_logo}>
                <MdShoppingCart size={23} /> View Cart 9
              </div>
            </div>
            <div
              onClick={() => handleNavigateUser("/")}
              className={style.cart_nav}
            >
              <span>Back to products</span>
            </div>
          </div>
          <div className={style.cart_down}>
            <div className={style.cart_logo}>
              <span>
                <IoBagOutline size={35} />
                My Cart
              </span>
            </div>
            <div className={style.cart_item_section}>
              <div className={style.cart_item_up}>
                <div className={style.cart_detail_box}>
                  {[1, 2, 3, 4, 5].map(() => (
                    <div className={style.cart_box}>
                      <div>
                        <img src={pro} alt="" />
                      </div>
                      <div className={style.cart_item_d}>
                        <span className={style.cart_item_title_text}>
                          Sony WH-CH720N
                        </span>
                        <span className={style.cart_item_colour}>
                          Colour : Black
                        </span>
                        <span className={style.cart_item_stock}>In Stock</span>
                      </div>
                      <div className={style.cart_item_d}>
                        <span>Price</span>
                        <span>₹3500</span>
                      </div>
                      <div className={style.cart_item_d}>
                        <span>Quantity</span>
                        <select value={1}>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                        </select>
                      </div>
                      <div className={style.cart_item_d}>
                        <span>Total</span>
                        <span>₹3500</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={style.price_detail_container}>
                  <div className={style.price_detail_section}>
                    <div className={style.price_detail_box_up}>
                      <span>PRICE DETAILS</span>
                      <div className={style.price_detail_sec}>
                        <span>Total MRP</span>
                        <span>₹3500</span>
                      </div>
                      <div className={style.price_detail_sec}>
                        <span>Discount on MRP</span>
                        <span>₹0</span>
                      </div>
                      <div className={style.price_detail_sec}>
                        <span>Convenience Fee</span>
                        <span>₹45</span>
                      </div>
                    </div>
                    <div className={style.price_detail_box_down}>
                      <div className={style.price_detail_total}>
                        <span>Total Amount</span>
                        <span>₹3545</span>
                      </div>
                      <div className={style.order_btn}>
                        <button>PLACE ORDER</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.cart_item_down}>
                <div>
                  <span>1 Item</span>
                  <span>₹3500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.cart_mobile_container}>
        <span>
          <BackArrow route={"/"} />
        </span>
        <div className={style.cart_mobile_section}>
          <div className={style.cart_mobile_main_box}>
            <div className={style.cart_mobile_section_up}>
              <div className={style.item_img}>
                <img src={pro} alt="" />
              </div>
              <div className={style.cart_mobile_description}>
                <div className={style.details}>
                  <span className={style.cart_item_title}>Sony WH-CH720N</span>
                  <span className={style.cart_item_price}>₹3500</span>
                  <span>Clour : Black</span>
                  <span>In Stock</span>
                  <span>Convenience Fee ₹45</span>
                </div>
              </div>
            </div>
            <span className={style.cart_item_line}></span>
            <div className={style.cart_mobile_section_up}>
              <div className={style.item_img}>
                <img src={pro} alt="" />
              </div>
              <div className={style.cart_mobile_description}>
                <div className={style.details}>
                  <span className={style.cart_item_title}>Sony WH-CH720N</span>
                  <span className={style.cart_item_price}>₹3500</span>
                  <span>Clour : Black</span>
                  <span>In Stock</span>
                  <span>Convenience Fee ₹45</span>
                </div>
              </div>
            </div>
            <span className={style.cart_item_line}></span>{" "}
            <div className={style.cart_mobile_section_up}>
              <div className={style.item_img}>
                <img src={pro} alt="" />
              </div>
              <div className={style.cart_mobile_description}>
                <div className={style.details}>
                  <span className={style.cart_item_title}>Sony WH-CH720N</span>
                  <span className={style.cart_item_price}>₹3500</span>
                  <span>Clour : Black</span>
                  <span>In Stock</span>
                  <span>Convenience Fee ₹45</span>
                </div>
              </div>
            </div>
            <span className={style.cart_item_line}></span>
            <div className={style.details_total}>
              <span>Total</span>
              <span>₹3545</span>
            </div>
          </div>
          <div className={style.cart_mobile_section_down}>
            <span className={style.line}></span>
            <span className={style.total_amount}>
              <span>Total Amount </span>
              <span className={style.total_price}>₹3545</span>
            </span>
            <button>PLACE ORDER</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
