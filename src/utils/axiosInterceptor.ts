import Axios from 'axios';

const axiosInterceptor = Axios.create({
  baseURL: 'http://localhost:5001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInterceptor.interceptors.request.use(
  config => {
    console.log(config.url, '======= REQUEST URL =======');
    console.log(config.data, '======= REQUEST DATA =======');
    return config;
  },
  error => Promise.reject(error),
);

axiosInterceptor.interceptors.response.use(
  response => {
    console.log(response.data, '======= RESPONSE DATA =======');
    return response;
  },
  error => {
    console.log(error?.response?.data, '======= API ERROR =======');
    console.log(error?.message, '======= API MESSAGE =======');

    return Promise.reject(error);
  },
);

export default axiosInterceptor;
