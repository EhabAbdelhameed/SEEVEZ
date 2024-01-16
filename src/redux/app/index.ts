import {createSlice} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import {EntityKeys} from 'src/redux/keys';
import {RootState} from '../store';
import {initialState} from './types';
import thunks from './thunks';

const slice = createSlice({
  name: EntityKeys.APP,
  initialState: initialState,
  reducers: {
    logout: () => initialState,
    changeDone: (state, action) => {
      state.done = action.payload;
    },
    changeNav: (state, action) => {
      state.Nav = action.payload;
    },
    changePlaceOrderData: (state, action) => {
      state.placeOrderData = action.payload;
    },
    changePromoValue: (state, action) => {
      state.PromoValue = action.payload;
    },
    changeSearch: (state, action) => {
      state.Search = action.payload;
    },
  },
  extraReducers(builder) {
    //doAddSkills  Your Skills has been added successfully.
    builder.addCase(thunks.doAddSkills.fulfilled, (state, action) => {
      Toast.show({
        type: 'success',

        text1: 'Your Skills has been added successfully',
      });
    });
    builder.addCase(thunks.doAddSkills.rejected, (state, action: any) => {
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
    //doAddEducation
    builder.addCase(thunks.doAddEducation.fulfilled, (state, action) => {});
    builder.addCase(thunks.doAddEducation.rejected, (state, action: any) => {
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

    //doAddExperience
    builder.addCase(thunks.doAddExperience.fulfilled, (state, action) => {});
    builder.addCase(thunks.doAddExperience.rejected, (state, action: any) => {
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
    //doAddTrainingCourse
    builder.addCase(
      thunks.doAddTrainingCourse.fulfilled,
      (state, action) => {},
    );
    builder.addCase(
      thunks.doAddTrainingCourse.rejected,
      (state, action: any) => {
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
      },
    );
    //doAddReferenceCheck
    builder.addCase(
      thunks.doAddReferenceCheck.fulfilled,
      (state, action) => {},
    );
    builder.addCase(
      thunks.doAddReferenceCheck.rejected,
      (state, action: any) => {
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
      },
    );
    //doAddAchievement
    builder.addCase(thunks.doAddAchievement.fulfilled, (state, action) => {});
    builder.addCase(thunks.doAddAchievement.rejected, (state, action: any) => {
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
    //doAddLanguages
    builder.addCase(thunks.doAddLanguages.fulfilled, (state, action) => {
        Toast.show({
            type: 'success',
    
            text1: 'Your Language has been added successfully',
          });
    });
    builder.addCase(thunks.doAddLanguages.rejected, (state, action: any) => {
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
    //doAddPersonalInfo
    builder.addCase(thunks.doAddPersonalInfo.fulfilled, (state, action) => {});
    builder.addCase(thunks.doAddPersonalInfo.rejected, (state, action: any) => {
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
    //doUploadCV
    builder.addCase(thunks.doUploadCV.fulfilled, (state, action) => {});
    builder.addCase(thunks.doUploadCV.rejected, (state, action: any) => {
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
    //doGetLatestOrder
  },
});

export const selectBranches = (state: RootState) => state.app.Branches;
export const selectCategories = (state: RootState) => state.app.categories;
export const selectMenu = (state: RootState) => state.app.Menu;
export const selectHomeData = (state: RootState) => state.app.HomeData;
export const selectLatestOrder = (state: RootState) => state.app.order;
export const selectCartItems = (state: RootState) => state.app.CartItems;
export const selectProductDetail = (state: RootState) =>
  state.app.ProductDetail;
export const selectFavourites = (state: RootState) => state.app.Favourites;
export const selectFAQS = (state: RootState) => state.app.FAQS;
export const selectAddresses = (state: RootState) => state.app.Addresses;
export const selectAreas = (state: RootState) => state.app.Areas;
export const selectOrders = (state: RootState) => state.app.orders;
export const selectRewards = (state: RootState) => state.app.Rewards;
export const selectWheelNumbers = (state: RootState) => state.app.wheelNumbers;
export const selectDone = (state: RootState) => state.app.done;
export const selectNav = (state: RootState) => state.app.Nav;
export const selectplaceOrderData = (state: RootState) =>
  state.app.placeOrderData;
export const selectPromoValue = (state: RootState) => state.app.PromoValue;
export const selectDeals = (state: RootState) => state.app.deals;
export const selectPoints = (state: RootState) => state.app.points;
export const selectSearch = (state: RootState) => state.app.Search;
export const selectBranchId = (state: RootState) =>
  state.app.HomeData?.branch?.id;

const AppSlice = {
  slice,
  logout: slice.actions.logout,
  changeDone: slice.actions.changeDone,
  changeNav: slice.actions.changeNav,
  changePlaceOrderData: slice.actions.changePlaceOrderData,
  changePromoValue: slice.actions.changePromoValue,
  changeSearch: slice.actions.changeSearch,
};
export default AppSlice;
