import React from "react";
import style from "./CheckOut.module.css";
import logo from "../../images/image1.png";
import img from "../../images/image 3.png";
const CheckOut = () => {
  return (
    <section className={style.checkout_container}>
      <div className={style.checkout_section}>
        <div className={style.checkout_nav_section}>
          <div className={style.checkout_nav_up}>
            <span>
              <img src={logo} alt="" />
            </span>
            <span className={style.checkout_nav_text}>Musicart</span>
            <span>Home/ Checkout</span>
          </div>
          <div className={style.checkout_nav_down}>
            <button>Back to cart</button>
          </div>
        </div>
        <div className={style.checkout}>
          <span>Checkout</span>
        </div>
        <div className={style.checkout_detail_box}>
          <div className={style.checkout_detail_up}>
            <div className={style.delivery_info_container}>
              <div className={style.sec}>
                <span className={style.red_text}>1. Delivery address</span>
                <div className={style.address_box}>
                  <span className={style.user_name}>Rishiksh</span>

                  <textarea
                    value={" 104 kk hh nagar, Lucknow Uttar Pradesh 226025"}
                    type="text"
                  />
                </div>
              </div>
              <div className={style.sec}>
                <span className={style.red_text}>2.Payment method</span>
                <select>
                  <option value="">Cash On Delivery</option>
                </select>
              </div>
              <div className={style.sec}>
                <span className={style.red_text}>
                  3.Review items and delivery
                </span>
                <div className={style.product_list_info}>
                  <div className={style.product_list_images}>
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                  </div>
                  <div className={style.product_list_description}>
                    <span className={style.product_title}>Sony WH-CH720N</span>
                    <span className={style.product_colour}>Colour : Black</span>
                    <span>
                      Estimated delivery : Monday — FREE Standard Delivery
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.checkout_detail_down}>
                <div>
                  <button>Place your order</button>
                  <div className={style.product_info}>
                    <span className={style.price}>Order Total : ₹3545.00</span>{" "}
                    <span className={style.info}>
                      Order Total : ₹3545.00 By placing your order, you agree to
                      Musicart privacy notice and conditions of use.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.order_summary_container}>
              <div className={style.order_summary_section}>
                <div className={style.place_order}>
                  <button>Place your order</button>
                  <span className={style.info}>
                    By placing your order, you agree to Musicart privacy notice
                    and conditions of use.
                  </span>
                </div>
                <div className={style.product_summary}>
                  <span>Order Summary</span>
                  <div className={style.product_price_box}>
                    <div className={style.info_flex}>
                      <span>Items : </span>
                      <span>₹3500.00 </span>
                    </div>
                    <div className={style.info_flex}>
                      <span>Delivery : </span>
                      <span>₹45.00 </span>
                    </div>
                  </div>
                </div>
                <div className={style.total}>
                  <span>Order Total : </span>
                  <span>₹3545.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
