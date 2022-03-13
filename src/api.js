import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const getProducts = async (page = "1", category = "") => {
  try {
    const response = await api.get(`/api/products?page=${page}&category=${category}`);
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
