import axios from "axios";
export const getProducts = () => {
  try {
    return axios.get("http://localhost:5000/api/products/get");
  } catch (error) {
    return Error(error.message);
  }
};
export const getSingleProduct = (id) => {
  try {
    return axios.get(
      `http://localhost:5000/api/products/get/single/product/${id}`
    );
  } catch (error) {
    return Error(error.message);
  }
};
export const getAllProductsByHeadTypeFilter = (headType) => {
  try {
    return axios.get(
      `http://localhost:5000/api/products/filter/useType?useType=${headType}`
    );
  } catch (error) {
    return Error(error.message);
  }
};
export const getAllProductsByCompanyFilter = (company) => {
  try {
    return axios.get(
      `http://localhost:5000/api/products/filter/company?company=${company}`
    );
  } catch (error) {
    return Error(error.message);
  }
};

export const getAllProductsByColourFilter = (colour) => {
  try {
    return axios.get(
      `http://localhost:5000/api/products/filter/colour?colour=${colour}`
    );
  } catch (error) {
    return Error(error.message);
  }
};
export const getAllProductsByPriceFilter = (price) => {
  try {
    return axios.post(`http://localhost:5000/api/products/filter/price`, price);
  } catch (error) {
    return Error(error.message);
  }
};

export const getAllProductsByAscFilter = () => {
  try {
    return axios.get(`http://localhost:5000/api/products/filter/sort/asc`);
  } catch (error) {
    return Error(error.message);
  }
};

export const getAllProductsByDescFilter = () => {
  try {
    return axios.get(`http://localhost:5000/api/products/filter/sort/desc`);
  } catch (error) {
    return Error(error.message);
  }
};

export const getAllProductsByKeywordFilter = (keyword) => {
  try {
    return axios.get(
      `http://localhost:5000/api/products/filter/keyword?keyword=${keyword}`
    );
  } catch (error) {
    return Error(error.message);
  }
};
