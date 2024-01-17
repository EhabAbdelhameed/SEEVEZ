import axios, { AxiosError, AxiosRequestConfig } from "axios";
import assign from "lodash/assign"
import { create } from "apisauce"
import { TStore } from "./store";
import { BASE_URL } from "../../.env.json";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const api = create({
    baseURL: BASE_URL,
    headers: {
         "Content-Type": "multipart/form-data", "Accept": "application/json",
      accesstoken:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkwtTl9wMEpQWTlpQWFtczlITllBNnN6TEhSV3JzLUdFSDduQklQOVRaUjgifQ.eyJ1c2VyIjp7InVzZXJJZCI6IjY1OTQxMTE1M2MwNGY3YWUyMWQ4MjFlOSIsInB1YmxpY1VzZXJJZCI6IjIiLCJkZXZpY2VJbmZvIjp7ImtpbmQiOiJpb3MiLCJtb2RlbCI6InN0cmluZyIsInNka1ZlcnNpb24iOiJzdHJpbmcifSwibmV0d29ya0lkIjoiNjU0NzQ2NTFjNTBmN2MwNjI1N2I1MDRmIiwiZGlzcGxheU5hbWUiOiJIb3NzYW0iLCJyZWZyZXNoVG9rZW4iOiI5NjY0M2I2M2UxMDczMDMzMTU3MjJkNGNlMWM0M2Y4NDgxZTk2MWZjZTc2NWZjZTRmYzRiZThjYzdkNzNmZDMzN2E1NDA5MDIzMzE3MDdmOSJ9LCJzdWIiOiI2NTk0MTExNTNjMDRmN2FlMjFkODIxZTkiLCJpc3MiOiJodHRwczovL2FwaS5ldS5hbWl0eS5jbyIsImlhdCI6MTcwNTQwNTU3NCwiZXhwIjoxNzA3OTk3NTc0fQ.slQ0F76hgGtbL6Z0PW0t1UWQRtJ-0tkYodOGkzrK6FWNME2uaZSK7YesNkQAvA0_NSadUbsmn-K0QL4fnZC4d55dUE2YhTTQbny3h6WlQbpDbUQysmEqAnVMWquEaInwr2ieAOC3bauOcSiBmQ73BOYa_lwVoZ2jAQMkk2e6rsNAwuN4D0VMdD_SRwMIZyguuhUn6gb9E-FF19I5hS_YUdFme6I9IPOs8jhJdc_GPliQZvEknATbX8jjXsluN7b4AiUIBYZ6lq1zA5N0btB8jbvBV88jd2E-dXSDDie7-zp-Gt49gJ6aeNsdH16-WGKHJ0ZK3A9gL_Km1mNYrO-UyA',
 }
})   


const initAxios = (store: TStore) => {
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
        const token: any = await AsyncStorage.getItem("USER_TOKEN")
        const authorization = `Bearer ${token}`;
        const authHeaders = { authorization, };
        assign(config.headers, authHeaders);
        return config;
    };
    const unautherizedHandling = (error: AxiosError) => {
        const { status, data } = (error?.response as any) || {};
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

export default initAxios;