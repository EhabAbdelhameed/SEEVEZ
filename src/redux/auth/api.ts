import {api} from '../_axios';
import {headers} from '../headers';




const registerCompany = (body: any) => api.post('company/register', body);
const getUserProfile = (id: any) => api.get(`api/get-info-users?user_id=${id}`);
const registerCompanyAdmin = (body: any) => api.post('company-admin/register', body);

const registerRecruiter = (body: any) => {
  const v = api.post('recruiter/register', body);
  return v;
};
const registerJobSeeker = (body: any) => api.post('job-seeker/register', body);

const login = (body: any) => {
  const v = api.post('api/login', body);

  return v;
};
const forgotPassword = (body: any) => api.post('api/forgot-password', body);
const restPassword = (body: any) => api.post('api/reset-password', body);
const verifyOTP = (body: any) => api.post('api/verify', body);
const resendCode = (body: any) => api.post('api/resend-code', body);
const deleteAccount = (id: number) => api.get(`dashboard/delete/${id}`);





const AuthAPI = {
  registerCompany,
  registerCompanyAdmin,
  registerRecruiter,
  registerJobSeeker,
  login,
  forgotPassword,
  verifyOTP,
  restPassword,
  resendCode,
  getUserProfile,
  deleteAccount
};

export default AuthAPI;
