import { api } from '../_axios';


//////////////////////////API Complete profile ////////////////////////////////////////
const Languages = (data: any) => api.post(`api/languages`, data);
const updateLanguages = (data: any) => api.post(`api/edit-languages`, data);
const DeleteLanguages = (id: number) => api.delete(`api/delete-languages/${id}`)
const Skills = (data: any) => api.post(`api/skills`, data);
const updateSkills = (data: any) => api.post(`api/edit-skills`, data);
const DeleteSkills = (id: number) => api.delete(`api/delete-skills/${id}`)
const DeleteVideoCV = (id: number) => api.delete(`api/delete-media-cv/${id}`)
const AddAudio = (data: any) => api.post(`api/post-audio`, data)

const Interests = (data: any) => api.post(`api/interests`, data);
const updateInterests = (data: any) => api.post(`api/edit-interests`, data);
const DeleteInterests = (id: number) => api.delete(`api/delete-interests/${id}`)

const Education = (data: any) => api.post(`api/education`, data);
const updateEducation = (data: any) => api.post(`api/edit-education`, data);
const DeleteEducation = (id: number) => api.delete(`api/delete-education/${id}`)
const Experience = (data: any) => api.post(`api/experience`, data);
const updateExperience = (data: any) => api.post(`api/edit-experience`, data);
const DeleteExperience = (id: number) => api.delete(`api/delete-experience/${id}`)

const TrainingCourse = (data: any) => api.post(`api/training-course`, data);
const updateTrainingCourse = (data: any) => api.post(`api/edit-training-course`, data);
const DeleteTrainingCourse = (id: number) => api.delete(`api/delete-training-course/${id}`)
const ReferenceCheck = (data: any) => api.post(`api/reference-check`, data);
const updateReferenceCheck = (data: any) => api.post(`api/edit-reference-check`, data);
const DeleteReferenceCheck = (id: number) => api.delete(`api/delete-reference-check/${id}`)
const Achievement = (data: any) => api.post(`api/achievement`, data);
const updateAchievement = (data: any) => api.post(`api/edit-achievement`, data);
const DeleteAchievement = (id: number) => api.delete(`api/delete-achievement/${id}`)
const Info = (data: any) => api.post(`api/edit-main-profile`, data);
const About = (data: any) => api.post(`api/edit-main-profile`, data);
const AccessToken = () => api.post(`api/amity-data-access-token`);

const CompanyInfo = (data: any) => api.post(`api/complete-profile-company`, data);
const CompanyAbout = (data: any) => api.post(`api/complete-profile-company`, data);
const SearchToTagPeople = (data: any) => api.get(`api/search-for-users/10/?name=${data}`);

const CVCompany = (data: any) => api.post(`api/complete-profile-company`, data);
const CV = (data: any) => api.post(`api/media-cv`, data);
const VideoReel = (data: any) => api.post(`api/post-video`, data);
const PhotoReel = (data: any) => api.post(`api/post-photo`, data);
const Poll = (data: any) => api.post(`api/post-poll`, data);


const profileInfo = () => api.get(`api/get-info`)
const Industry = () => api.get(`api/drop-down/industry`)
const GetMyReel = (id:number) => api.get(`api/get-my-reels?user_id=${id}`)
const GetGlobalReels = (token:any) => api.get(`api/get-global-reels?limit=10&${token}`)
const GetOneReel = (id:number) => api.get(`api/get-post-by-id?postId=770d8527-27fe-417b-a938-a3a90a9677b4`)

const listUsers = () => api.get(`dashboard/recruiter/20`)
const followUser = (id: number) => api.post(`api/follow`, { id })
const unfollowUser = (id: number) => api.post(`api/unfollow`, { id })
const followingList = () => api.get(`api/get-following-list`)
const followers = (id: number) => api.get(`api/follow-other-info?user_id=${id}`)
const YearsOfExperience = () => api.get(`api/drop-down/year-of-experience`)
const JobType = () => api.get(`api/drop-down/job-type`)
const WorkType = () => api.get(`api/drop-down/work-type`)

const EducationLevel = () => api.get(`api/drop-down/education-level`)
const CompaniesName = (data: any) => api.get(`company-admin/search-for-company?name=${data}`)

const like = (data: any) => api.post(`api/add-reaction`, data);
const disLike = (data: any) => api.post(`api/remove-reaction`, data);
const votePoll = (data: any) => api.post(`api/vote-poll`, data);
const JobSeeker = (data: any) => api.get(`api/job-seeker/5?page=${data}`);
const recruiterUser = (data: any) => api.get(`api/recruiter/5?page=${data}`);
const companyUser = (data: any) => api.get(`api/company/5?page=${data}`);



const search = (Search: any) => api.get(`api/general/search?${Search}`);
const Repost = (data: any) => api.post(`api/repost`, data);
const DeleteNationality = (id: number) => api.delete(`api/delete-nationality/${id}`)
const deletePost = (id: any) => api.delete(`api/delete-reel?postId=${id}&permanent=false`)
const updatePost = (data: any) => api.post(`api/update-reel`, data);
const jobs = () => api.get(`company/job-opportunity`)

const jobDesc = (id:number) => api.get(`company/show/job-opportunity/${id}`)

const freelancerJobs = () => api.get(`company/job-opportunity/show/freelancer`)
const internships = () => api.get(`company/job-opportunity/show/intern`)
const dropDownSkills = () => api.get(`api/drop-down/skills`)
/////////////////////////////////end////////////////////////////////////////
// const home = (data: any) => api.get(`home?${data}`)

// const favoritesDelete = (id: number) => api.delete(`favorites/${id}`)

const AppAPI = {
  Skills,
  updateSkills,
  DeleteVideoCV,
  DeleteSkills,
  GetMyReel,
  GetOneReel,
  VideoReel,
  Education,
  AccessToken,
  updateEducation,
  DeleteEducation,
  CompanyAbout,
  SearchToTagPeople,
  PhotoReel,
  CVCompany,
  Experience,
  updateExperience,
  DeleteExperience,
  TrainingCourse,
  updateTrainingCourse,
  DeleteTrainingCourse,
  ReferenceCheck,
  updateReferenceCheck,
  DeleteReferenceCheck,
  CompaniesName,
  Achievement,
  updateAchievement,
  DeleteAchievement,
  Languages,
  updateLanguages,
  DeleteLanguages,
  Industry,
  JobType,
  EducationLevel,
  Info,
  AddAudio,
  About,
  YearsOfExperience,
  CV,
  Poll,
  CompanyInfo,
  profileInfo,
  Interests,
  updateInterests,
  DeleteInterests,
  listUsers,
  followUser,
  unfollowUser,
  followingList,
  followers,
  like,
  disLike,
  votePoll,
  JobSeeker,
  recruiterUser,
  companyUser,

  search,
  WorkType,
  Repost,
  GetGlobalReels,
  DeleteNationality,
  deletePost,
  updatePost,
  jobs,
  jobDesc,
  freelancerJobs,
  internships,
  dropDownSkills
};

export default AppAPI;
