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
//doAddIntersts
const doAddIntersts: any = createAsyncThunk<any, any, any>(
    'app/Intersts',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.Interests(data);
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
            const response = await AppAPI.TrainingCourse(data);
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
        // console.log(data)
        try {
            const response = await AppAPI.ReferenceCheck(data);
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
//doAddReferenceCheck
const doAddAchievement: any = createAsyncThunk<any, any, any>(
    'app/Achievement',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.Achievement(data);
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
//GetIndustry
const GetIndustry: any = createAsyncThunk<any, any, any>(
    'app/Industry',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.Industry();
            // console.log(response.data)
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
//GetYearsOfExperience
const GetYearsOfExperience: any = createAsyncThunk<any, any, any>(
    'app/Years',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.YearsOfExperience();
            // console.log(response.data)
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
//GetJobType
const GetJobType: any = createAsyncThunk<any, any, any>(
    'app/JobType',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.JobType();
            // console.log(response.data)
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
//GetEducationLevel
const GetEducationLevel: any = createAsyncThunk<any, any, any>(
    'app/EducationLevel',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.EducationLevel();
            // console.log(response.data)
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
//doGetCompanies
const GetCompaniesName: any = createAsyncThunk<any, any, any>(
    'app/companiesName',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.CompaniesName(data);
            // console.log(response.data)
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
            console.log(response)
            if (
                response.status == null ||
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
//doAddAbout
const doAddAbout: any = createAsyncThunk<any, any, any>(
    'app/AddAbout',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.About(data);
          console.log(("0000000 "+JSON.stringify(response)+" 1111111111"))
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
//Company
//doAddCompanyInfo
const doAddCompanyInfo: any = createAsyncThunk<any, any, any>(
    'app/CompanyInfo',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.CompanyInfo(data);
            console.log("0000000000"+JSON.stringify(response))
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
// doAddCompanyAbout
const doAddCompanyAbout: any = createAsyncThunk<any, any, any>(
    'app/CompanyAbout',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.CompanyAbout(data);
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

// doAddUploadPortfolio
const doAddUploadPortfolio: any = createAsyncThunk<any, any, any>(
    'app/CompanyPortfolio',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.CVCompany(data);
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
//GetProfileInfo
const GetProfileInfo: any = createAsyncThunk<any, any, any>(
    'app/ProfileInfo',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.profileInfo();
            // alert(JSON.stringify(response?.data))
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
    GetJobType,
    GetCompaniesName
   
};

export default AppThunks;

