interface userState {
  signedUp: boolean;
  signedCompanyAdmin:boolean;
  reset: boolean;
  changed: boolean;
  rememberMe: boolean;
  isAuth: boolean;
  verified: boolean;
  isGuest: boolean;
  Token: any;
  currentUser: {
    about:any;
    area: any;
    avatar: any;
    birthdate: any;
    city: any;
    country: any;
    country_code: any;
    current_salary: any;
    cv_pdf: any;
    disabilities: any;
    email: any;
    email_verified_at: any;
    expected_salary: any;
    facebook: any;
    gender: any;
    github: any;
    height: any;
    id: any;
    instagram: any;
    job_title: any;
    linkedin: any;
    name: any;
    other: any;
    phone_number: any;
    show_salary: any;
    smoker: any;
    special_needs: any;
    token: any;
    user_data: {
      achievement: any;
      cv_media: any;
      educations: any;
      experiences: any;
      complete_progress:any;
      id:any;
      languages: any;
      nationality:any;
      online_status: any;
      reference_check: any;
      background_check:any;
      skills: any;
      interests:any;
      training_courses:any;
      user_type: any;
    };
    user_id: any;
    website: any;
    weight: any;
    work_type:any;
  };
}

export const initialState: userState = {
  signedUp: false,
  signedCompanyAdmin:false,
  reset: false,
  changed: false,
  rememberMe: true,
  isAuth: false,
  isGuest: true,
  verified: false,
  Token: '',
  currentUser: {
    about:null,
    area: null,
    avatar: null,
    birthdate: null,
    city: null,
    country: null,
    country_code: null,
    current_salary: null,
    cv_pdf: null,
    disabilities: null,
    email: null,
    email_verified_at: null,
    expected_salary: null,
    facebook: null,
    gender: null,
    github: null,
    height: null,
    id: null,
    instagram: null,
    job_title: null,
    linkedin: null,
    name: null,
    other: null,
    phone_number: null,
    show_salary: null,
    smoker: null,
    special_needs: null,
    token: null,
    user_data: {
      achievement: null,
      cv_media: null,
      educations: [],
      experiences: [],
      background_check:null,
      complete_progress:null,
      id: null,
      languages: [],
      nationality: [],
      online_status: null,
      reference_check: null,
      skills: [],
      interests:[],
      training_courses: [],

      user_type: null,
    },
    user_id:null,
    website: null,
    weight: null,
    work_type:null,
  },
};
