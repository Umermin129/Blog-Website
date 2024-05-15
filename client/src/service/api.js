import axios from 'axios';

import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config';
import { getAccessToken, setAccessToken } from '../utils/common-utils';

const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getAccessToken(),
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Modify request configuration if needed
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Process successful responses
    return response.data;
  },
  function (error) {
    // Handle error responses
    return Promise.reject(error);
  }
);

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = async (body) => {
    try {
      const response = await axiosInstance({
        method: value.method,
        url: value.url,
        data: value.method === 'DELETE' ? '' : body,
      });

      return response.data;
    } catch (error) {
      // Handle different types of errors and responses here
      if (error.response) {
        console.error('ERROR IN RESPONSE: ', error.response.data);
        // Handle error based on status codes or specific error responses
        // You can modify this part to handle errors according to your application's needs
      } else if (error.request) {
        console.error('ERROR IN RESPONSE: ', error.request);
        // Handle request errors (no response received)
      } else {
        console.error('ERROR IN RESPONSE: ', error.message);
        // Handle other errors
      }

      return Promise.reject(error);
    }
  };
}

export { API };
