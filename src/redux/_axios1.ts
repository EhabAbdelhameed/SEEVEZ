import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import assign from 'lodash/assign';
import {create} from 'apisauce';
import {TStore} from './store';
import {BASE_URL} from '../../.env.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api1 = create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    accesstoken:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkwtTl9wMEpQWTlpQWFtczlITllBNnN6TEhSV3JzLUdFSDduQklQOVRaUjgifQ.eyJ1c2VyIjp7InVzZXJJZCI6IjY1OTljZjI0YzIzZjU2NjVmZjUwNDJkYiIsInB1YmxpY1VzZXJJZCI6IjMiLCJkZXZpY2VJbmZvIjp7ImtpbmQiOiJhbmRyb2lkIiwibW9kZWwiOiJzdHJpbmciLCJzZGtWZXJzaW9uIjoic3RyaW5nIn0sIm5ldHdvcmtJZCI6IjY1NDc0NjUxYzUwZjdjMDYyNTdiNTA0ZiIsImRpc3BsYXlOYW1lIjoiSG9zc2FtIiwicmVmcmVzaFRva2VuIjoiZGVlMmYyMmI4MDZlMWM5OGZlMmQwMmQ2OWM2ZWY5NjcxNjMwODJkYTE4YTNmYzAzNDc0ZDQyMjkyNGMxOWU2ZjY3Y2M0NjQ5ZTE0YTk3MzUifSwic3ViIjoiNjU5OWNmMjRjMjNmNTY2NWZmNTA0MmRiIiwiaXNzIjoiaHR0cHM6Ly9hcGkuZXUuYW1pdHkuY28iLCJpYXQiOjE3MDU0MDE1NzcsImV4cCI6MTcwNzk5MzU3N30.iAPFSW-Z63Ol2nWAjHf3NQavaj4fCyKmi2cqiK_s9OR-uUvnanhA-CZsBbMmpoxrpNf8oBppLL0pObu6R38zPExTHExzMQRoyE40Nw4wrGMNmRTUvJrExkOnAD_qVCs2E9DTbULM6N4NB5D7setaSNpJ7fkoY1ajY9v9s8K5Dt-rJ4PIMXPsFGbDn7dug7cFIqH_aCBnXIeOiuS3qFujpjKJgeCLgJwgMKFnR_um7XzzbRTXzNhNgA67kB39G0Xy7sdVxotEFAyzCIHuedkJ5vorcVJWqejGpbHawKqh9vB524pE9OfYCkeozR00eV3StKE-SxIcZCpEjjoSKFyTrA',
  },
});

const initAxios = (store: TStore) => {
    console.log(api1)
    api1.axiosInstance.interceptors.request.use(async (config: any) => {
        const token: any = await AsyncStorage.getItem("USER_TOKEN")
        const authorization = `Bearer ${token}`;
        const authHeaders = { authorization };
        if (token) {
            assign(config.headers, authHeaders);
        }
        return config;
    })

    const injectAuthHeaders: any = async (config: AxiosRequestConfig) => {
        const token: any = await AsyncStorage.getItem("USER_TOKEN");
        const authorization = `Bearer ${token}`;
        const authHeaders = { authorization, };
        assign(config.headers, authHeaders);
        return config;
    };
  
  const unautherizedHandling = (error: AxiosError) => {
    const {status, data} = (error?.response as any) || {};
    console.log('====================================');
    console.log(status);
    console.log('====================================');
    //error handling
  };

  const handleFormData: any = (config: AxiosRequestConfig) => {
    if (config.data instanceof FormData) {
      assign(config.headers, {
        'Content-Type': 'multipart/form-data',
      });
    }
    return config;
  };

  axios.defaults.baseURL = BASE_URL;
  axios.interceptors.request.use(injectAuthHeaders);
  axios.interceptors.response.use(undefined, error => {
    unautherizedHandling(error);
    return Promise.reject(error?.response);
  });
  axios.interceptors.request.use(handleFormData);
};

export default initAxios;
