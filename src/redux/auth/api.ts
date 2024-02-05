import {api} from '../_axios';
import {headers} from '../headers';

const registerCompany = (body: any) => api.post('company/register', body);
const registerCompanyAdmin = (body: any) => api.post('company-admin/register', body);

// const registerRecruiter = (body: any) => api.post('register', body)
const registerRecruiter = (body: any) => {
  const v = api.post('recruiter/register', body);
  // console.warn(body);
  return v;
};
const registerJobSeeker = (body: any) => api.post('job-seeker/register', body);

const login = (body: any) => {
  const v = api.post('api/login', body);

  return v;
};
// const login = (body: any) => )
// console.log("222222"+body)
const forgotPassword = (body: any) => api.post('api/forgot-password', body);
const restPassword = (body: any) => api.post('api/reset-password', body);
const verifyOTP = (body: any) => api.post('api/verify', body);
const resendCode = (body: any) => api.post('api/resend-code', body);
// const changeProfile = (body: any) => api.post('edit-profile', body)

// const getProfile = () => api.get('profile')
// const editProfile = (body: any) => api.post('profile', body)
// const editPassword = (body: any) => api.post('profile-change-password', body)
// const deleteAccount = () => api.post('delete-account')

const AuthAPI = {
  registerCompany,
  registerCompanyAdmin,
  registerRecruiter,
  registerJobSeeker,
  login,
  forgotPassword,
  verifyOTP,
  restPassword,
  // changeProfile,
  resendCode,

  // getProfile,
  // editProfile,
  // editPassword,
  // deleteAccount
};

export default AuthAPI;
