import {api} from '../_axios';


//////////////////////////API Complete Profile ////////////////////////////////////////
const Languages = (data: any) => api.post(`api/languages`, data);
const Skills = (data: any) => api.post(`api/skills`, data);
const Interests = (data: any) => api.post(`api/interests`, data);

const Education = (data: any) => api.post(`api/education`, data);  
const Experience = (data: any) => api.post(`api/experience`, data);
const TrainingCourse = (data: any) => api.post(`api/training-course`, data);
const ReferenceCheck = (data: any) => api.post(`api/reference-check`, data);
const Achievement = (data: any) => api.post(`api/achievement`, data);
const Info = (data: any) => api.post(`api/edit-main-profile`, data);
const About = (data: any) => api.post(`api/edit-main-profile`, data);

const CompanyInfo = (data: any) => api.post(`api/complete-profile-company`, data);
const CompanyAbout = (data: any) => api.post(`api/complete-profile-company`, data);
const CVCompany = (data: any) => api.post(`api/complete-profile-company`, data);
const CV = (data: any) => api.post(`api/media-cv`, data);
const profileInfo = () => api.get(`api/get-info`)
const Industry = () => api.get(`api/drop-down/industry`)
const YearsOfExperience = () => api.get(`api/drop-down/year-of-experience`)
const JobType = () => api.get(`api/drop-down/job-type`)
const EducationLevel = () => api.get(`api/drop-down/education-level`)
const CompaniesName = (data: any) => api.get(`company-admin/search-for-company?name=${data}`)





/////////////////////////////////end////////////////////////////////////////
// const home = (data: any) => api.get(`home?${data}`)

// const favoritesDelete = (id: number) => api.delete(`favorites/${id}`)

const AppAPI = {
  Skills,
  Education,
  CompanyAbout,
  CVCompany,
  Experience,
  TrainingCourse,
  ReferenceCheck,
  CompaniesName,
  Achievement,
  Languages,
  Industry,
  JobType,
  EducationLevel,
  Info,
  About,
  YearsOfExperience,
  CV,
  CompanyInfo,
  profileInfo,
  Interests
};

export default AppAPI;
