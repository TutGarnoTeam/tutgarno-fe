import axios from 'axios';

import { baseURL } from '../constants';
import { store } from '../store/store.ts';

const apiServices = axios.create({ baseURL });

apiServices.interceptors.request.use(req => {
  const token = store.getState().auth.token;
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
    store.subscribe(() => {
      const newToken = store.getState().auth.token;
      if (token !== newToken) {
        req.headers.Authorization = `Bearer ${newToken}`;
      }
    });
  }

  return req;
});

export { apiServices };
