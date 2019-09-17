import defaultAxios from 'axios';
import btoa from 'btoa';

if (!process.env.API_ENDPOINT) {
  throw new Error('You should define API_ENDPOINT env variable');
}

export const axiosServer = defaultAxios.create({
  baseURL: process.env.API_ENDPOINT,
  auth: {
    username: 'devuser36',
    password: 'devuser36',
  },
});

axiosServer.interceptors.request.use(config => {
  if (!process.env.API_AUTH) {
    throw new Error('You should define API_AUTH env variable');
  }
  const nextConfig = config;

  if (!nextConfig.headers) {
    nextConfig.headers = {};
  }

  nextConfig.headers.Authorization = btoa(process.env.API_AUTH);

  return config;
});
