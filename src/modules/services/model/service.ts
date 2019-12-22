import defaultAxios from 'axios';
import { paramsSerializer } from '../utils/paramsSerializer';

if (!process.env.API_AUTH_USER || !process.env.API_AUTH_PASSWORD) {
  throw new Error('You should define API_AUTH_USER and API_AUTH_PASSWORD');
}

export const service = defaultAxios.create({
  baseURL: process.env.API_ENDPOINT,
  auth: {
    username: process.env.API_AUTH_USER,
    password: process.env.API_AUTH_PASSWORD,
  },
  paramsSerializer,
});

service.interceptors.request.use(config => {
  const nextConfig = config;

  if (nextConfig.url) {
    nextConfig.url = nextConfig.url.replace('/api', '');
  }

  return nextConfig;
});
