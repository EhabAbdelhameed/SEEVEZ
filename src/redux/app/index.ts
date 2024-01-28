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
    chnageIndsturyData: (state, action) => {
      state.IndsturyData = action.payload;
    },
    chnageCompaniesData: (state, action) => {
      state.CompaniesData = action.payload;
    },
    changeYearsOfExperience: (state, action) => {
      state.YearsOfExperience = action.payload;
    },
    changeJobType: (state, action) => {
      state.JobType = action.payload;
    },
    changeEducationLevel: (state, action) => {
      state.EducationLevel = action.payload;
    },
  },
  extraReducers(builder) {
    //doAddSkills  Your Skills has been added successfully.
    builder.addCase(thunks.doAddSkills.fulfilled, (state, action) => {
      state.done = true;
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
    //
    builder.addCase(thunks.doAddIntersts.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: 'Your Skills has been added successfully',
      });
    });
    builder.addCase(thunks.doAddIntersts.rejected, (state, action: any) => {
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
    builder.addCase(thunks.doAddEducation.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: 'success added',
      });
    });
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
    builder.addCase(thunks.doAddExperience.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: 'success added',
      });
    });
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
    builder.addCase(thunks.doAddTrainingCourse.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: 'success added',
      });
    });
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
    builder.addCase(thunks.doAddReferenceCheck.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: 'success added',
      });
    });
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
    builder.addCase(thunks.doAddAchievement.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: 'Hey! Your Achievement has been added successfully',
      });
    });
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
    //doGetCompaniesName
    builder.addCase(thunks.GetCompaniesName.fulfilled, (state, action) => {
      console.log(action.payload?.data)
      state.CompaniesData = action.payload?.data;
 
    });
    builder.addCase(thunks.GetCompaniesName.rejected, (state, action: any) => {
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
      state.done = true;
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
    builder.addCase(thunks.doAddPersonalInfo.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: 'success added',
      });
    });
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
    //GetIndustry
    builder.addCase(thunks.GetIndustry.fulfilled, (state, action) => {
      state.IndsturyData = action.payload?.data;
    });
    builder.addCase(thunks.GetIndustry.rejected, (state, action: any) => {
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
    //GetYearsOfExperience
    builder.addCase(thunks.GetYearsOfExperience.fulfilled, (state, action) => {
    
     state.YearsOfExperience = action.payload?.data;
    });
    builder.addCase(thunks.GetYearsOfExperience.rejected, (state, action: any) => {
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
     //GetJobType
     builder.addCase(thunks.GetJobType.fulfilled, (state, action) => {
       
      state.JobType = action.payload?.data;
     });
     builder.addCase(thunks.GetJobType.rejected, (state, action: any) => {
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
     //GetEducationLevel
     builder.addCase(thunks.GetEducationLevel.fulfilled, (state, action) => {
      //  console.log(action.payload?.data)
      state.EducationLevel = action.payload?.data;
     });
     builder.addCase(thunks.GetEducationLevel.rejected, (state, action: any) => {
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
    builder.addCase(thunks.doUploadCV.fulfilled, (state, action) => {
      state.done = true;

      Toast.show({
        type: 'success',

        text1: 'success added',
      });
    });
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
    //doAddAbout
    builder.addCase(thunks.doAddAbout.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: 'success added',
      });
    });
    builder.addCase(thunks.doAddAbout.rejected, (state, action: any) => {
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
    // doAddCompanyInfo
    builder.addCase(thunks.doAddCompanyInfo.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',
        text1: 'success added',
      });
    });
    builder.addCase(thunks.doAddCompanyInfo.rejected, (state, action: any) => {
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
    // doAddCompanyAbout
    builder.addCase(thunks.doAddCompanyAbout.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: 'success added',
      });
    });
    builder.addCase(thunks.doAddCompanyAbout.rejected, (state, action: any) => {
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
    // doAddUploadPortfolio
    builder.addCase(thunks.doAddUploadPortfolio.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: 'success added',
      });
    });
    builder.addCase(
      thunks.doAddUploadPortfolio.rejected,
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
export const selectIndstruy = (state: RootState) => state.app.IndsturyData;
export const selectCompanies = (state: RootState) => state.app.CompaniesData;

export const selectYears = (state: RootState) => state.app.YearsOfExperience;
export const selectJobtype = (state: RootState) => state.app.JobType;
export const selectEducation = (state: RootState) => state.app.EducationLevel;


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
  changeIndsturyData: slice.actions.chnageIndsturyData,
  changeCompainesData:slice.actions.chnageCompaniesData,
  changeYearsOfExperience: slice.actions.changeYearsOfExperience,
  changeJobType: slice.actions.changeJobType,
  changeEducationLevel: slice.actions.changeEducationLevel,


};
export default AppSlice;
