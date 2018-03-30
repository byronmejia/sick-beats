import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000
});

