import axios from "axios";

export const fetchItemsMixin = {
  methods: {
    async fetchItems(searchQuery, path, extraParam = null) {
      console.log("extraParam", extraParam);
      try {
        const response = await axios.get(`http://localhost:3000/${path}`, {
          params: extraParam
        });
        return response.data.filter(
          item =>
            !searchQuery ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } catch (error) {
        console.error("Error fetching items:", error);
        return [];
      }
    }
  }
};
