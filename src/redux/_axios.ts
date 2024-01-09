import axios, { AxiosError, AxiosRequestConfig } from "axios";

import assign from "lodash/assign"

import { create } from "apisauce"
import { TStore } from "./store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from '../../.env.json'


export const api = create({
    baseURL: BASE_URL,
    headers: {
        "Accept": "application/json",
        'Content-Type': 'multipart/form-data',
    }
})


const initAxios = (store: TStore) => {
    console.log("22222222222222222222222222")
    api.axiosInstance.interceptors.request.use(async (config: any) => {
                   
        const token: any = await AsyncStorage.getItem("USER_TOKEN")
       
        const authorization = `Bearer ${token}`;
        const authHeaders = { authorization };
        if (token) {
            assign(config.headers, authHeaders);
        }
        return config;
    })

    const injectAuthHeaders: any = async (config: AxiosRequestConfig) => {
        console.log("666666666666666666666")
        const token: any = await AsyncStorage.getItem("USER_TOKEN");
        const authorization = `Bearer ${token}`;
        const authHeaders = { authorization };
        assign(config.headers, authHeaders);
        return config;
    };


    const unautherizedHandling = (error: AxiosError) => {
        console.log("33333333333333333333333")
        const { status, data } = (error?.response as any) || {};
        
    };

    const handleFormData: any = (config: AxiosRequestConfig) => {
        console.log("5555555555555555555555555")
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
