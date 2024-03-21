import React, { useState } from "react";
import style from "./Home.module.css";
import logo from "../../images/image1.png";
import img from "../../images/image2.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoGrid } from "react-icons/io5";
import { LuLayoutList } from "react-icons/lu";
import pro from "../../images/image 3.png";
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getALLFilters, getSortByFilter } from "../../config/filters";

const Home = () => {
  const [layout, setLayout] = useState("grid");
  const [showProfile, setShowProfile] = useState(false);
  const filters = getALLFilters();
  const sort = getSortByFilter();
  const navigate = useNavigate();
  const handleNavigateUser = (route) => {
    navigate(route);
  };

  return (
    <section className={style.home_container}>
      <div className={style.home_section}>
        <div className={style.home_section_up}>
          <div className={style.section_up_box}>
            <div className={style.logo_container}>
              <div className={style.logo_up}>
                <img src={logo} alt="" />
                <span>Musicart</span>
              </div>
              <span className={style.logo_down}>Home</span>
              <span className={style.logo_down}>Invoice</span>
            </div>
            <div className={style.user_options}>
              <span onClick={() => handleNavigateUser("/cart")}>
                <MdShoppingCart size={23} /> View cart 0
              </span>
              <div className={style.user_profile}>
                <span onClick={() => setShowProfile(!showProfile)}>DR</span>
                {showProfile && (
                  <div className={style.profile}>
                    <span>Dewank Rastogi </span>
                    <span className={style.line}></span>
                    <span>Logout</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={style.banner_container}>
            <div className={style.banner_box}>
              <div className={style.banner_text}>
                <span>
                  Grab upto 50% off <br /> on Selected headphones
                </span>
                <span style={{ color: "white" }} className={style.buy_now}>
                  Buy now
                </span>
              </div>
              <div className={style.banner_img_container}>
                <img className={style.banner} src={img} alt="" />
              </div>
            </div>
          </div>
          <div className={style.input}>
            <input type="text" />
            <div>
              <IoSearchOutline size={23} color="#666666" />
              <span>Search by Product Name</span>
            </div>
          </div>
          <div className={style.filter_container}>
            <div className={style.filter_box}>
              <div className={style.layout}>
                <IoGrid onClick={() => setLayout("grid")} />
                <LuLayoutList onClick={() => setLayout("flex")} />
              </div>
              <div className={style.filter}>
                {filters?.map(({ name, types }, i) => {
                  return (
                    <select className={style.select_section} key={i}>
                      <option>{name}</option>;
                      {types?.map((type, i) => (
                        <option value={type} key={i}>
                          {type}
                        </option>
                      ))}
                    </select>
                  );
                })}
              </div>
            </div>
            <div className={style.sort}>
              <select className={style.select_section}>
                <option value={sort.name}>{sort.name}</option>
                {sort.types?.map((type, i) => (
                  <option key={i}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {layout === "grid" ? (
          <div className={style.home_section_down}>
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map(() => {
              return (
                <div className={style.product_container}>
                  <div className={style.img_container}>
                    <div className={style.img}>
                      <img src={pro} alt="" />
                    </div>
                  </div>
                  <div className={style.product_description}>
                    <span className={style.title}>Sony WH-CH720N</span>
                    <span className={style.price}>Price - ₹ 3,500</span>
                    <span className={style.description}>
                      Black | Over-ear headphone
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <div className={style.home_section_down_flex}>
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ].map(() => {
                return (
                  <div className={style.product_container_flex}>
                    <div className={style.img_container_flex}>
                      <div className={style.img_flex}>
                        <img src={pro} alt="" />
                      </div>
                    </div>
                    <div className={style.product_description_flex}>
                      <span className={style.title_flex}>Sony WH-CH720N</span>
                      <span className={style.price_flex}>Price - ₹ 3,500</span>
                      <span className={style.colour_flex}>
                        Black | Over-ear headphone
                      </span>
                      <span className={style.description_flex}>
                        boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback,
                        40mm Drivers & ASAP Charge Bluetooth Headset (Stellar
                        Black, On the Ear)
                      </span>
                      <button className={style.detail_btn_flex}>Details</button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={style.home_section_down_flex}>
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ].map(() => {
                return (
                  <div className={style.product_container_flex_mobile}>
                    <div className={style.img_container_flex}>
                      <div className={style.img_flex}>
                        <img src={pro} alt="" />
                      </div>
                    </div>
                    <div className={style.product_description_flex}>
                      <span className={style.title_flex}>Sony WH-CH720N</span>
                      <span className={style.price_flex}>Price - ₹ 3,500</span>
                      <span className={style.colour_flex}>
                        Black | Over-ear headphone
                      </span>
                      <span className={style.description_flex}>
                        boAt Rockerz 551 ANC with Hybr...
                      </span>
                      <button className={style.detail_btn_flex}>Details</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
