import axios from 'axios';
import { AsyncStorage } from 'react-native';
const baseURL = 'https://www.jodibanao.in/api/';
const service = axios.create({ baseURL });

service.interceptors.response.use(
    (res) => res,
    (error) => {
        const status = error.response ? error.response.status : null;
        if (status === 401) {
            AsyncStorage.removeItem('access_token');
            AsyncStorage.removeItem('refresh_token');
        }
        if (!status) {
        }
        return Promise.reject(error);
    },
);
service.interceptors.request.use(async (config) => {
    const access_token = await AsyncStorage.getItem('access_token');
    console.log('access_token', access_token);
    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
});

export { service };
