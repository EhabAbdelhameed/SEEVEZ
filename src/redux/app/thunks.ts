import { createAsyncThunk } from "@reduxjs/toolkit";
import AppAPI from "./api";



//doAddSkills
const doAddSkills: any = createAsyncThunk<any, any, any>(
    'app/Skills',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.Skills(data);
            console.log(response?.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
//doAddEducation
const doAddEducation: any = createAsyncThunk<any, any, any>(
    'app/Education',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.Education(data);
            // alert(response?.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
//doAddExperience
const doAddExperience: any = createAsyncThunk<any, any, any>(
    'app/Experience',
    async (data, thunkApi: any) => {
        console.log(data)
        try {
            const response = await AppAPI.Experience(data);
            console.log(response)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
//doAddTrainingCourse
const doAddTrainingCourse: any = createAsyncThunk<any, any, any>(
    'app/Training',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.Experience(data);
            // alert(response?.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
//doAddReferenceCheck
const doAddReferenceCheck: any = createAsyncThunk<any, any, any>(
    'app/ReferenceCheck',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.ReferenceCheck(data);
            // alert(response?.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
//doAddReferenceCheck
const doAddAchievement: any = createAsyncThunk<any, any, any>(
    'app/Achievement',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.Achievement(data);
            // alert(response?.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
//doAddLanguages
const doAddLanguages: any = createAsyncThunk<any, any, any>(
    'app/Languages',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.Languages(data);
            console.log(response?.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
//doAddPersonalInfo
const doAddPersonalInfo: any = createAsyncThunk<any, any, any>(
    'app/Info',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.Info(data);
            // alert(response?.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

//doUploadCV
const doUploadCV: any = createAsyncThunk<any, any, any>(
    'app/UploadCV',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.CV(data);
            // alert(response?.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)




const AppThunks = {
    doAddSkills,
    doAddEducation,
    doAddExperience,
    doAddTrainingCourse,
    doAddReferenceCheck,
    doAddAchievement,
    doAddLanguages,
    doAddPersonalInfo,
    doUploadCV,
   
};

export default AppThunks;

