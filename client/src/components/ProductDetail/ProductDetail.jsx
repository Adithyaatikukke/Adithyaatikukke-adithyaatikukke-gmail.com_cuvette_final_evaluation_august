import React, { useEffect, useState } from "react";
import style from "./ProductDetail.module.css";
import logo from "../../images/image1.png";
import img from "../../images/image 3.png";
import { IoIosStar } from "react-icons/io";
import {
  MdOutlineStarOutline,
  MdShoppinCart,
  MdShoppingCart,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import {
  getSingleProductAsync,
  productToggle,
  singleProduct,
} from "../../Redux/Product/ProductSlice";
import {
  addToCartAsync,
  user,
  userCartToggle,
  userToggle,
} from "../../Redux/User/UserSlice";
const ProductDetail = () => {
  const { productId } = useParams();
  const [loader, setloader] = useState(false);
  const [addToCartLoader, setAddToCartloader] = useState(false);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickedProduct = useSelector(singleProduct);
  const toggle = useSelector(productToggle);
  const toggle1 = useSelector(userCartToggle);
  const userInfo = useSelector(user);
  const handleNavigateUser = (route) => {
    navigate(route);
  };

  const getSingleProduct = () => {
    setloader(true);
    if (
      clickedProduct?._id === undefined ||
      clickedProduct?._id !== String(productId)
    ) {
      dispatch(getSingleProductAsync(productId));
    }
  };

  const handleAddToCart = (id) => {
    const checkAlreadyInCart = userInfo?.cart?.find(
      ({ id }) => id === productId
    );
    if (!checkAlreadyInCart) {
      setAddToCartloader(true);
      dispatch(addToCartAsync({ productId: id }));
    } else {
      navigate("/cart");
    }
  };

  useEffect(() => {
    getSingleProduct();
    if (clickedProduct?._id) {
      setProduct(clickedProduct);
      setloader(false);
    }
    if (addToCartLoader) {
      setAddToCartloader(false);
      toast.success("Product added to cart successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [toggle, toggle1]);

  return (
    <section className={style.product_detail_container}>
      <ToastContainer />
      {!loader ? (
        <div className={style.product_detail_section}>
          <div className={style.product_detail_up}>
            <div className={style.product_detail_nav_details}>
              <div className={style.product_detail_nav_flex}>
                <span>
                  <img src={logo} alt="" />
                </span>
                <span className={style.logo_text}>Musicart</span>
                <span>Home/ {product?.title}</span>
              </div>
              <div
                onClick={() => handleNavigateUser("/cart")}
                className={style.view_product_detail_logo}
              >
                <MdShoppingCart size={23} /> View Cart {userInfo?.cart?.length}
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
            <span>{product?.description}</span>
            <div className={style.product_des_section}>
              <div className={style.main_img}>
                <div className={style.main_img_sec}>
                  <img src={product?.image} alt={product?.title} />
                </div>
                <div className={style.subimages}>
                  <img src={product?.image} alt={product?.title} />
                  <img src={product?.image} alt={product?.title} />
                  <img src={product?.image} alt={product?.title} />
                </div>
              </div>
              <div>
                <div className={style.product_more_detail}>
                  <span className={style.product_title}>{product?.title}</span>
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
                  <span className={style.product_price}>
                    Price - ₹ {product?.price}
                  </span>
                  <span>
                    {product?.colour} | {product?.useType}
                  </span>
                  <span>{product?.description}</span>
                  <span>Available - In stock</span>
                  <span>Brand - {product?.company}</span>
                </div>
                <div className={style.buttons_section}>
                  <button
                    onClick={() => handleAddToCart(productId)}
                    className={style.btn_addcart}
                  >
                    {userInfo?.cart?.find(({ id }) => id === productId) ? (
                      <span>Check in cart</span>
                    ) : !addToCartLoader ? (
                      <span>Add to cart</span>
                    ) : (
                      <BeatLoader size={13} color="white" />
                    )}
                  </button>
                  <button
                    onClick={() => handleNavigateUser(`/checkout/${productId}`)}
                    className={style.btn_buy}
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.loader}>
          <HashLoader color="#36d7b7" />
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
