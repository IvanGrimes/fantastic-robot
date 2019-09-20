import defaultAxios from 'axios';
import { paramsSerializer } from './paramsSerializer';

if (!process.env.API_AUTH_USER || !process.env.API_AUTH_PASSWORD) {
  throw new Error('');
}

const isDev = process.env.NODE_ENV !== 'production';

export const axiosClient = defaultAxios.create({
  baseURL: isDev
    ? 'http://localhost:3000/'
    : 'https://fantastic-robot.ivangrimes.now.sh',
  auth: {
    username: process.env.API_AUTH_USER,
    password: process.env.API_AUTH_PASSWORD,
  },
  paramsSerializer,
});

axiosClient.interceptors.request.use(config => {
  const nextConfig = config;

  if (nextConfig.url) {
    nextConfig.url = nextConfig.url.replace('/api', '/proxy/API/V1');
  }

  return config;
});
