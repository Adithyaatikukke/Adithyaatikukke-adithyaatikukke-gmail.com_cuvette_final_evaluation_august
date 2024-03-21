import React from "react";
import style from "./ProductDetail.module.css";
import logo from "../../images/image1.png";
import img from "../../images/image 3.png";
import { IoIosStar } from "react-icons/io";
import {
  MdOutlineStarOutline,
  MdShoppinCart,
  MdShoppingCart,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
const ProductDetail = () => {
  const navigate = useNavigate();
  const handleNavigateUser = (route) => {
    navigate(route);
  };

  return (
    <section className={style.product_detail_container}>
      <div className={style.product_detail_section}>
        <div className={style.product_detail_up}>
          <div className={style.product_detail_nav_details}>
            <div className={style.product_detail_nav_flex}>
              <span>
                <img src={logo} alt="" />
              </span>
              <span className={style.logo_text}>Musiproduct_detail</span>
              <span>Home/ Sony WH-CH720N</span>
            </div>
            <div className={style.view_product_detail_logo}>
              <MdShoppingCart size={23} /> View Cart 9
            </div>
          </div>
          <div
            onClick={() => handleNavigateUser("/")}
            className={style.product_detail_nav}
          >
            <span>Back to products</span>
          </div>
        </div>
        <div className={style.product_detail_box}>
          <span>
            Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation
            Headphones with Mic, up to 50 Hours Playtime, Multi-Point
            Connection, App Support, AUX & Voice Assistant Support for Mobile
            Phones (Black)
          </span>
          <div className={style.product_des_section}>
            <div className={style.main_img}>
              <div className={style.main_img_sec}>
                <img src={img} alt="" />
              </div>
              <div className={style.subimgaes}>
                <img src={img} alt="" /> <img src={img} alt="" />{" "}
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <div className={style.product_more_detail}>
                <span className={style.product_title}>Sony WH-CH720N</span>
                <div className={style.rating}>
                  <span>
                    <IoIosStar color="#FFD600" />
                    <IoIosStar color="#FFD600" />
                    <IoIosStar color="#FFD600" />
                    <IoIosStar color="#FFD600" />
                    <IoIosStar color="#FFD600" />
                  </span>
                  <span className={style.rating_text}>
                    (50 Customer reviews)
                  </span>
                </div>
                <span className={style.product_price}>Price - ₹ 3,500</span>
                <span>Black | Over-ear headphone</span>
                <span>
                  About this item Sony’s lightest Wireless Noise-cancelling
                  headband ever Up to 50-hour battery life with quick charging
                  (3 min charge for up to 1 hour of playback) Multi-Point
                  Connection helps to pair with two Bluetooth devices at the
                  same time Take noise cancelling to the next level with Sony’s
                  Integrated Processor V1,so you can fully immerse yourself in
                  the music Super comfortable and lightweight design ( 192 Grams
                  ) High sound quality and well-balanced sound tuning
                </span>
                <span>Available - In stock</span>
                <span>Brand - Sony</span>
              </div>
              <div className={style.buttons_section}>
                <button className={style.btn_addcart}>Add to cart</button>
                <button className={style.btn_buy}>Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
