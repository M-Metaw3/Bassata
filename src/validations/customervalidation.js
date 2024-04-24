import * as yup from 'yup';

const userSchema = yup.object().shape({
  nationalId: yup.string().min(14).max(14).required('National ID is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  mobilePhone: yup.string().required('Mobile Phone is required'),
  nameEn: yup.string().required('Name (English) is required'),
  nameAr: yup.string().required('Name (Arabic) is required'),
  secondNameEn: yup.string().required('Second Name En (English) is required'),
  secondNameAr: yup.string().required('Second Name AR (Arabic) is required'),
  thirdNameEn: yup.string().required('Third Name En (English) is required'),
  thirdNameAr: yup.string().required('Third Name AR (Arabic) is required'),
  familyNameEn: yup.string().required('Family Name (English) is required'),
  familyNameAr: yup.string().required('Family Name (Arabic) is required'),
  birthdate: yup.date().required('Birthdate is required'),
  gender: yup.string().required('Gender is required'),
  addressEn: yup.string().required('Address (English) is required'),
  addressAr: yup.string().required('Address (Arabic) is required'),
  jobTitle: yup.string().required('Job Title is required'),
  issuedDate: yup.date().required('Issued Date is required'),
  expirationDate: yup.date().required('Expiration Date is required'),
  governorateAr: yup.string().required('Governorate (Arabic) is required'),
  governorateEn: yup.string().required('Governorate (English) is required'),
  frontImageUrl: yup.string().required('Front Image is required'),
  backImageUrl: yup.string().required('Back Image is required'),
  faceImageUrl: yup.string().required('Face Image is required'),
  contractUrl: yup.string().required('Contract is required'),
  kycFormUrl: yup.string().required('KYC Form is required'),
});

export default userSchema;
