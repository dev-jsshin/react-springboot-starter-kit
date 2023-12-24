import axios, {AxiosError} from 'axios';

const api = axios.create({
  baseURL: BACKEND_URL + ':' + BACKEND_PORT + BACKEND_CONTEXT_PATH,
  timeout: 1000,
});

api.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer temp`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      
    } else if (response.status === 500) {

    }
    return response;
  },
  async (error) => { 
    if (error?.code === AxiosError.ERR_NETWORK) {
      
    } else if (error.response?.status === 401) {

    }

    return Promise.reject(error);
  }
);

export default api;