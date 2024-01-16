import {api} from '../_axios';
import {api1} from '../_axios1';

//////////////////////////API Complete Profile ////////////////////////////////////////
const Languages = (data: any) => api.post(`api/languages`, data);
const Skills = (data: any) => api.post(`api/skills`, data);
const Education = (data: any) => api1.post(`api/education`, data);  
const Experience = (data: any) => api.post(`api/experience`, data);
const TrainingCourse = (data: any) => api1.post(`api/training-course`, data);
const ReferenceCheck = (data: any) => api1.post(`api/reference-check`, data);
const Achievement = (data: any) => api1.post(`api/achievement`, data);
const Info = (data: any) => api1.post(`api/edit-main-profile`, data);
const CV = (data: any) => api1.post(`api/media-cv`, data);

/////////////////////////////////end////////////////////////////////////////
// const home = (data: any) => api.get(`home?${data}`)

// const favoritesDelete = (id: number) => api.delete(`favorites/${id}`)

const AppAPI = {
  Skills,
  Education,
  Experience,
  TrainingCourse,
  ReferenceCheck,
  Achievement,
  Languages,
  Info,
  CV
};

export default AppAPI;
