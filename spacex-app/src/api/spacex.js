// src/api/spacex.js
import axios from 'axios';

const API_BASE_URL = 'https://api.spacexdata.com/v4/';

export const getRockets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}rockets`);
    return response.data;
  } catch (error) {
    console.error('Error fetching SpaceX data:', error);
    return [];
  }
};
