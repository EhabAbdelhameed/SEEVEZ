import {createAsyncThunk} from '@reduxjs/toolkit';
import AppAPI from './api';

//doAddSkills
const doAddSkills: any = createAsyncThunk<any, any, any>(
  'app/Skills',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.Skills(data);
      // console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doUpdateSkills
const doUpdateSkills: any = createAsyncThunk<any, any, any>(
  'app/UpdateSkills',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.updateSkills(data);
      // console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doDeleteSkills
const doDeleteSkills: any = createAsyncThunk<any, any, any>(
  'app/DeleteSkills',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.DeleteSkills(data);
      // console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doDeleteSkills
const doDeleteVideoCV: any = createAsyncThunk<any, any, any>(
  'app/DeleteVideoCV',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.DeleteVideoCV(data);
      // console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
const doAddAudio: any = createAsyncThunk<any, any, any>(
  'app/doAddAudio',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.AddAudio(data);
      // console.log(response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doAddIntersts
const doAddIntersts: any = createAsyncThunk<any, any, any>(
  'app/Intersts',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.Interests(data);
      // console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doUpdateIntersts
const doUpdateIntersts: any = createAsyncThunk<any, any, any>(
  'app/UpdateIntersts',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.updateInterests(data);
      // console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doDeleteIntersts
const doDeleteIntersts: any = createAsyncThunk<any, any, any>(
  'app/DeleteIntersts',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.DeleteInterests(data);
      // console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doAddEducation
const doAddEducation: any = createAsyncThunk<any, any, any>(
  'app/Education',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.Education(data);
      // alert(response?.data)
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doUpdateEducation
const doUpdateEducation: any = createAsyncThunk<any, any, any>(
  'app/UpdateEducation',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.updateEducation(data);
      // console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doDeleteEducation
const doDeleteEducation: any = createAsyncThunk<any, any, any>(
  'app/DeleteEducation',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.DeleteEducation(data);
      // alert(response?.data)
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doAddExperience
const doAddExperience: any = createAsyncThunk<any, any, any>(
  'app/Experience',
  async (data, thunkApi: any) => {
    // console.log(data);
    try {
      const response = await AppAPI.Experience(data);
      // console.log(response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doUpdateExperience
const doUpdateExperience: any = createAsyncThunk<any, any, any>(
  'app/UpdateExperience',
  async (data, thunkApi: any) => {
    // console.log(data)
    try {
      const response = await AppAPI.updateExperience(data);
      // console.log('Update', response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doDeleteExperience
const doDeleteExperience: any = createAsyncThunk<any, any, any>(
  'app/DeleteExperience',
  async (data, thunkApi: any) => {
    // console.log(data);
    try {
      const response = await AppAPI.DeleteExperience(data);
      // console.log(response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doAddTrainingCourse
const doAddTrainingCourse: any = createAsyncThunk<any, any, any>(
  'app/Training',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.TrainingCourse(data);
      // console.log(response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doAddTrainingCourse
const doUpdateTrainingCourse: any = createAsyncThunk<any, any, any>(
  'app/UpdateTraining',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.updateTrainingCourse(data);
      // console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doDeleteTrainingCourse
const doDeleteTrainingCourse: any = createAsyncThunk<any, any, any>(
  'app/DeleteTraining',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.DeleteTrainingCourse(data);
      // alert(response?.data)
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doAddReferenceCheck
const doAddReferenceCheck: any = createAsyncThunk<any, any, any>(
  'app/ReferenceCheck',

  async (data, thunkApi: any) => {
    // console.log(data)
    try {
      const response = await AppAPI.ReferenceCheck(data);
      console.log(response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doUpdateReferenceCheck
const doUpdateReferenceCheck: any = createAsyncThunk<any, any, any>(
  'app/UpdateReferenceCheck',

  async (data, thunkApi: any) => {
    // console.log(data)
    try {
      const response = await AppAPI.updateReferenceCheck(data);
      // console.log(response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doDeleteReferenceCheck
const doDeleteReferenceCheck: any = createAsyncThunk<any, any, any>(
  'app/DeleteReferenceCheck',

  async (data, thunkApi: any) => {
    // console.log(data)
    try {
      const response = await AppAPI.DeleteReferenceCheck(data);
      // console.log(response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doAddAchievement
const doAddAchievement: any = createAsyncThunk<any, any, any>(
  'app/Achievement',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.Achievement(data);
      // console.log(response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doUpdateAchievement
const doUpdateAchievement: any = createAsyncThunk<any, any, any>(
  'app/UpdateAchievement',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.updateAchievement(data);
      //console.log(response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doDeleteAchievement
const doDeleteAchievement: any = createAsyncThunk<any, any, any>(
  'app/DeleteAchievement',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.DeleteAchievement(data);
     // console.log(response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doAddLanguages
const doAddLanguages: any = createAsyncThunk<any, any, any>(
  'app/Languages',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.Languages(data);
      //console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doUpdateLanguages
const doUpdateLanguages: any = createAsyncThunk<any, any, any>(
  'app/UpdateLanguages',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.updateLanguages(data);
      //console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doDeleteLanguages
const doDeleteLanguages: any = createAsyncThunk<any, any, any>(
  'app/DeleteLanguages',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.DeleteLanguages(data);
      //console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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

//doAddPersonalInfo
const doAddPersonalInfo: any = createAsyncThunk<any, any, any>(
  'app/Info',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.Info(data);
      //console.log(response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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

//GetAccessToken
const GetAccessToken: any = createAsyncThunk<any, any, any>(
  'app/AccessToken',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.AccessToken();
      console.error(response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//GetIndustry
const GetIndustry: any = createAsyncThunk<any, any, any>(
  'app/Industry',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.Industry();
      // console.log(response.data)
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//GetYearsOfExperience
const GetYearsOfExperience: any = createAsyncThunk<any, any, any>(
  'app/Years',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.YearsOfExperience();
      // console.log(response.data)
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//GetJobType
const GetJobType: any = createAsyncThunk<any, any, any>(
  'app/JobType',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.JobType();
      // console.log(response.data)
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//GetJobType
const GetWorkType: any = createAsyncThunk<any, any, any>(
  'app/WorkType',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.WorkType();
      // console.log(response.data)
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//GetEducationLevel
const GetEducationLevel: any = createAsyncThunk<any, any, any>(
  'app/EducationLevel',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.EducationLevel();
      // console.log(response.data)
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doGetCompanies
const GetCompaniesName: any = createAsyncThunk<any, any, any>(
  'app/companiesName',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.CompaniesName(data);
      // console.log(response.data)
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doUploadCV
const doUploadCV: any = createAsyncThunk<any, any, any>(
  'app/UploadCV',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.CV(data);
      //console.log(response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//UploadVideoReel
const doUploadVideoReel: any = createAsyncThunk<any, any, any>(
  'app/VideoReel',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.VideoReel(data);
      console.warn('jjjjj', response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//CreatePoll
const CreatePoll: any = createAsyncThunk<any, any, any>(
  'app/createPoll',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.Poll(data);
      // console.warn('mmm', response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//UploadPhotoReel
const doUploadPhotoReel: any = createAsyncThunk<any, any, any>(
  'app/PhotoReel',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.PhotoReel(data);
      console.warn('jjjjj', JSON.stringify(response));
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//GetMyReels
const GetMyReels: any = createAsyncThunk<any, any, any>(
  'app/GetMyReels',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.GetMyReel(data);
      // console.log("Response Data",JSON.stringify(response))

      // console.log("Response Data", JSON.stringify(response))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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

const GetGlobalReels: any = createAsyncThunk<any, any, any>(
  'app/GetGlobalReels',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.GetGlobalReels(data);
      // console.log("Response Data",JSON.stringify(response))

      // console.log("Response Data", JSON.stringify(response))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//GetOnePost
const GetOnePost: any = createAsyncThunk<any, any, any>(
  'app/GetOnePost',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.GetOneReel(data);
      // alert(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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

//////////////////////follow///////////////
const doUnFollowUser: any = createAsyncThunk<any, any, any>(
  'app/unfollowUser',
  async (id, thunkApi: any) => {
    try {
      const response = await AppAPI.unfollowUser(id);
      // console.log(response?.data)
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
const doGetFollowingList: any = createAsyncThunk<any, any, any>(
  'app/followingList',
  async (_, thunkApi: any) => {
    try {
      const response = await AppAPI.followingList();
      console.error("Response : ",response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
const doGetFollowers: any = createAsyncThunk<any, any, any>(
  'app/followers',
  async (id, thunkApi: any) => {
    try {
      const response = await AppAPI.followers(id);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
const doGetListUsers: any = createAsyncThunk<any, any, any>(
  'app/listUsers',
  async (_, thunkApi: any) => {
    try {
      const response = await AppAPI.listUsers();
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
const doFollowUser: any = createAsyncThunk<any, any, any>(
  'app/followUser',
  async (id, thunkApi: any) => {
    try {
      const response = await AppAPI.followUser(id);
      console.error(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//UploadVideoPoll
const doUploadpoll: any = createAsyncThunk<any, any, any>(
  'app/doUploadpoll',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.VideoReel(data);
      console.warn('mmmmm', response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doAddAbout
const doAddAbout: any = createAsyncThunk<any, any, any>(
  'app/AddAbout',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.About(data);

      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//Company
//doAddCompanyInfo
const doAddCompanyInfo: any = createAsyncThunk<any, any, any>(
  'app/CompanyInfo',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.CompanyInfo(data);
      //console.log('0000000000' + JSON.stringify(response));
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
// doAddCompanyAbout
const doAddCompanyAbout: any = createAsyncThunk<any, any, any>(
  'app/CompanyAbout',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.CompanyAbout(data);
      // console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//searchForTagPeopel
const searchForTagPeopel: any = createAsyncThunk<any, any, any>(
  'app/tagPeopel',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.SearchToTagPeople(data);
      // console.log(JSON.stringify(response));
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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

// doAddUploadPortfolio
const doAddUploadPortfolio: any = createAsyncThunk<any, any, any>(
  'app/CompanyPortfolio',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.CVCompany(data);
      // console.log(response?.data);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//GetProfileInfo
const GetProfileInfo: any = createAsyncThunk<any, any, any>(
  'app/ProfileInfo',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.profileInfo();
      // console.log(JSON.stringify(response?.data))
      // console.log(JSON.stringify(response));
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doAddLike
const doAddLike: any = createAsyncThunk<any, any, any>(
  'app/Like',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.like(data);
      console.warn('jjjjj', response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doRemoveLike
const doRemoveLike: any = createAsyncThunk<any, any, any>(
  'app/removeLike',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.disLike(data);
      // console.warn('mmm', response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doVotePoll
const doVotePoll: any = createAsyncThunk<any, any, any>(
  'app/VotePoll',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.votePoll(data);
      console.warn('mmm', response);
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//GetJobSeeker
const GetJobSeekers: any = createAsyncThunk<any, any, any>(
  'app/Jobseeker',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.JobSeeker(data);
      // console.warn('Job Seeker', JSON.stringify(response?.data));
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//GetRecruiterUser
const GetRecruiterUsers: any = createAsyncThunk<any, any, any>(
  'app/RecruiterUsers',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.recruiterUser(data);
      // console.warn('Recuriter', JSON.stringify(response?.data));
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
const GetCompanyUsers: any = createAsyncThunk<any, any, any>(
  'app/CompanyUsers',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.companyUser(data);
      // console.warn('Recuriter', JSON.stringify(response?.data));
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
const doSearch: any = createAsyncThunk<any, any, any>(
  'app/search',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.search(data);
      // console.log("Search Response :",JSON.stringify(response?.data));
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doRepost
const doRepost: any = createAsyncThunk<any, any, any>(
  'app/repost',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.Repost(data);
      // alert(JSON.stringify(response?.data));
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
const doDeleteNationality: any = createAsyncThunk<any, any, any>(
  'app/DeleteNat',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.DeleteNationality(data);
      // alert(JSON.stringify(response?.data));
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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

//doDeletePost
const doDeletePost: any = createAsyncThunk<any, any, any>(
  'app/Deletepost',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.deletePost(data);
      // alert(JSON.stringify(response?.data));
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doUpdatePost
const doUpdatePost: any = createAsyncThunk<any, any, any>(
  'app/UpdatePost',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.updatePost(data);
      console.log(JSON.stringify(response));
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doGetJobs
const doGetJobs: any = createAsyncThunk<any, any, any>(
  'app/Jobs',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.jobs();
      // alert(JSON.stringify(response?.data));
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doGetJobDescraption
const doGetJobDescraption: any = createAsyncThunk<any, any, any>(
  'app/JobDescraption',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.jobDesc(data);
      // alert(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doGetJobDescraption
const doGetFreelancerJobs: any = createAsyncThunk<any, any, any>(
  'app/FreelancerJobs',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.freelancerJobs();
      console.log(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
const doGetInternshipsJobs: any = createAsyncThunk<any, any, any>(
  'app/Internships',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.internships();
      console.log(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//GetSkills
const GetSkills: any = createAsyncThunk<any, any, any>(
  'app/SKILLS',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.dropDownSkills();
      // console.log(response.data)
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doGetRecommandedJobs
const doGetRecommandedJobs: any = createAsyncThunk<any, any, any>(
  'app/RecommandedJobs',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.recommandedJobs();
      console.log(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doAddJobOpportunity
const doAddJobOpportunity: any = createAsyncThunk<any, any, any>(
  'app/JobOpportunity',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.JobOpportunity(data);
      console.log(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doAddInternshipOpportunity
const doAddInternshipOpportunity: any = createAsyncThunk<any, any, any>(
  'app/InternshipOpportunity',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.InternshipOpportunity(data);
      console.log(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doGetJobQuestions
const doGetJobQuestions: any = createAsyncThunk<any, any, any>(
  'app/JobQuestions',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.JobQuestions(data);
      console.log(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doGetJobQuestions
const doApplayQuestion: any = createAsyncThunk<any, any, any>(
  'app/ApplayQuestion',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.Applay(data);
      console.log(JSON.stringify(response))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doGetListedUser
const doGetListedUser: any = createAsyncThunk<any, any, any>(
  'app/listUser',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.List(data?.status,data?.job_id);
      console.log(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doGetJobDescraptionJobSeeker
const doGetJobDescraptionJobSeeker: any = createAsyncThunk<any, any, any>(
  'app/JobDescraptionJobSeeker',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.jobDescJobSeeker(data);
      // alert(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doSaveJob
const doSaveJob: any = createAsyncThunk<any, any, any>(
  'app/SaveJob',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.saveJob(data);
      // alert(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doUnSaveJob
const doUnSaveJob: any = createAsyncThunk<any, any, any>(
  'app/UnSaveJob',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.unSaveJob(data);
      // alert(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doGetMySavedJob
const doGetMySavedJob: any = createAsyncThunk<any, any, any>(
  'app/getSavedJob',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.getSavedJob();
      // alert(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doGetMyApplicationJob
const doGetMyApplicationJob: any = createAsyncThunk<any, any, any>(
  'app/MyApplicationJob',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.getApplicationJob();
      // alert(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doChangeStatusUser
const doChangeStatusUser: any = createAsyncThunk<any, any, any>(
  'app/StatusUser',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.statusUser(data);
      // alert(JSON.stringify(response?.data))
      if (
        response.status == null ||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
//doReviewUser
const doReviewUser: any = createAsyncThunk<any, any, any>(
  'app/ReviewUser',
  async (data, thunkApi: any) => {
    try {
      const response = await AppAPI.reviewUser(data);
      console.log(JSON.stringify(response))
      if (
        response.status == null||
        response.status == 401 ||
        response.status == 400 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
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
const AppThunks = {
  doAddSkills,
  GetAccessToken,
  doDeleteVideoCV,
  doUpdateSkills,
  doUploadVideoReel,
  doUploadPhotoReel,
  doUploadpoll,
  doDeleteSkills,
  doAddEducation,
  doUpdateEducation,
  doDeleteEducation,
  doAddExperience,
  doUpdateExperience,
  doDeleteExperience,
  doAddTrainingCourse,
  doUpdateTrainingCourse,
  doDeleteTrainingCourse,
  doAddReferenceCheck,
  doUpdateReferenceCheck,
  doDeleteReferenceCheck,
  doAddAchievement,
  doUpdateAchievement,
  doDeleteAchievement,
  doAddLanguages,
  doUpdateLanguages,
  doDeleteLanguages,
  GetIndustry,
  GetEducationLevel,
  GetYearsOfExperience,
  doAddPersonalInfo,
  doUploadCV,
  doAddCompanyInfo,
  doAddUploadPortfolio,
  doAddCompanyAbout,
  doAddAbout,
  GetProfileInfo,
  doAddIntersts,
  doUpdateIntersts,
  doDeleteIntersts,
  GetJobType,
  GetCompaniesName,
  doAddAudio,
  GetMyReels,
  doFollowUser,
  doUnFollowUser,
  doGetFollowingList,
  doGetListUsers,
  searchForTagPeopel,
  doGetFollowers,
  CreatePoll,
  GetOnePost,
  doAddLike,
  doRemoveLike,
  doVotePoll,
  GetJobSeekers,
  GetRecruiterUsers,
  GetCompanyUsers,
  doSearch,
  GetWorkType,
  doRepost,
  GetGlobalReels,
  doDeleteNationality,
  doDeletePost,
  doUpdatePost,
  doGetJobs,
  doGetJobDescraption,
  doGetFreelancerJobs,
  doGetInternshipsJobs,
  GetSkills,
  doGetRecommandedJobs,
  doAddJobOpportunity,
  doAddInternshipOpportunity,
  doGetJobQuestions,
  doApplayQuestion,
  doGetListedUser,
  doGetJobDescraptionJobSeeker,
  doSaveJob,
  doUnSaveJob,
  doGetMySavedJob,
  doGetMyApplicationJob,
  doChangeStatusUser,
  doReviewUser
};

export default AppThunks;
