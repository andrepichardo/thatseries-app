import axios from 'axios';

export const axiosEpisoDate = axios.create({
  baseURL: 'https://www.episodate.com/api',
});

export const getMostPopular = async (pageParam = 1) => {
  const response = await axiosEpisoDate.get(`/most-popular?page=${pageParam}`);
  return response.data;
};

export const getSearch = async (pageParam = 1, search) => {
  const response = await axiosEpisoDate.get(
    `/search?q=${search}page=${pageParam}`
  );
  return response.data;
};

export const getShowDetails = async (showTitle) => {
  const response = await axiosEpisoDate.get(`/show-details?q=${showTitle}`);
  return response.data;
};
