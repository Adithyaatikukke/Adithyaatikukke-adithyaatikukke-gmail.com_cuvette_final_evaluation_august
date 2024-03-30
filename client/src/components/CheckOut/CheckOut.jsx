import React, { useEffect, useState } from "react";
import style from "./CheckOut.module.css";
import logo from "../../images/image1.png";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getSingleProductAsync,
  productToggle,
  singleProduct,
} from "../../Redux/Product/ProductSlice";
import {
  addOrderAsync,
  addToOrderSucc,
  clearAddToOrderSucc,
  removeAllFromCartAsync,
  user,
  userInfoToggle,
} from "../../Redux/User/UserSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners";
import BackArrow from "../BackArrow/BackArrow";
const CheckOut = () => {
  const { productId } = useParams();

  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [productDetail, setProductDetail] = useState({});
  const [Loader1, setLoader1] = useState(false);
  const [Loader2, setLoader2] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const userInfo = useSelector(user);
  const navigate = useNavigate();

  const product = useSelector(singleProduct);
  const productAddToOrderSuccesfully = useSelector(addToOrderSucc);
  const toggle = useSelector(productToggle);
  const toggle1 = useSelector(userInfoToggle);
  const dispatch = useDispatch();
  const handleNavigateUser = (route) => {
    navigate(route);
  };
  const getChosenProduct = () => {
    dispatch(getSingleProductAsync(productId));
  };
  const handlePlaceOrder = (val) => {
    if (checkoutProducts[0]?.title) {
      if (!deliveryAddress) {
        toast.error("Delivery address is missing!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (!paymentMethod) {
        toast.error("Payment Method is missing!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        if (val === "submit1") setLoader1(true);
        else setLoader2(true);

        if (checkoutProducts.length > 1 || checkoutProducts[0]?.id) {
          const productIds = checkoutProducts.map(({ id }) => String(id));

          dispatch(
            addOrderAsync({ productIds, deliveryAddress, paymentMethod })
          );
        } else {
          dispatch(
            addOrderAsync({
              productId: checkoutProducts[0]?.id || productId,
              paymentMethod,
              deliveryAddress,
            })
          );
        }
      }
    }
  };

  useEffect(() => {
    if (checkoutProducts.length === 0 && productId !== product?._id) {
      if (productId === String(0)) {
        setCheckoutProducts(userInfo?.cart);
        setProductDetail(userInfo?.cart[0]);
        setTotalAmount(
          userInfo?.cart?.reduce(
            (amount, item) => Math.round(item.price) * item.quantity + amount,
            0
          )
        );
      } else {
        getChosenProduct();
      }
    } else {
      setCheckoutProducts([Object(product)]);
      setProductDetail(product);
      setTotalAmount(product?.price);
    }
  }, [toggle]);

  const handleClearProductAddToOrder = (route) => {
    if (checkoutProducts[0]?.id) {
      dispatch(removeAllFromCartAsync());
    }
    setDeliveryAddress("");

    setPaymentMethod("");

    navigate(route);

    setTimeout(() => {
      dispatch(clearAddToOrderSucc());
    }, [5000]);
  };

  useEffect(() => {
    if (productAddToOrderSuccesfully) {
      setLoader2(false);
      setLoader1(false);

      handleClearProductAddToOrder("/order/success");
    }
  }, [toggle1]);

  return (
    <section className={style.checkout_container}>
      <ToastContainer />
      <div className={style.checkout_section}>
        <BackArrow route="/cart" />
        <div className={style.checkout_nav_section}>
          <div className={style.checkout_nav_up}>
            <span onClick={() => handleNavigateUser("/")}>
              <img src={logo} alt="" />
            </span>
            <span className={style.checkout_nav_text}>Musicart</span>
            <span>Home/ Checkout</span>
          </div>
          <div className={style.checkout_nav_down}>
            <button onClick={() => handleNavigateUser("/cart")}>
              Back to cart
            </button>
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
                  <span className={style.user_name}>{userInfo?.name}</span>

                  <textarea
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    value={deliveryAddress}
                    type="text"
                  />
                </div>
              </div>
              <div className={style.sec}>
                <span className={style.red_text}>2.Payment method</span>
                <select onChange={(e) => setPaymentMethod(e.target.value)}>
                  <option value="Cash On Delivery">Cash On Delivery</option>
                  <option value="Online Pay">Online Pay</option>
                </select>
              </div>
              <div className={style.sec}>
                <span className={style.red_text}>
                  3.Review items and delivery
                </span>
                <div className={style.product_list_info}>
                  <div className={style.product_list_images}>
                    {checkoutProducts?.map((product) => (
                      <img
                        className={`${
                          checkoutProducts?.length > 1 &&
                          productDetail?.id === product?.id &&
                          style.big_border
                        }`}
                        onClick={() => setProductDetail(product)}
                        src={product?.image}
                      />
                    ))}
                  </div>
                  <div className={style.product_list_description}>
                    <span className={style.product_title}>
                      {productDetail?.title}
                    </span>
                    <span className={style.product_colour}>
                      Colour {productDetail?.colour}
                    </span>
                    <span>
                      Estimated delivery : Monday — FREE Standard Delivery
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.checkout_detail_down}>
                <div>
                  <button onClick={() => handlePlaceOrder("submit1")}>
                    {!Loader1 ? (
                      "Place your order"
                    ) : (
                      <BeatLoader size={11} color="white" />
                    )}
                  </button>
                  <div className={style.product_info}>
                    <span className={style.price}>
                      Order Total : ₹{totalAmount + 45}
                    </span>{" "}
                    <span className={style.info}>
                      Order Total : ₹{totalAmount} By placing your order, you
                      agree to Musicart privacy notice and conditions of use.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.order_summary_container}>
              <div className={style.order_summary_section}>
                <div className={style.place_order}>
                  <button onClick={() => handlePlaceOrder("submit2")}>
                    {!Loader2 ? (
                      "Place your order"
                    ) : (
                      <BeatLoader size={13} color="white" />
                    )}
                  </button>
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
                  <span>₹{totalAmount + 45}</span>
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
