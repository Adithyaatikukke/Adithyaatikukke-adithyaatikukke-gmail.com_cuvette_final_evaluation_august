import axios from "axios";
import { getToken } from "../../utils/getToken";

export const registerUser = (data) => {
  try {
    return axios.post("http://localhost:5000/api/user/register", data);
  } catch (error) {
    return Error(error.message);
  }
};

export const logInUser = (data) => {
  try {
    return axios.post("http://localhost:5000/api/user/login", data);
  } catch (error) {
    return Error(error.message);
  }
};

export const getUser = () => {
  try {
    const config = getToken();
    return axios.get("http://localhost:5000/api/user/get", config);
  } catch (error) {
    return Error(error.message);
  }
};
export const addToCart = (productId) => {
  try {
    const config = getToken();

    return axios.post(
      `http://localhost:5000/api/cart/add/product`,
      productId,
      config
    );
  } catch (error) {
    return Error(error.message);
  }
};

export const removeFromCart = (productId) => {
  try {
    const config = getToken();
    return axios.post(
      `http://localhost:5000/api/cart/remove/product`,
      productId,
      config
    );
  } catch (error) {
    return Error(error.message);
  }
};
export const increaseQty = (data) => {
  try {
    const config = getToken();
    return axios.post(
      `http://localhost:5000/api/cart/increase/qty`,
      data,
      config
    );
  } catch (error) {
    return Error(error.message);
  }
};
export const addOrder = (data) => {
  try {
    const { productId } = data;

    const config = getToken();
    if (productId) {
      return axios.post(
        `http://localhost:5000/api/order/add/single/order`,
        data,
        config
      );
    } else {
      return axios.post(
        `http://localhost:5000/api/order/add/multiple/orders`,
        data,
        config
      );
    }
  } catch (error) {
    return Error(error.message);
  }
};

export const removeAllFromCart = () => {
  try {
    const config = getToken();
    return axios.delete(`http://localhost:5000/api/cart/remove/all`, config);
  } catch (error) {
    return Error(error.message);
  }
};

export const addFeedback = (feedback) => {
  try {
    const config = getToken();
    return axios.post(
      `http://localhost:5000/api/user/add/feedback`,

      feedback,
      config
    );
  } catch (error) {
    return Error(error.message);
  }
};
