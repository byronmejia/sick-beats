import { httpClient } from '../httpClient';

export const authInterceptor = httpClient.interceptors.request.use(
    config => {
        // Do something with config, like strap on auth token
        return config;
    },
    error => {
        // We can do some clever stuff with the error
        return Promise.reject(error);
    }
);

