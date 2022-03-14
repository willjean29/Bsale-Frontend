import axios from "axios";

const api = axios.create({
  baseURL: "https://bsale-api-v1.herokuapp.com",
});

export const getProducts = async (page = "1", category = "", search = "") => {
  try {
    const response = await api.get(`/api/products?page=${page}&category=${category}&keyword=${search}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: err.response.data.message || err.message };
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get("/api/categories");
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: err.response.data.message || err.message };
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: err.response.data.message || err.message };
  }
};
