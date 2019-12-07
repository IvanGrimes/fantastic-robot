import defaultAxios from 'axios';
import { paramsSerializer } from './paramsSerializer';

if (!process.env.API_AUTH_USER || !process.env.API_AUTH_PASSWORD) {
  throw new Error('You should define API_AUTH_USER and API_AUTH_PASSWORD');
}

export const axiosClient = defaultAxios.create({
  baseURL: process.env.API_ENDPOINT,
  auth: {
    username: process.env.API_AUTH_USER,
    password: process.env.API_AUTH_PASSWORD,
  },
  paramsSerializer,
});

axiosClient.interceptors.request.use(config => {
  const nextConfig = config;

  if (nextConfig.url) {
    nextConfig.url = `http://${nextConfig.baseURL}${nextConfig.url.replace(
      '/api',
      '/API/V1'
    )}`;
  }

  return nextConfig;
});
