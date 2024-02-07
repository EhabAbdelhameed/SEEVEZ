import {createSlice} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EntityKeys} from 'src/redux/keys';
import {RootState} from '../store';
import {initialState} from './types';
import thunks from './thunks';
import {Alert} from 'react-native';
import AppThunks from '../app/thunks';

const slice = createSlice({
  name: EntityKeys.AUTH,
  initialState: initialState,
  reducers: {
    logout: () => initialState,
    chnageIsSignedUp: (state, action) => {
      state.signedUp = action.payload;
    },
    chnageIsCompanyAdmin: (state, action) => {
      state.signedCompanyAdmin = action.payload;
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
    chnageCurrentData: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers(builder) {
    // doSignIn
    builder.addCase(thunks.doSignIn.fulfilled, (state, action) => {
      // console.log("HELLO FORM INDEX ",)

      AsyncStorage.setItem('USER_TOKEN', action.payload.data?.token);
      AsyncStorage.setItem('USER_ACCESS_TOKEN', action?.payload?.data?.user_data?.user_amity?.accessToken);

      state.currentUser = action.payload?.data;

      state.isAuth = true;
    });
    builder.addCase(thunks.doSignIn.rejected, (state, action: any) => {
      // console.log(action.payload.data);
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
   // doGetProfile
   builder.addCase(AppThunks.GetProfileInfo.fulfilled, (state, action) => {
   
   
    state.currentUser = action.payload?.data;

   
  });
  builder.addCase(AppThunks.GetProfileInfo.rejected, (state, action: any) => {
    // console.log(action.payload.data);
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
    // doVerifyOTP
    builder.addCase(thunks.doVerifyOTP.fulfilled, (state, action) => {
     
      state.verified = true;
      AsyncStorage.setItem('USER_TOKEN', action.payload?.data?.token);
   
      Toast.show({
        type: 'success',
        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doVerifyOTP.rejected, (state, action: any) => {
      
      if(action?.payload?.status==201){
        state.signedCompanyAdmin=true
        state.verified = true;
        Toast.show({
          type: 'success',
          text1: action.payload.data.message,
        });
      }
      if (action.payload.data.message == 'Validation error.') {
        if(action?.payload?.status==201){
          state.signedCompanyAdmin=true
          state.verified = true;
          Toast.show({
            type: 'success',
            text1: action.payload.data.message,
          });
        }else{
          Toast.show({
            type: 'error',
            text1: action.payload.data.error,
          });
        }
       
      } else {
        if(action?.payload?.status==201){
       
          Toast.show({
            type: 'success',
            text1: action.payload.data.message,
          });
        }else{
          Toast.show({
            type: 'error',
            text1: action.payload.data.message,
          });
        }

       
      }
    });
    //doResendCode
    builder.addCase(thunks.doResendCode.fulfilled, (state, action) => {
      // state.verified = true;
      Toast.show({
        type: 'success',
        text1:action?.payload?.message,
      });
    });
    builder.addCase(thunks.doResendCode.rejected, (state, action: any) => {
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
    //doResetPassword
    builder.addCase(thunks.doResetPassword.fulfilled, (state, action) => {
      state.reset = true;
      Toast.show({
        type: 'success',
        text1: action?.payload?.message,
      });
     
    });
    builder.addCase(thunks.doResetPassword.rejected, (state, action: any) => {
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

    //doForgetPassword
    builder.addCase(thunks.doForgetPassword.fulfilled, (state, action) => {
      state.reset = true;
      Toast.show({
        type: 'success',
        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doForgetPassword.rejected, (state, action: any) => {
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

    //doSignUpCompany
    builder.addCase(thunks.doSignUpCompany.fulfilled, (state, action) => {
     
      AsyncStorage.setItem('USER_ACCESS_TOKEN', action?.payload?.data?.accessToken)

      state.currentUser=action?.payload?.data
      state.signedUp = true;
      Toast.show({
        type: 'success',
        text1:action?.payload?.message,
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
      //doSignUpCompanyAdmin
      builder.addCase(thunks.doSignUpCompanyAdmin.fulfilled, (state, action) => {
     
        AsyncStorage.setItem('USER_ACCESS_TOKEN', action?.payload?.data?.accessToken)
  
        state.currentUser=action?.payload?.data
        state.signedUp = true;
        Toast.show({
          type: 'success',
          text1: action?.payload?.message,
        });
      });
      builder.addCase(thunks.doSignUpCompanyAdmin.rejected, (state, action: any) => {
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
      AsyncStorage.setItem('USER_ACCESS_TOKEN', action?.payload?.data?.accessToken)
      Toast.show({
        type: 'success',
        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doSignUpRecruiter.rejected, (state, action: any) => {
    
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
       
        AsyncStorage.setItem('USER_ACCESS_TOKEN', action?.payload?.data?.accessToken)
      Toast.show({
        type: 'success',
        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doSignUpJobSeeker.rejected, (state, action: any) => {
    
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
export const selectIsSignUpCompany = (state: RootState) => state.auth.signedCompanyAdmin;


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
  chnageIsCompanyAdmin:slice.actions.chnageIsCompanyAdmin,
  chnageReseted: slice.actions.chnageReseted,
  chnageVerified: slice.actions.chnageVerified,
  chnageToken: slice.actions.chnageToken,
  changeCurentData:slice.actions.chnageCurrentData
  
};
export default AuthSlice;
