import axios from "axios";
import { PUBLIC_API_URL, BASE_URL } from "../config";

export const DestinationAPI = {
  getIndex: async (page: number) => {
    try {
      const response = await axios.get(
        `${PUBLIC_API_URL}destinations?page=${page}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching destinations:", error);
      throw error;
    }
  },

  getCMSIndex: async (page: number) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/destinations/cms?page=${page}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching CMS destinations:", error);
      throw error;
    }
  },

  getHomeIndex: async () => {
    try {
      const response = await axios.get(`${PUBLIC_API_URL}destinations/home`);
      return response.data;
    } catch (error) {
      console.error("Error fetching home destinations:", error);
      throw error;
    }
  },

  getById: async (id: number) => {
    try {
      const response = await axios.get(`${PUBLIC_API_URL}destination/${id}`);
      return response.data;
    } catch (error) {
      console.warn(`Error Fetching destination With ID =  ${id}`, error);
      throw error;
    }
  },
};
