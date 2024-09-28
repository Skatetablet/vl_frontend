import axios from 'axios';

export const loginAndFetchToken = async (username, password) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/token/', {
      username,
      password,
    });

    const token = response.data.access; // Assuming the token is returned as response.data.access
    localStorage.setItem('token', token); // Store token in local storage}

    return token;
  } catch (error) {
    console.error('Error logging in:', error);
    throw new Error('Login failed. Please check your credentials.'); // Throwing a more generic error
  }
};

export const getAccessToken = () => {
  return localStorage.getItem('token'); // Assuming you stored the token as 'token'
};
