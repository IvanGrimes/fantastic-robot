import axios from 'axios';
import { stringify } from 'qs';

if (!process.env.API_ENDPOINT) {
  throw new Error('You should define API_ENDPOINT');
}

export const http = axios.create({
  baseURL: process.env.API_ENDPOINT,
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

export class ServiceError extends Error {}
