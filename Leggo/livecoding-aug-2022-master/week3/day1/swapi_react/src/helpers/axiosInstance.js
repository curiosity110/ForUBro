import axios from 'axios';

const axionsInstance = axios.create({
  // general settings for axios/fetch requests like baseUrl, Authorization
  baseURL: 'https://swapi.sit.academy/api/',
  // abort request if the response takes longer than 2000ms
  timeout: 2000,
});

export default axionsInstance;
