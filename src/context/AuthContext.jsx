import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();
const SESSION_DURATION = 3600000; // 1 hour in milliseconds

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('lastLoginTime', Date.now()); // Save login time
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('lastLoginTime');
    router.push('/login');
  };

  const checkSessionValidity = () => {
    const lastLoginTime = localStorage.getItem('lastLoginTime');
    if (lastLoginTime) {
      const currentTime = Date.now();
      const sessionAge = currentTime - lastLoginTime;
      if (sessionAge > SESSION_DURATION) {
        // Session has expired
        logout(); // Log out and clear session
        return false;
      }
      return true;
    }
    return false;
  };

  // Check for token and session validity on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && checkSessionValidity()) {
      setIsAuthenticated(true); // If token exists and session is valid, user is authenticated
    } else {
      logout(); // Clear session and force logout if invalid or expired
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

import axios from 'axios';

export const loginAndFetchToken = async (username, password) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/token/', {
      username,
      password,
    });

    const token = response.data.access; // Assuming the token is returned as response.data.access
    localStorage.setItem('token', token); // Store token in local storage
    localStorage.setItem('lastLoginTime', Date.now()); // Update login time
    return token;
  } catch (error) {
    console.error('Error logging in:', error);
    throw new Error('Login failed. Please check your credentials.'); // Throwing a more generic error
  }
};

export const getAccessToken = () => {
  const token = localStorage.getItem('token');
  const lastLoginTime = localStorage.getItem('lastLoginTime');

  if (token && lastLoginTime) {
    const currentTime = Date.now();
    const sessionAge = currentTime - lastLoginTime;

    if (sessionAge < SESSION_DURATION) {
      return token; // Return token if session is valid
    }
  }

  return null; // Return null if session has expired or token does not exist
};
