import axios from "axios";
import { PUBLIC_API_URL } from "../config";

export const ServiceAPI = {
  getIndex: async (page: number) => {
    try {
      const response = await axios.get(
        `${PUBLIC_API_URL}services?page=${page}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching services:", error);
      throw error;
    }
  },

  homeshow: async () => {
    try {
      const response = await axios.get(`${PUBLIC_API_URL}services/home`);
      return response.data;
    } catch (error) {
      console.error("Error fetching home services:", error);
      throw error;
    }
  },

  show: async (id: number) => {
    try {
      const response = await axios.get(`${PUBLIC_API_URL}service/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching service with id ${id}:`, error);
      throw error;
    }
  },
};
