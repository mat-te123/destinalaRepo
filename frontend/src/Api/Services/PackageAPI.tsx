import axios from "axios";
import { PUBLIC_API_URL } from "../config";

export const PackageAPI = {
  getIndexServices: async (id: number) => {
    try {
      const response = await axios.get(
        `${PUBLIC_API_URL}packages/service/${id}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching packages:", error);
      throw error;
    }
  },

  getIndexDestinations: async (id: number) => {
    try {
      const response = await axios.get(
        `${PUBLIC_API_URL}packages/destination/${id}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching packages:", error);
      throw error;
    }
  },

  getContent: async (id: number) => {
    try {
      const response = await axios.get(`${PUBLIC_API_URL}package/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching package with id ${id}:`, error);
      throw error;
    }
  },
};
