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

axiosServer.interceptors.request.use(request => {
  if (!process.env.API_AUTH) {
    throw new Error('You should define API_AUTH env variable');
  }
  const nextRequest = request;

  if (!nextRequest.headers) {
    nextRequest.headers = {};
  }

  nextRequest.headers.Authorization = btoa(process.env.API_AUTH);

  return nextRequest;
});

axiosServer.interceptors.response.use(response => {
  const nextResponse = response;

  nextResponse.headers['Cache-Control'] = 's-maxage=300';

  return nextResponse;
});
