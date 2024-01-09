import { api } from "../_axios" 

const registerCompany = (body: any) => api.post('company/register', body)
const registerRecruiter = (body: any) => api.post('recruiter/register', body)
const registerJobSeeker = (body: any) => api.post('job-seeker/register', body)

// const login = (body: any) => api.post('login', body)
// const resetPassword = (body: any) => api.post('forget-password', body)
// const confirmPassword = (body: any) => api.post('change-password', body)
// const verifyOTP = (body: any) => api.post('verify-code', body)
// const resendCode = (body: any) => api.post('resend-code', body)
// const changeProfile = (body: any) => api.post('edit-profile', body)

// const getProfile = () => api.get('profile')
// const editProfile = (body: any) => api.post('profile', body)
// const editPassword = (body: any) => api.post('profile-change-password', body)
// const deleteAccount = () => api.post('delete-account')



const AuthAPI = {
    registerCompany,
    registerRecruiter,
    registerJobSeeker,
    // login,
    // resetPassword,
    // verifyOTP,
    // confirmPassword,
    // changeProfile,
    // resendCode,

    // getProfile,
    // editProfile,
    // editPassword,
    // deleteAccount
};

export default AuthAPI;
