import { createSlice } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import { EntityKeys } from 'src/redux/keys';
import { RootState } from '../store';
import { initialState } from './types';
import thunks from './thunks';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    changePhotoData: (state, action) => {
      state.photoData = action.payload;
    },
    changeImage: (state, action) => {
      state.photoData.image = action.payload;
    },
    changeAddonesCaption: (state, action) => {
      state.photoData.addonesCaption = action.payload;
    },
    changelocation: (state, action) => {
      state.photoData.location = action.payload;
    },
    changePDF: (state, action) => {
      state.photoData.pdf = action.payload;
    },
    changeTagPeopel: (state, action) => {
      state.photoData.tagPepoles = action.payload;
    },
    changeSearchPeopelData: (state, action) => {
      state.searchPeopelData = action.payload;
    },
    changeKey: (state, action) => {
      state.photoData.key = action.payload;
    },
    changeTagNames: (state, action) => {
      state.photoData.names = action.payload;
    },
    changeMarket: (state, action) => {
      state.photoData.market = action.payload;
    },
    changeExterinalLinks: (state, action) => {
      state.photoData.exterinalLinks = action.payload;
    },

    // changeSearch: (state, action) => {
    //   state.Search = action.payload;
    // },
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
    changeWorkType: (state, action) => {
      state.WorkType = action.payload;
    },
    changeEducationLevel: (state, action) => {
      state.EducationLevel = action.payload;
    },
    changePostsData: (state, action) => {
      state.postsData = action.payload;
    },
    changeLike: (state, action) => {
      state.like = action.payload;
    },
    changeFollowingList: (state, action) => {
      state.FollowingList = action.payload;
    },
    changeAccessToken: (state, action) => {
      state.AccessToken = action.payload;
    },
    changePolls: (state, action) => {
      state.polls = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
    changeGlobalReals: (state, action) => {
      state.GlobalReals = action.payload;
    },
    changeGlobalBools: (state, action) => {
      state.GlobalBools = action.payload;
    },
    changeToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers(builder) {
    //doAddSkills  Your Skills has been added successfully.
    builder.addCase(thunks.doAddSkills.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });

    //doUpdateSkills
    builder.addCase(thunks.doUpdateSkills.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doUpdateSkills.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doDeleteSkills
    builder.addCase(thunks.doDeleteSkills.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doDeleteSkills.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doDeleteVideoCV
    builder.addCase(thunks.doDeleteVideoCV.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doDeleteVideoCV.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doUploadPhotoReel
    builder.addCase(thunks.doUploadPhotoReel.fulfilled, (state, action) => {
      state.done = true;

      state.photoData = {
        image: {},
        addonesCaption: '',
        location: '',
        pdf: [],
        tagPepoles: [],
        key: '',
        names: [],
        market: [],
        exterinalLinks: [],
      };
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doUploadPhotoReel.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });

    //doAddAudio
    builder.addCase(thunks.doAddAudio.fulfilled, (state, action) => {
      state.done = true;
      state.photoData = {
        image: {},
        addonesCaption: '',
        location: '',
        pdf: [],
        tagPepoles: [],
        key: '',
        names: [],
        market: [],
        exterinalLinks: [],
      };
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doAddAudio.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doAddIntersts
    builder.addCase(thunks.doAddIntersts.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
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
    //doUpdateIntersts
    builder.addCase(thunks.doUpdateIntersts.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doUpdateIntersts.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doDeleteIntersts
    builder.addCase(thunks.doDeleteIntersts.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doDeleteIntersts.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });

    //doAddEducation
    builder.addCase(thunks.doAddEducation.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doUpdateEducation
    builder.addCase(thunks.doUpdateEducation.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doUpdateEducation.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doDeleteEducation
    builder.addCase(thunks.doDeleteEducation.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doDeleteEducation.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });

    //doAddExperience
    builder.addCase(thunks.doAddExperience.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doUpdateExperience
    builder.addCase(thunks.doUpdateExperience.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(
      thunks.doUpdateExperience.rejected,
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
          if (action?.payload?.data?.message == 'Access token is invalid.') {
            // state.AccessToken = true;
          }
        }
      },
    );
    //doDeleteExperience
    builder.addCase(thunks.doDeleteExperience.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(
      thunks.doDeleteExperience.rejected,
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
          if (action?.payload?.data?.message == 'Access token is invalid.') {
            // state.AccessToken = true;
          }
        }
      },
    );
    //doAddTrainingCourse
    builder.addCase(thunks.doAddTrainingCourse.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
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
          if (action?.payload?.data?.message == 'Access token is invalid.') {
            // state.AccessToken = true;
          }
        }
      },
    );
    //doUpdateTrainingCourse
    builder.addCase(
      thunks.doUpdateTrainingCourse.fulfilled,
      (state, action) => {
        state.done = true;
        Toast.show({
          type: 'success',

          text1: action?.payload?.message,
        });
      },
    );
    builder.addCase(
      thunks.doUpdateTrainingCourse.rejected,
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
          if (action?.payload?.data?.message == 'Access token is invalid.') {
            // state.AccessToken = true;
          }
        }
      },
    );
    //doDeleteTrainingCourse
    builder.addCase(
      thunks.doDeleteTrainingCourse.fulfilled,
      (state, action) => {
        state.done = true;
        Toast.show({
          type: 'success',

          text1: action?.payload?.message,
        });
      },
    );
    builder.addCase(
      thunks.doDeleteTrainingCourse.rejected,
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
          if (action?.payload?.data?.message == 'Access token is invalid.') {
            // state.AccessToken = true;
          }
        }
      },
    );

    //doAddReferenceCheck
    builder.addCase(thunks.doAddReferenceCheck.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
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
          if (action?.payload?.data?.message == 'Access token is invalid.') {
            // state.AccessToken = true;
          }
        }
      },
    );
    //doUpdateReferenceCheck
    builder.addCase(
      thunks.doUpdateReferenceCheck.fulfilled,
      (state, action) => {
        state.done = true;
        Toast.show({
          type: 'success',

          text1: action?.payload?.message,
        });
      },
    );
    builder.addCase(
      thunks.doUpdateReferenceCheck.rejected,
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
          if (action?.payload?.data?.message == 'Access token is invalid.') {
            // state.AccessToken = true;
          }
        }
      },
    );
    //doDeleteReferenceCheck
    builder.addCase(
      thunks.doDeleteReferenceCheck.fulfilled,
      (state, action) => {
        state.done = true;
        Toast.show({
          type: 'success',

          text1: action?.payload?.message,
        });
      },
    );
    builder.addCase(
      thunks.doDeleteReferenceCheck.rejected,
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
          if (action?.payload?.data?.message == 'Access token is invalid.') {
            // state.AccessToken = true;
          }
        }
      },
    );

    //doAddAchievement
    builder.addCase(thunks.doAddAchievement.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });

    //searchForTagPeopel
    builder.addCase(thunks.searchForTagPeopel.fulfilled, (state, action) => {
      state.searchPeopelData = action?.payload?.data;
    });
    builder.addCase(
      thunks.searchForTagPeopel.rejected,
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
          if (action?.payload?.data?.message == 'Access token is invalid.') {
            // state.AccessToken = true;
          }
        }
      },
    );
    //doUpdateAchievement
    builder.addCase(thunks.doUpdateAchievement.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(
      thunks.doUpdateAchievement.rejected,
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
          if (action?.payload?.data?.message == 'Access token is invalid.') {
            // state.AccessToken = true;
          }
        }
      },
    );
    //doDeleteAchievement
    builder.addCase(thunks.doDeleteAchievement.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(
      thunks.doDeleteAchievement.rejected,
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
          if (action?.payload?.data?.message == 'Access token is invalid.') {
            // state.AccessToken = true;
          }
        }
      },
    );

    //doGetCompaniesName
    builder.addCase(thunks.GetCompaniesName.fulfilled, (state, action) => {
      console.log(action.payload?.data);
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //GetMyReels
    builder.addCase(thunks.GetMyReels.fulfilled, (state, action) => {
      // console.log("GET MY ALL REELS ",JSON.stringify(action.payload?.posts))
      state.postsData = action.payload?.posts;
      state.polls = action.payload?.polls;
    });
    builder.addCase(thunks.GetMyReels.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
      // if (action?.payload?.data?.message == 'Access token is invalid.') {
      //   ////// state.AccessToken = true;
      // }
    });
    //GetOnePost
    builder.addCase(thunks.GetOnePost.fulfilled, (state, action) => {
      console.log('GET One REEL ', JSON.stringify(action.payload));
    });
    builder.addCase(thunks.GetOnePost.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
      // if (action?.payload?.data?.message == 'Access token is invalid.') {
      //   ////// state.AccessToken = true;
      // }
    });
    //doGetFollowingList
    builder.addCase(thunks.doGetFollowingList.fulfilled, (state, action) => {
      console.log("yarb", action.payload.data?.users)
      state.FollowingList = action.payload.data?.users;
      const saveFollowingListToStorage = async (followingList: any) => {
        try {
          // Convert the followingList object to a JSON string
          const followingListJSON = JSON.stringify(followingList);
          // Save the JSON string to AsyncStorage under the key 'FollowingList'
          await AsyncStorage.setItem('FollowingList', followingListJSON);
          console.log(followingListJSON);
        } catch (error) {
          console.error('Error saving FollowingList to AsyncStorage:', error);
          // Handle error here, such as showing an alert to the user
        }
      };

      // Call this function whenever you want to save the state to AsyncStorage
      saveFollowingListToStorage(action.payload.data?.users);
    });

    //doGetListUsers
    builder.addCase(thunks.doGetListUsers.fulfilled, (state, action) => {
      state.listUsers = action.payload.data?.data;
    });
    //doAddLanguages
    builder.addCase(thunks.doAddLanguages.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doUpdateLanguages
    builder.addCase(thunks.doUpdateLanguages.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doUpdateLanguages.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doDeleteLanguages
    builder.addCase(thunks.doDeleteLanguages.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doDeleteLanguages.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });

    //doAddPersonalInfo
    builder.addCase(thunks.doAddPersonalInfo.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //GetAccessToken
    builder.addCase(thunks.GetAccessToken.fulfilled, (state, action) => {
      // console.log('USER_ACCESS_TOKEN', action?.payload?.accessToken);
      AsyncStorage.setItem('USER_ACCESS_TOKEN', action?.payload?.accessToken);
    });
    builder.addCase(thunks.GetAccessToken.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //GetYearsOfExperience
    builder.addCase(thunks.GetYearsOfExperience.fulfilled, (state, action) => {
      state.YearsOfExperience = action.payload?.data;
    });
    builder.addCase(
      thunks.GetYearsOfExperience.rejected,
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
          if (action?.payload?.data?.message == 'Access token is invalid.') {
            // state.AccessToken = true;
          }
        }
      },
    );
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //GetJobType
    builder.addCase(thunks.GetWorkType.fulfilled, (state, action) => {
      state.WorkType = action.payload?.data;
    });
    builder.addCase(thunks.GetWorkType.rejected, (state, action: any) => {
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doUploadCV
    builder.addCase(thunks.doUploadCV.fulfilled, (state, action) => {
      state.done = true;

      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doUploadCV.rejected, (state, action: any) => {
      if (action?.payload?.data?.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.message,
        });
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doUploadVideoReel
    builder.addCase(thunks.doUploadVideoReel.fulfilled, (state, action) => {
      state.done = true;
      state.photoData = {
        image: {},
        addonesCaption: '',
        location: '',
        pdf: [],
        tagPepoles: [],
        key: '',
        names: [],
        market: [],
        exterinalLinks: [],
      };
      Toast.show({
        type: 'success',

        text1: 'Your Reels added Successfully !',
      });
    });
    builder.addCase(thunks.doUploadVideoReel.rejected, (state, action: any) => {
      if (action?.payload?.data?.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.message,
        });
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //CreatePoll
    builder.addCase(thunks.CreatePoll.fulfilled, (state, action) => {
      state.done = true;
      state.photoData = {
        image: {},
        addonesCaption: '',
        location: '',
        pdf: [],
        tagPepoles: [],
        key: '',
        names: [],
        market: [],
        exterinalLinks: [],
      };
      Toast.show({
        type: 'success',

        text1: 'Your Reels added Successfully !',
      });
    });
    builder.addCase(thunks.CreatePoll.rejected, (state, action: any) => {
      if (action?.payload?.data?.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.message,
        });
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doUploadVideoReelPoll
    builder.addCase(thunks.doUploadpoll.fulfilled, (state, action) => {
      state.done = true;

      Toast.show({
        type: 'success',

        text1: 'Your Reels added Successfully !',
      });
    });
    builder.addCase(thunks.doUploadpoll.rejected, (state, action: any) => {
      if (action?.payload?.data?.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.message,
        });
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doGetLatestOrder
    //doAddAbout
    builder.addCase(thunks.doAddAbout.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    // doAddCompanyInfo
    builder.addCase(thunks.doAddCompanyInfo.fulfilled, (state, action) => {
      state.done = true;
      console.log(JSON.stringify(action?.payload));

      Toast.show({
        type: 'success',
        text1: action?.payload?.message,
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    // doAddCompanyAbout
    builder.addCase(thunks.doAddCompanyAbout.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
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
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    // doAddUploadPortfolio
    builder.addCase(thunks.doAddUploadPortfolio.fulfilled, (state, action) => {
      state.done = true;
      Toast.show({
        type: 'success',

        text1: action?.payload?.message,
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
          if (action?.payload?.data?.message == 'Access token is invalid.') {
            // state.AccessToken = true;
          }
        }
      },
    );
    //doAddLike
    builder.addCase(thunks.doAddLike.fulfilled, (state, action) => {
      //  state.like=true
      // Toast.show({
      //   type: 'success',
      //   text1: 'Your Reels added Successfully !',
      // });
    });
    builder.addCase(thunks.doAddLike.rejected, (state, action: any) => {
      if (action?.payload?.data?.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.message,
        });
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //doRemoveLike
    builder.addCase(thunks.doRemoveLike.fulfilled, (state, action) => {
      //  state.like=true
      // Toast.show({
      //   type: 'success',
      //   text1: 'Your Reels added Successfully !',
      // });
    });
    builder.addCase(thunks.doRemoveLike.rejected, (state, action: any) => {
      if (action?.payload?.data?.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.message,
        });
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });

    //doVotePoll
    builder.addCase(thunks.doVotePoll.fulfilled, (state, action) => { });
    builder.addCase(thunks.doVotePoll.rejected, (state, action: any) => {
      if (action?.payload?.data?.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.message,
        });
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });

    //doSearch
    builder.addCase(thunks.doSearch.fulfilled, (state, action) => {
      state.search = action?.payload?.result;
    });
    //GetJobSeeker

    builder.addCase(thunks.GetJobSeekers.fulfilled, (state, action) => {
      state.JobSeekerData = action?.payload?.data;
    });
    builder.addCase(thunks.GetJobSeekers.rejected, (state, action: any) => {
      if (action?.payload?.data?.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.message,
        });
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //GetRecruiterUsers

    builder.addCase(thunks.GetRecruiterUsers.fulfilled, (state, action) => {
      state.recuriterUsers = action?.payload?.data;
    });
    builder.addCase(thunks.GetRecruiterUsers.rejected, (state, action: any) => {
      if (action?.payload?.data?.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.message,
        });
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // state.AccessToken = true;
        }
      }
    });
    //GetCompanyUsers
    builder.addCase(thunks.GetCompanyUsers.fulfilled, (state, action) => {
      state.companyUsers = action?.payload?.data;
    });
    builder.addCase(thunks.GetCompanyUsers.rejected, (state, action: any) => {
      if (action?.payload?.data?.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.message,
        });
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // // state.AccessToken = true;
        }
      }
    });


    //GetGlobalReels
    builder.addCase(thunks.GetGlobalReels.fulfilled, (state, action) => {
      state.GlobalReals = state.GlobalReals.concat(action?.payload?.posts)
      state.GlobalBools = state.GlobalBools.concat(action?.payload?.posts)
      state.token = action.payload?.paging?.next
    });
    builder.addCase(thunks.GetGlobalReels.rejected, (state, action: any) => {
      if (action?.payload?.data?.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action?.payload?.data?.message,
        });
        if (action?.payload?.data?.message == 'Access token is invalid.') {
          // // state.AccessToken = true;
        }
      }
    });
  },
});

export const selectCompanies = (state: RootState) => state.app.CompaniesData;

export const selectIndstruy = (state: RootState) => state.app.IndsturyData;
export const selectYears = (state: RootState) => state.app.YearsOfExperience;
export const selectJobtype = (state: RootState) => state.app.JobType;
export const selectWorktype = (state: RootState) => state.app.WorkType;
export const selectEducation = (state: RootState) => state.app.EducationLevel;

export const selectDone = (state: RootState) => state.app.done;
export const selectNav = (state: RootState) => state.app.Nav;
export const selectplaceOrderData = (state: RootState) =>
  state.app.placeOrderData;

// export const selectSearch = (state: RootState) => state.app.Search;
export const selectPhotoData = (state: RootState) => state.app.photoData;
export const selectSearchData = (state: RootState) =>
  state.app.searchPeopelData;

export const selectFollowingList = (state: RootState) =>
  state.app.FollowingList;
export const selectListUsers = (state: RootState) => state.app.listUsers;
export const selectPosts = (state: RootState) => state.app.postsData;
export const selectLike = (state: RootState) => state.app.like;
export const selectAccessToken = (state: RootState) => state.app.AccessToken;
export const selectPolls = (state: RootState) => state.app.polls;
export const selectSearchingList = (state: RootState) => state.app.search;
export const selectJobSeeker = (state: RootState) => state.app.JobSeekerData;
export const selectRecuriters = (state: RootState) => state.app.recuriterUsers;
export const selectCompaniesUser = (state: RootState) => state.app.companyUsers;
export const selectGlobalReals = (state: RootState) => state.app.GlobalReals;
export const selectGlobalBools = (state: RootState) => state.app.GlobalBools;
export const selectToken = (state: RootState) => state.app.token;

const AppSlice = {
  slice,
  logout: slice.actions.logout,
  changeDone: slice.actions.changeDone,
  changeNav: slice.actions.changeNav,
  changeImage: slice.actions.changeImage,
  changeAddonesCaption: slice.actions.changeAddonesCaption,
  changeLocation: slice.actions.changelocation,
  changePDF: slice.actions.changePDF,
  changeTagPeopel: slice.actions.changeTagPeopel,
  changeKey: slice.actions.changeKey,
  changeTagNames: slice.actions.changeTagNames,
  // changeSearch: slice.actions.changeSearch,
  changeIndsturyData: slice.actions.chnageIndsturyData,
  changeCompainesData: slice.actions.chnageCompaniesData,
  changeYearsOfExperience: slice.actions.changeYearsOfExperience,
  changeJobType: slice.actions.changeJobType,
  changeWorkType: slice.actions.changeWorkType,
  changeEducationLevel: slice.actions.changeEducationLevel,
  changeSearchPeopelData: slice.actions.changeSearchPeopelData,
  changePhotoData: slice.actions.changePhotoData,
  changePostsData: slice.actions.changePostsData,
  changeMarket: slice.actions.changeMarket,
  changeExterinalLinks: slice.actions.changeExterinalLinks,
  changeLike: slice.actions.changeLike,
  changeFollowingList: slice.actions.changeFollowingList,
  changeAccessToken: slice.actions.changeAccessToken,
  changePolls: slice.actions.changePolls,
  changeSearch: slice.actions.changeSearch,
  changeGlobalReals: slice.actions.changeGlobalReals,
  changeGlobalBools: slice.actions.changeGlobalBools,
  changeToken: slice.actions.changeToken,
};
export default AppSlice;
