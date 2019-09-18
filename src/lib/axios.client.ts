import defaultAxios from 'axios';

const isDev = process.env.NODE_ENV !== 'production';

export const axiosClient = defaultAxios.create({
  baseURL: isDev
    ? 'http://localhost:3000/'
    : 'https://fantastic-robot.ivangrimes.now.sh',
});
