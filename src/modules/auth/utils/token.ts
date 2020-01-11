import { set, get, remove } from 'js-cookie';

const TOKEN_KEY = 'STUDIO_TOKEN';

export const getToken = () => get(TOKEN_KEY);

export const setToken = (token: string) => set(TOKEN_KEY, token);

export const removeToken = () => remove(TOKEN_KEY);
