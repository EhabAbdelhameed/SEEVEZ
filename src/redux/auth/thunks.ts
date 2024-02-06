import {createAsyncThunk} from '@reduxjs/toolkit';
import AuthAPI from './api';
// import AppAPI from "store/app/api";

const doSignUpCompany: any = createAsyncThunk<any, any, any>(
  'auth/signUpCompany',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.registerCompany(data);
       console.log(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
//doSignUpCompanyAdmin
const doSignUpCompanyAdmin: any = createAsyncThunk<any, any, any>(
  'auth/doSignUpCompanyAdmin',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.registerCompanyAdmin(data);
       console.log(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 201 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const doSignUpRecruiter: any = createAsyncThunk<any, any, any>(
  'auth/signUpRecruiter',
  async (data: any, thunkApi: any) => {
   
    try {
      const response = await AuthAPI.registerRecruiter(data);
       console.log((JSON.stringify(response)))
      
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
const doSignUpJobSeeker: any = createAsyncThunk<any, any, any>(
  'auth/signUpJobSeeker',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.registerJobSeeker(data);
      console.log(JSON.stringify(response.data))
      

      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const doSignIn: any = createAsyncThunk<any, any, any>(
  'auth/login',
  async (data:any, thunkApi: any) => {
    console.log(data)
    try {
      const response = await AuthAPI.login(data);
      console.log(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const doForgetPassword: any = createAsyncThunk<any, any, any>(
  'auth/reset',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.forgotPassword(data);
      // console.warn(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const doVerifyOTP: any = createAsyncThunk<any, any, any>(
  'auth/verifyOTP',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.verifyOTP(data);
      console.log(JSON.stringify(response.status))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 201 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
const doResendCode: any = createAsyncThunk<any, any, any>(
  'auth/ResendCode',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.resendCode(data);
      // console.log(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
const doResetPassword: any = createAsyncThunk<any, any, any>(
  'auth/change',
  
  async (data: any, thunkApi: any) => {
    console.log(data)
    try {
      const response = await AuthAPI.restPassword(data);
      console.warn(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

// const doChangeProfile: any = createAsyncThunk<any, any, any>(
//   'auth/changeProfile',
//   async (data: any, thunkApi: any) => {
//     try {
//       const response = await AuthAPI.changeProfile(data);
//       // alert(JSON.stringify(response.data))
//       if (
//         response.status == 400 ||
//         response.status == 401 ||
//         response.status == 403 ||
//         response.status == 404 ||
//         response.status == 422 ||
//         response.status == 500 ||
//         response.status == 503
//       ) {
//         throw response;
//       }
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   },
// );

// const doGetMyProfile: any = createAsyncThunk<any, any, any>(
//   'auth/getMyProfile',
//   async (_, thunkApi: any) => {
//     try {
//       const response = await AuthAPI.getProfile();
//       // alert(JSON.stringify(response.data))
//       if (
//         response.status == 400 ||
//         response.status == 401 ||
//         response.status == 403 ||
//         response.status == 404 ||
//         response.status == 422 ||
//         response.status == 500 ||
//         response.status == 503
//       ) {
//         throw response;
//       }
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   },
// );

// const doEditProfile: any = createAsyncThunk<any, any, any>(
//   'auth/editProfile',
//   async (data: any, thunkApi: any) => {
//     try {
//       const response = await AuthAPI.editProfile(data);
//       // alert(JSON.stringify(response.data))
//       if (
//         response.status == 400 ||
//         response.status == 401 ||
//         response.status == 403 ||
//         response.status == 404 ||
//         response.status == 422 ||
//         response.status == 500 ||
//         response.status == 503
//       ) {
//         throw response;
//       }
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   },
// );

// const doEditPassword: any = createAsyncThunk<any, any, any>(
//   'auth/editPassword',
//   async (data: any, thunkApi: any) => {
//     try {
//       const response = await AuthAPI.editPassword(data);
//       // alert(JSON.stringify(response.data))
//       if (
//         response.status == 400 ||
//         response.status == 401 ||
//         response.status == 403 ||
//         response.status == 404 ||
//         response.status == 422 ||
//         response.status == 500 ||
//         response.status == 503
//       ) {
//         throw response;
//       }
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   },
// );

// const doDeleteAccount: any = createAsyncThunk<any, any, any>(
//   'auth/deleteAccount',
//   async (_: any, thunkApi: any) => {
//     try {
//       const response = await AuthAPI.deleteAccount();
//       // alert(JSON.stringify(response.data))
//       if (
//         response.status == 400 ||
//         response.status == 401 ||
//         response.status == 403 ||
//         response.status == 404 ||
//         response.status == 422 ||
//         response.status == 500 ||
//         response.status == 503
//       ) {
//         throw response;
//       }
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   },
// );

const AuthThunks = {
  doSignUpCompany,
  doSignUpCompanyAdmin,
  doSignUpRecruiter,
  doSignUpJobSeeker,

  doSignIn,
  doForgetPassword,
  doVerifyOTP,
  doResetPassword,
  doResendCode
//   doChangeProfile,

//   doGetMyProfile,
//   doEditProfile,
//   doEditPassword,
//   doDeleteAccount,
};

export default AuthThunks;
