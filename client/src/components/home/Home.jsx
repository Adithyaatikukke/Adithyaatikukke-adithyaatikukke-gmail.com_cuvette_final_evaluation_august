import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import logo from "../../images/image1.png";
import img from "../../images/image2.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoGrid } from "react-icons/io5";
import { LuLayoutList } from "react-icons/lu";

import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getALLFilters, getSortByFilter } from "../../utils/filters";
import { useSelector, useDispatch } from "react-redux";
import Feedback from "../Feedback/Feedback";
import {
  fetching,
  getAllProductByHeadTypeFilterAsync,
  getAllProductsByAscFilterAsync,
  getAllProductsByColourFilterAsync,
  getAllProductsByCompanyFilterAsync,
  getAllProductsByDescFilterAsync,
  getAllProductsByKeywordFilterAsync,
  getAllProductsByPriceFilterAsync,
  products,
  productToggle,
} from "../../Redux/Product/ProductSlice";
import { getUserNameIntitials } from "../../utils/getUserNameIntitials";
import {
  addToCartAsync,
  addToCartSucc,
  clearAddToCartSucc,
  logOutUser,
  user,
  userCartToggle,
  userInfoToggle,
  userToggle,
} from "../../Redux/User/UserSlice";
import { HashLoader } from "react-spinners";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const [layout, setLayout] = useState("grid");
  const [showProfile, setShowProfile] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [showSearchPlaceHoder, setShowSearchPlaceHolder] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [loader, setloader] = useState(false);
  const filters = getALLFilters();
  const sort = getSortByFilter();
  const navigate = useNavigate();
  const toggle = useSelector(productToggle);
  const toggle1 = useSelector(userToggle);
  const toggle2 = useSelector(userCartToggle);
  const allListedProducts = useSelector(products);
  const userInfo = useSelector(user);
  const productFetching = useSelector(fetching);
  const productAddedTocCartSuccesfullly = useSelector(addToCartSucc);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(logOutUser());
  };

  const handleSetSerachInput = (val) => {
    setloader(true);
    dispatch(getAllProductsByKeywordFilterAsync(val));
    setShowSearchPlaceHolder(false);
    setSearchInput(val);
  };
  const handleNavigateUser = (route) => {
    navigate(route);
  };
  const handleNavigateUserToDetailPage = (id) => {
    navigate(`product/detail/${id}`);
  };
  const handleFilterProductsByType = (name, val) => {
    setloader(true);
    if (name === "Headphone type") {
      dispatch(getAllProductByHeadTypeFilterAsync(val));
    } else if (name === "Company") {
      dispatch(getAllProductsByCompanyFilterAsync(val));
    } else if (name === "Colour") {
      dispatch(getAllProductsByColourFilterAsync(val));
    } else if (name === "Sort by : Featured") {
      if (val === "Name : (A-Z)") {
        dispatch(getAllProductsByAscFilterAsync());
      } else if (val === "Name : (Z-A)") {
        dispatch(getAllProductsByDescFilterAsync());
      }
    } else {
      {
        if (val === "₹0 - ₹1,000") {
          dispatch(
            getAllProductsByPriceFilterAsync({ minPrice: 0, maxPrice: 1000 })
          );
        } else if (val === "₹1,000 - ₹2,000") {
          dispatch(
            getAllProductsByPriceFilterAsync({ minPrice: 1000, maxPrice: 2000 })
          );
        } else if (val === "₹2,000 - ₹3,000") {
          dispatch(
            getAllProductsByPriceFilterAsync({ minPrice: 2000, maxPrice: 3000 })
          );
        } else if (val === "₹3,000 - ₹4,000") {
          dispatch(
            getAllProductsByPriceFilterAsync({ minPrice: 3000, maxPrice: 4000 })
          );
        } else if (val === "₹4,000 - ₹10,000") {
          dispatch(
            getAllProductsByPriceFilterAsync({
              minPrice: 4000,
              maxPrice: 10000,
            })
          );
        } else {
          dispatch(
            getAllProductsByPriceFilterAsync({
              minPrice: 10000,
              maxPrice: 20000,
            })
          );
        }
      }
    }
  };
  const handleAddToCart = (productId) => {
    const alreadyInCart = userInfo?.cart?.find(({ id }) => id === productId);
    if (!alreadyInCart) {
      dispatch(addToCartAsync({ productId }));
    } else {
      toast.error("Product is already in cart!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleResetAddToCartSucc = () => {
    dispatch(clearAddToCartSucc());
  };

  useEffect(() => {
    if (userInfo?.name) {
      setName(getUserNameIntitials(userInfo?.name));
    }
  }, [toggle1]);

  useEffect(() => {
    if (productAddedTocCartSuccesfullly) {
      toast.success("Product added to cart succesfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      handleResetAddToCartSucc();
    }
  }, [toggle2]);

  useEffect(() => {
    if (allListedProducts[0]?._id) {
      setAllProducts(allListedProducts);
    }
    if (!productFetching) {
      setloader(false);
    }
  }, [toggle]);

  return (
    <section className={style.home_container}>
      <ToastContainer />
      {userInfo?.name && <Feedback />}
      <div className={style.home_section}>
        <div className={style.home_section_up}>
          <div className={style.section_up_box}>
            <div className={style.logo_container}>
              <div className={style.logo_up}>
                <img src={logo} alt="Musicart" />
                <span>Musicart</span>
              </div>
              <span className={style.logo_down}>Home</span>
              <span
                onClick={() => handleNavigateUser("/invoice")}
                className={style.logo_down}
              >
                Invoice
              </span>
            </div>
            {userInfo?.name && (
              <div className={style.user_options}>
                <span onClick={() => handleNavigateUser("/cart")}>
                  <MdShoppingCart size={23} /> View cart{" "}
                  {userInfo?.cart?.length}
                </span>
                <div className={style.user_profile}>
                  <span onClick={() => setShowProfile(!showProfile)}>
                    {name}
                  </span>
                  {showProfile && (
                    <div className={style.profile}>
                      <span>{userInfo?.name} </span>
                      <span className={style.line}></span>
                      <span onClick={() => handleLogoutUser()}>Logout</span>
                    </div>
                  )}
                </div>
              </div>
            )}
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
          <div
            onClick={() => setShowSearchPlaceHolder(false)}
            onMouseEnter={() => setShowSearchPlaceHolder(false)}
            onMouseLeave={() =>
              setShowSearchPlaceHolder(searchInput ? false : true)
            }
            className={style.input}
          >
            <input
              onChange={(e) => handleSetSerachInput(e.target.value)}
              value={searchInput}
              type="text"
            />
            {showSearchPlaceHoder && (
              <div>
                <IoSearchOutline size={23} color="#666666" />
                <span>Search by Product Name</span>
              </div>
            )}
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
                    <select
                      onChange={(e) =>
                        handleFilterProductsByType(name, e.target.value)
                      }
                      className={style.select_section}
                      key={i}
                    >
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
                {sort?.types?.map((type, i) => (
                  <option key={i}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {!loader ? (
          <>
            {layout === "grid" ? (
              <div className={style.home_section_down}>
                {allProducts?.map(
                  ({
                    title,
                    image,
                    price,
                    useType,
                    description,
                    colour,
                    _id,
                  }) => {
                    return (
                      <div key={_id} className={style.product_container}>
                        <div className={style.img_container}>
                          <div className={style.img}>
                            <img
                              onClick={() =>
                                handleNavigateUserToDetailPage(_id)
                              }
                              src={image}
                              alt={title}
                            />
                            {userInfo?.name && (
                              <span
                                onClick={() => handleAddToCart(_id)}
                                className={style.cart_icon}
                              >
                                <MdOutlineAddShoppingCart color="#1D7000" />
                              </span>
                            )}
                          </div>
                        </div>
                        <div className={style.product_description}>
                          <span className={style.title}>{title}</span>
                          <span className={style.price}>Price - ₹{price}</span>
                          <span className={style.description}>
                            {colour} | {useType}
                          </span>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            ) : (
              <>
                <div className={style.home_section_down_flex}>
                  {allProducts?.map(
                    ({
                      title,
                      image,
                      price,
                      useType,
                      description,
                      colour,
                      _id,
                    }) => {
                      return (
                        <div key={_id} className={style.product_container_flex}>
                          <div className={style.img_container_flex}>
                            <div className={style.img_flex}>
                              <img
                                onClick={() =>
                                  handleNavigateUserToDetailPage(_id)
                                }
                                src={image}
                                alt={title}
                              />
                              {userInfo?.name && (
                                <span
                                  onClick={() => handleAddToCart(_id)}
                                  className={style.cart_icon_flex}
                                >
                                  <MdOutlineAddShoppingCart color="#1D7000" />
                                </span>
                              )}
                            </div>
                          </div>
                          <div className={style.product_description_flex}>
                            <span className={style.title_flex}>{title}</span>
                            <span className={style.price_flex}>
                              Price - ₹{price}
                            </span>
                            <span className={style.colour_flex}>
                              {colour} | {useType}
                            </span>
                            <span className={style.description_flex}>
                              {description}
                            </span>
                            <button
                              onClick={() =>
                                handleNavigateUserToDetailPage(_id)
                              }
                              className={style.detail_btn_flex}
                            >
                              Details
                            </button>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
                <div className={style.home_section_down_flex}>
                  {allProducts?.map(
                    ({
                      title,
                      image,
                      price,
                      useType,
                      description,
                      colour,
                      _id,
                    }) => {
                      return (
                        <div
                          key={_id}
                          className={style.product_container_flex_mobile}
                        >
                          <div className={style.img_container_flex}>
                            <div className={style.img_flex}>
                              <img
                                onClick={() =>
                                  handleNavigateUserToDetailPage(_id)
                                }
                                src={image}
                                alt={title}
                              />
                              {userInfo?.name && (
                                <span
                                  onClick={() => handleAddToCart(_id)}
                                  className={style.cart_icon_mobile_flex}
                                >
                                  <MdOutlineAddShoppingCart color="#1D7000" />
                                </span>
                              )}
                            </div>
                          </div>
                          <div className={style.product_description_flex}>
                            <span className={style.title_flex}>{title}</span>
                            <span className={style.price_flex}>
                              Price - ₹ {price}
                            </span>
                            <span className={style.colour_flex}>
                              {colour} | {useType}
                            </span>
                            <span className={style.description_flex}>
                              {description.slice(0, 28)}...
                            </span>
                            <button className={style.detail_btn_flex}>
                              Details
                            </button>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </>
            )}
          </>
        ) : (
          <div className={style.loader}>
            <HashLoader color="#36d7b7" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
