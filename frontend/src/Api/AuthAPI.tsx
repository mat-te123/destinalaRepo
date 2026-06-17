import axios from "axios";
import { BASE_URL } from "./config";

export const AuthAPI = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/admin/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await axios.post(`${BASE_URL}/logout`);
      return response.data;
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  },
};