import axios from 'axios';
import { stringify } from 'qs';

if (!process.env.API_AUTH_USER || !process.env.API_AUTH_PASSWORD) {
  throw new Error('You should define API_AUTH_USER and API_AUTH_PASSWORD');
}

export const http = axios.create({
  baseURL: process.env.API_ENDPOINT,
  auth: {
    username: process.env.API_AUTH_USER,
    password: process.env.API_AUTH_PASSWORD,
  },
  paramsSerializer: (params: any) =>
    stringify(params, { arrayFormat: 'comma' }),
});

http.interceptors.request.use((config) => {
  const nextConfig = config;

  if (nextConfig.url) {
    nextConfig.url = nextConfig.url.replace('/api', '');
  }

  return nextConfig;
});
