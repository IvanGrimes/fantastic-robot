import defaultAxios from 'axios';
import btoa from 'btoa';

// TODO: Later move into lambdas/proxy.ts

export const axios = defaultAxios.create({
  auth: {
    username: 'devuser36',
    password: 'devuser36',
  },
});

axios.interceptors.request.use(config => {
  if (!process.env.API_AUTH) {
    throw new Error('You should define API_AUTH env variable');
  }

  const nextConfig = config;

  if (nextConfig.url) {
    nextConfig.url = nextConfig.url.replace('/api', '/proxy/API/V1');
  }

  if (!nextConfig.headers) {
    nextConfig.headers = {};
  }

  nextConfig.headers.Authorization = btoa(process.env.API_AUTH);

  return config;
});
