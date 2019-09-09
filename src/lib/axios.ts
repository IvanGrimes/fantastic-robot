import defaultAxios from 'axios';

export const axios = defaultAxios.create();

axios.interceptors.request.use(config => {
  if (config.url) {
    return {
      ...config,
      url:
        process.env.NODE_ENV === 'production'
          ? config.url.replace('/api', '')
          : config.url,
    };
  }

  return config;
});
