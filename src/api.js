import axios from "axios";

const api = axios.create({
  baseURL: "https://bsale-api-v1.herokuapp.com",
});

/**
 * GET PRODUCTS
 * @param {String} page Page number current
 * @param {String} category Category Name
 * @param {String} search Product name to search
 * @returns {Object} Array products and message or error
 */
export const getProducts = async (page = "1", category = "", search = "") => {
  try {
    const response = await api.get(`/api/products?page=${page}&category=${category}&keyword=${search}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: err.response.data.message || err.message };
  }
};

/**
 * GET CATEGORIES
 * @returns {Object} Array categories and message or error
 */
export const getCategories = async () => {
  try {
    const response = await api.get("/api/categories");
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: err.response.data.message || err.message };
  }
};

/**
 * GET PRODUCT BY ID
 * @param {String} id Product id to search
 * @returns {Object} Product details and message or error
 */
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: err.response.data.message || err.message };
  }
};
