import axios from "axios";

const BASE_URL = "https://dummyjson.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (username, password) => {
  try {
    const response = await api.post("/auth/login", { username, password });
    return response.data; // Assuming your API returns user data upon successful login
  } catch (error) {
    throw error; // Handle errors as needed
  }
};
