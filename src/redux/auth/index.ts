import {createSlice} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EntityKeys} from 'src/redux/keys';
import {RootState} from '../store';
import {initialState} from './types';
import thunks from './thunks';

const slice = createSlice({
  name: EntityKeys.AUTH,
  initialState: initialState,
  reducers: {
    logout: () => initialState,
    chnageIsSignedUp: (state, action) => {
      state.signedUp = action.payload;
    },
    chnageReseted: (state, action) => {
      state.reset = action.payload;
    },
    chnageVerified: (state, action) => {
      state.verified = false;
    },
    chnageisAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    chnageToken: (state, action) => {
      state.Token = action.payload;
    },
  },
  extraReducers(builder) {
    //doSignIn
    // builder.addCase(thunks.doSignIn.fulfilled, (state, action) => {
    //   AsyncStorage.setItem('USER_TOKEN', action.payload.data?.token);
    //   state.currentUser = action.payload?.data;
    //   state.isAuth = true;
    // });
    // builder.addCase(thunks.doSignIn.rejected, (state, action: any) => {
    //   console.log(action.payload.data);
    //   if (action.payload.data.message == 'Validation error.') {
    //     Toast.show({
    //       type: 'error',
    //       text1: action.payload.data.error,
    //     });
    //   } else {
    //     Toast.show({
    //       type: 'error',
    //       text1: action.payload.data.message,
    //     });
    //   }
    // });

    //doVerifyOTP
    // builder.addCase(thunks.doVerifyOTP.fulfilled, (state, action) => {
    //   if (
    //     action.payload.message ==
    //     'Code verified, continue to change your password.'
    //   ) {
    //     state.verified = true;
    //   } else {
    //     AsyncStorage.setItem('USER_TOKEN', action.payload.data?.token);
    //     state.currentUser = action.payload?.data;
    //     state.isAuth = true;
    //   }
    // });
    // builder.addCase(thunks.doVerifyOTP.rejected, (state, action: any) => {
    //   console.log(action.payload.data);
    //   if (action.payload.data.message == 'Validation error.') {
    //     Toast.show({
    //       type: 'error',
    //       text1: action.payload.data.error,
    //     });
    //   } else {
    //     Toast.show({
    //       type: 'error',
    //       text1: action.payload.data.message,
    //     });
    //   }
    // });

    //doResetPassword
    // builder.addCase(thunks.doResetPassword.fulfilled, (state, action) => {
    //   state.reset = true;
    //   Toast.show({
    //     type: 'success',
    //     text1: 'Check code in your e-mail',
    //   });
    // });
    // builder.addCase(thunks.doResetPassword.rejected, (state, action: any) => {
    //   console.log(action.payload.data);
    //   if (action.payload.data.message == 'Validation error.') {
    //     Toast.show({
    //       type: 'error',
    //       text1: action.payload.data.error,
    //     });
    //   } else {
    //     Toast.show({
    //       type: 'error',
    //       text1: action.payload.data.message,
    //     });
    //   }
    // });

    //doConfirmPassword
    // builder.addCase(thunks.doConfirmPassword.fulfilled, (state, action) => {
    //   AsyncStorage.setItem('USER_TOKEN', action.payload.data?.token);
    //   state.currentUser = action.payload?.data;
    //   state.isAuth = true;
    // });
    // builder.addCase(thunks.doConfirmPassword.rejected, (state, action: any) => {
    //   if (action.payload.data.message == 'Validation error.') {
    //     Toast.show({
    //       type: 'error',
    //       text1: action.payload.data.error,
    //     });
    //   } else {
    //     Toast.show({
    //       type: 'error',
    //       text1: action.payload.data.message,
    //     });
    //   }
    // });

    //doSignUpCompany
    builder.addCase(thunks.doSignUpCompany.fulfilled, (state, action) => {
      state.signedUp = true;
      Toast.show({
        type: 'success',
        text1: 'Check code in your e-mail',
      });
    });
    builder.addCase(thunks.doSignUpCompany.rejected, (state, action: any) => {
      console.log(action.payload.data);
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action.payload.data.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action.payload.data.message,
        });
      }
    });
    //doSignUpRecruiter
    builder.addCase(thunks.doSignUpRecruiter.fulfilled, (state, action) => {
      state.signedUp = true;
      Toast.show({
        type: 'success',
        text1: 'Check code in your e-mail',
      });
    });
    builder.addCase(thunks.doSignUpRecruiter.rejected, (state, action: any) => {
      console.log(action.payload.data);
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action.payload.data.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action.payload.data.message,
        });
      }
    });
    //doSignUpJobSeeker

    builder.addCase(thunks.doSignUpJobSeeker.fulfilled, (state, action) => {
      state.signedUp = true;
      Toast.show({
        type: 'success',
        text1: 'Check code in your e-mail',
      });
    });
    builder.addCase(thunks.doSignUpJobSeeker.rejected, (state, action: any) => {
      console.log(action.payload.data);
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action.payload.data.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action.payload.data.message,
        });
      }
    });

    //doGetMyProfile
    // builder.addCase(thunks.doGetMyProfile.fulfilled, (state, action) => {
    //   AsyncStorage.setItem('USER_TOKEN', action.payload.data?.token);
    //   state.currentUser = action.payload?.data;
    // });
    // builder.addCase(thunks.doGetMyProfile.rejected, (state, action: any) => {
    //   console.log(action.payload.data);
    //   if (action.payload.data.message == 'Validation error.') {
    //     Toast.show({
    //       type: 'error',
    //       text1: action.payload.data.error,
    //     });
    //   } else {
    //     Toast.show({
    //       type: 'error',
    //       text1: action.payload.data.message,
    //     });
    //   }
    // });

    //doEditPassword
    // builder.addCase(thunks.doEditPassword.fulfilled, (state, action) => {
    //   state.reset = true;
    //   Toast.show({
    //     type: 'success',
    //     text1: 'Password changed successfully',
    //   });
    // });
    // builder.addCase(thunks.doEditPassword.rejected, (state, action: any) => {
    //   console.log(action.payload.data);
    //   if (action.payload.data.message == 'Validation error.') {
    //     Toast.show({
    //       type: 'error',
    //       text1: action.payload.data.error,
    //     });
    //   } else {
    //     Toast.show({
    //       type: 'error',
    //       text1: action.payload.data.message,
    //     });
    //   }
    // });
  },
});
export const selectUser = (state: RootState) => state.auth.currentUser;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectIsSignedUp = (state: RootState) => state.auth.signedUp;
export const selectReseted = (state: RootState) => state.auth.reset;
export const selectVerified = (state: RootState) => state.auth.verified;
export const selectToken = (state: RootState) => state.auth.Token;
// export const selectSigned = (state: RootState) => state.auth.signUp
// export const selectChanged = (state: RootState) => state.auth.changed
// export const selectCountries = (state: RootState) => state.auth.countries
// export const selectCities = (state: RootState) => state.auth.cities
const AuthSlice = {
  thunks,
  slice,
  logout: slice.actions.logout,
  chnageisAuth: slice.actions.chnageisAuth,
  chnageIsSignedUp: slice.actions.chnageIsSignedUp,
  chnageReseted: slice.actions.chnageReseted,
  chnageVerified: slice.actions.chnageVerified,
  chnageToken: slice.actions.chnageToken,
};
export default AuthSlice;
