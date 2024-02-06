import * as Yup from 'yup';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail must be valid')
    .trim()
    .min(8, 'Enter a valid e-mail')
    .required('Please Enter your E-mail ')
    .matches(EmailReg, 'Invalid e-mail'),
  password: Yup.string()
    .required('Please Enter your Password ')
    .min(8, 'Password must be at least 8 numbers'),
});

export const RegistSchema = Yup.object().shape({
  email: Yup.string().email('E-mail must be valid').trim().min(8, 'Enter a valid e-mail').required('Please Enter your E-mail').matches(EmailReg, 'Invalid e-mail'),
  password: Yup.string().required('Please Enter your Password').min(8, 'Password must be at least 8 numbers'),
  fullName: Yup.string().required('Please Enter your Full name'),
  phone: Yup.string().required('Please Enter your Mobile number').matches(phoneRegExp, 'Invalid mobile number'),
  confirmPassword: Yup.string().required('Please Enter your Confirm password').min(8, 'Confirm Password must be at least 8 numbers').oneOf([Yup.ref('password'), null], 'Passwords do not match'),

  referralcode: Yup.string().notRequired(),
});
export const RegistSchemaCompany = Yup.object().shape({
  email: Yup.string().email('E-mail must be valid').trim().min(8, 'Enter a valid e-mail').required('Please Enter your E-mail').matches(EmailReg, 'Invalid e-mail'),
  password: Yup.string().required('Please enter your Password').min(8, 'Password must be at least 8 numbers'),
 
  phone: Yup.string().required('Please enter your Mobile number').matches(phoneRegExp, 'Invalid mobile number'),
  confirmPassword: Yup.string().required('Please enter your Confirm password').min(8, 'Confirm Password must be at least 8 numbers').oneOf([Yup.ref('password'), null], 'Passwords do not match'),
  taxID: Yup.string().required('Please Enter your taxID'),
  referralcode: Yup.string().notRequired(),
  company_name:Yup.string().notRequired()
});
export const RegistSchemaCompanySelected = Yup.object().shape({
  email: Yup.string().email('E-mail must be valid').trim().min(8, 'Enter a valid e-mail').required('Please Enter your E-mail').matches(EmailReg, 'Invalid e-mail'),
  password: Yup.string().required('Please enter your Password').min(8, 'Password must be at least 8 numbers'),
  fullName: Yup.string().required('Please enter your Full name'),
  phone: Yup.string().required('Please enter your Mobile number').matches(phoneRegExp, 'Invalid mobile number'),
  confirmPassword: Yup.string().required('Please enter your Confirm password').min(8, 'Confirm Password must be at least 8 numbers').oneOf([Yup.ref('password'), null], 'Passwords do not match'),
  referralcode: Yup.string().notRequired(),
  company_name:Yup.string().notRequired()
});

// export const EditProfileSchema = Yup.object().shape({
//   // email: Yup.string().email('E-mail must be valid').trim().min(8, 'Enter a valid e-mail').required('E-mail ').matches(EmailReg, 'Invalid e-mail'),
//   fullname: Yup.string().required('Please Enter your Full name '),
//   mobilenumber: Yup.string()
//     .required('Please Enter your Mobile number ')
//     .matches(phoneRegExp, 'Invalid mobile number'),
//   Birthdate: Yup.string().required('Please Enter your Birthdate '),
//   gender: Yup.string().required('Please Enter your Gender '),
//   // address: Yup.string().required("Please Enter your Address "),
//   // country: Yup.string().required("Please Enter your Country "),
//   // city: Yup.string().required("Please Enter your City "),
// });
export const ForgetSchema = Yup.object().shape({
  email: Yup.string().email('E-mail must be valid').trim().min(8, 'Enter a valid e-mail').required('Please Enter your E-mail ').matches(EmailReg, 'Invalid e-mail'),
});
export const OtpSchema = Yup.object().shape({
  otp: Yup.string().required('Please Enter your otp')
});

export const ResetSchema = Yup.object().shape({
  password: Yup.string().required('Please Enter your New password ').min(8, 'New password must be at least 8 numbers'),
  confirmPassword: Yup.string().required('Please Enter your Confirm password ').min(8, 'Confirm Password must be at least 8 numbers').oneOf([Yup.ref('password'), null], 'Passwords do not match'),
});

// export const ChangePasswordSchema = Yup.object().shape({
//   currentpassword: Yup.string()
//     .required('Please Enter your Current password ')
//     .min(8, 'Current password must be at least 8 numbers'),
//   newpassword: Yup.string()
//     .required('Please Enter your New password ')
//     .min(8, 'New password must be at least 8 numbers'),
//   confirmpassword: Yup.string()
//     .required('Please Enter your Confirm password ')
//     .min(8, 'Confirm Password must be at least 8 numbers')
//     .oneOf([Yup.ref('newpassword'), null], 'Passwords do not match'),
// });

// export const AddAdressesSchema = Yup.object().shape({
//   building: Yup.string().required('Please Enter your Building number '),
//   floor: Yup.string().required('Please Enter your Floor number '),
//   street: Yup.string().required('Please Enter your street '),
//   Apartment: Yup.string().required('Please Enter your Apartment number '),
//   addressname: Yup.string().required('Please Enter your delivering place '),
//   area: Yup.object().required('Please Select Area '),
// });

// export const CheckOutSchema = Yup.object().shape({
//   Nameoncard: Yup.string().required('Please Enter your card namr'),
//   Cardnumber: Yup.string().required('Please Enter your Card number '),
//   street: Yup.string().required('Please Enter your street '),
//   Apartment: Yup.string().required('Please Enter your Apartment number '),
// });
