import axios from 'axios';
import { getAccessToken } from './auth';

export const fetchProducts = async () => {
  const token = getAccessToken(); // Get the token if needed
  const response = await axios.get('http://127.0.0.1:8000/api/products/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data; // Assuming the API returns the product data
};

export const fetchProductById = async (id) => {
  const token = getAccessToken(); // Get token from localStorage

  const response = await axios.get(
    `http://127.0.0.1:8000/api/products/${id}/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const fetchOrders = async () => {
  const token = getAccessToken();
  const response = await axios.get('http://127.0.0.1:8000/api/orders/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
