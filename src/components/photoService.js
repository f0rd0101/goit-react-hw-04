


import axios from "axios";

export const fetchPhotos = async (page, query) => {
  const BASE_URL = "https://api.unsplash.com";
  const ACCESS_KEY = "IBYeODBTELKNuxIaJvs7rteENX0WzI3zKR3qW4o0rms";
  const response = await axios.get(
    `${BASE_URL}/search/photos?page=${page}&per_page=12&client_id=${ACCESS_KEY}&query=${query}`
  );
  return response.data;
};