import React, { useEffect } from "react";
import style from "./Cart.module.css";
import logo from "../../images/image1.png";
import { IoBagOutline } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import BackArrow from "../BackArrow/BackArrow";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import {
  deleteAllOrdersAysnc,
  increaseQtyAsync,
  removeFromCartAsync,
  setDeleteModal,
  setNewPage,
  showDeleteModal,
  user,
  userCartToggle,
  userToggle,
} from "../../Redux/User/UserSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [productId, setProductId] = useState();
  const [productName, setProductName] = useState("");
  const [maxPriceProduct, setMaxPriceProduct] = useState({});
  const userInfo = useSelector(user);
  const deleteModalStatus = useSelector(showDeleteModal);
  const toggle = useSelector(userToggle);
  const handleNavigateUser = (route) => {
    navigate(route);
  };

  const handleRemoveFromCart = (productId, productName) => {
    setProductName(productName);
    setProductId(productId);
    dispatch(setDeleteModal({ value: true }));
  };
  const handleRemoveAllFromCart = () => {
    setProductName("all cart");
    setProductId("");
    dispatch(setDeleteModal({ value: true }));
  };
  const handleIncreaseQty = (productId, quantity) => {
    dispatch(increaseQtyAsync({ productId, quantity }));
  };
  const updateUserNewPage = (page) => {
    dispatch(setNewPage({ page }));
  };

  const totalAmount = userInfo?.cart?.reduce(
    (amount, item) => Math.round(item.price) * item.quantity + amount,
    0
  );

  const getMaxPriceProduct = (products) => {
    let maxPrice = 0;
    let productName = "";
    for (let i = 0; i < products?.length || 0; i++) {
      if (products[i]?.price * products[i]?.quantity > maxPrice) {
        productName = products[i].title;
      }
      maxPrice = Math.max(maxPrice, products[i]?.price * products[i]?.quantity);
    }
    setMaxPriceProduct({ maxPrice, productName });
  };

  useEffect(() => {
    updateUserNewPage("Cart");
  }, []);

  useEffect(() => {
    getMaxPriceProduct(userInfo?.cart);
  }, [toggle]);

  return (
    <>
      {userInfo?.cart?.length > 0 ? (
        <>
          <section className={style.cart_container}>
            {deleteModalStatus && (
              <DeleteModal
                route="/cart"
                pageName="Cart"
                id={productId}
                productName={productName}
              />
            )}
            <div
              className={`${
                deleteModalStatus ? style.cart_section_blur : style.cart_section
              }`}
            >
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
                    <MdShoppingCart size={23} /> View Cart{" "}
                    {userInfo?.cart?.length}
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
                      {userInfo?.cart?.map(
                        ({ title, image, colour, price, quantity, id }) => (
                          <div key={id} className={style.cart_box}>
                            <div className={style.cart_box_sec}>
                              <img src={image} alt={title} />
                              <button
                                onClick={() => handleRemoveFromCart(id, title)}
                                className={style.remove}
                              >
                                <span>
                                  <FaRegTrashAlt />
                                </span>
                              </button>
                            </div>
                            <div className={style.cart_item_d}>
                              <span className={style.cart_item_title_text}>
                                {title}
                              </span>
                              <span className={style.cart_item_colour}>
                                Colour : {colour}
                              </span>
                              <span className={style.cart_item_stock}>
                                In Stock
                              </span>
                            </div>
                            <div className={style.cart_item_d}>
                              <span>Price</span>
                              <span>₹{price}</span>
                            </div>
                            <div className={style.cart_item_d}>
                              <span>Quantity</span>
                              <select
                                value={quantity}
                                onChange={(e) =>
                                  handleIncreaseQty(id, e.target.value)
                                }
                              >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                              </select>
                            </div>
                            <div className={style.cart_item_d}>
                              <span>Total</span>
                              <span>₹ {price * quantity}</span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                    <div className={style.price_detail_container}>
                      <div className={style.price_detail_section}>
                        <div className={style.price_detail_box_up}>
                          <span>PRICE DETAILS</span>
                          <div className={style.price_detail_sec}>
                            <span>Total MRP</span>
                            <span>₹ {totalAmount}</span>
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
                            <span>₹{totalAmount + 45}</span>
                          </div>
                          <div className={style.order_btn}>
                            <button
                              onClick={() => handleNavigateUser("/checkout/0")}
                            >
                              PLACE ORDER
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={style.cart_item_down}>
                    <div>
                      <span>Max price product : </span>
                      <span>{maxPriceProduct.productName}</span>
                      <span>₹{maxPriceProduct.maxPrice}</span>
                    </div>
                  </div>
                  <div className={style.deleteAllCart_buttons_section}>
                    <button onClick={() => handleRemoveAllFromCart()}>
                      Delete all cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={style.cart_mobile_container}>
            {deleteModalStatus && (
              <DeleteModal
                route="/cart"
                pageName="Cart"
                id={productId}
                productName={productName}
              />
            )}
            <span>
              <BackArrow route={"/"} />
            </span>

            <div
              className={`${
                deleteModalStatus
                  ? style.cart_mobile_section_blur
                  : style.cart_mobile_section
              }`}
            >
              <div className={style.cart_mobile_main_box}>
                {userInfo?.cart?.map(
                  ({ title, image, colour, price, quantity, id }) => {
                    return (
                      <>
                        <div key={id} className={style.cart_mobile_section_up}>
                          <div className={style.item_img}>
                            <img src={image} alt={title} />
                            <button
                              onClick={() => handleRemoveFromCart(id, title)}
                              className={style.mobile_remove}
                            >
                              Remove
                            </button>
                          </div>
                          <div className={style.cart_mobile_description}>
                            <div className={style.details}>
                              <span className={style.cart_item_title}>
                                {title}
                              </span>
                              <span className={style.cart_item_price}>
                                ₹{price * quantity}
                              </span>

                              <select
                                value={quantity}
                                onChange={(e) =>
                                  handleIncreaseQty(id, e.target.value)
                                }
                              >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                              </select>
                            </div>
                            <span>Clour : {colour}</span>
                            <span>In Stock</span>
                            <span>Convenience Fee ₹45</span>
                          </div>
                        </div>

                        <span className={style.cart_item_line}></span>
                      </>
                    );
                  }
                )}

                <div className={style.details_total}>
                  <span>Max price : </span>
                  <span>{maxPriceProduct.productName}</span>
                  <span>₹{maxPriceProduct.maxPrice}</span>
                </div>
              </div>
              <div className={style.cart_mobile_section_down}>
                <span className={style.line}></span>
                <span className={style.total_amount}>
                  <span>Total Amount </span>
                  <span className={style.total_price}>
                    ₹{totalAmount + 45}{" "}
                  </span>
                </span>
                <button onClick={() => handleNavigateUser(`/checkout/0`)}>
                  PLACE ORDER
                </button>
                <button
                  className={style.delete_cart_mobile_botton_section}
                  onClick={() => handleRemoveAllFromCart()}
                >
                  DELETE ALL ORDER
                </button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className={style.empty_cart_conatiner}>
          <div className={style.empty_cart_box}>
            <span>Cart is empty!</span>
            <button onClick={() => handleNavigateUser("/")}>
              Go back to Products
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
