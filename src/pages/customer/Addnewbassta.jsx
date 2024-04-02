
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Box,useToast,Button} from'@chakra-ui/react'

import governorates from '../../shared/government';
import useAuth from './../../shared/useAuth';
import { Navigate } from 'react-router-dom';

const Addnewbassta = () => {
  const { accessToken, handleRefreshToken } = useAuth();

console.log(accessToken)
  const toast = useToast();
const [load,setload]=useState(false)
  const [formData, setFormData] = useState({
    nationalId: '11111111111122',
    email: 'example@example.com',
    mobilePhone: '01066252526',
    nameEn: 'Ahmed',
    nameAr: 'احمد',
    familyNameEn: 'Mohamed Hamdi Elmetwally Algebali',
    familyNameAr: 'محمد حمدى المتولى الجبالى',
    birthdate: '1990-01-01',
    gender: 'ذكر',
    addressAr: 'عنوان بالعربية',
    addressEn: 'Address in English',
    jobTitle: 'Software Engineer',
    issuedDate: '2022-01-01',
    expirationDate: '2025-01-01',
    isExpired: false,
    governorateAr: 'القاهرة',
    governorateEn: 'Cairo',
    frontImageUrl: "",
    backImageUrl: "",
    faceImageUrl: "",
    contractUrl: "",
    kycFormUrl: "",


  });





  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileUrl = reader.result;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: fileUrl,
        }));
      };
      reader.readAsDataURL(file);
    }
  };



 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accessToken) {
      toast({
        title: 'error',
        description: 'access token missed please refresh the page',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return;
    }


    try {
      setload(true)
      const response = await axios.post('http://102.69.150.7:9002/api/Customers/AddMMFCustomer', formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          // 'Content-Type': 'multipart/form-data',
        },
      });
      toast({
        title: 'successfully',
        description: 'Customer added successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      // Handle success, show message or redirect
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // If access token expired, refresh token and retry
        await handleRefreshToken();
        // Retry submitting the form
        await handleSubmit(e);
      } else {
        console.error('Add customer error:', error?.response?.data?.message);
        toast({
          title: 'error',
          description: error?.response?.data?.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
    }finally {
      setload(false)
    }
  };

  return (
    <Box  class="max-w-xl ">

    <h2 class="text-2xl font-bold mb-4">Create Customer</h2>
    <form class="space-y-4" onSubmit={handleSubmit}>
      <Box display={'flex'} justifyContent={'space-around'}>
      <Box width={'40%'}>
      <label class="block" for="nationalId">National ID</label>
      <input class="w-full border rounded-md py-2 px-3" type="text" id="nationalId" name="nationalId" value={formData.nationalId} onChange={handleChange} />
  
      <label class="block" for="email">Email</label>
      <input class="w-full border rounded-md py-2 px-3" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
  
      <label class="block" for="mobilePhone">Mobile Phone</label>
      <input class="w-full border rounded-md py-2 px-3" type="text" id="mobilePhone" name="mobilePhone" value={formData.mobilePhone} onChange={handleChange} />
  
      <label class="block" for="nameEn">Name (English)</label>
      <input class="w-full border rounded-md py-2 px-3" type="text" id="nameEn" name="nameEn" value={formData.nameEn} onChange={handleChange} />
  
      <label class="block" for="nameAr">Name (Arabic)</label>
      <input class="w-full border rounded-md py-2 px-3" type="text" id="nameAr" name="nameAr" value={formData.nameAr} onChange={handleChange} />
  
      <label class="block" for="familyNameEn">Family Name (English)</label>
      <input class="w-full border rounded-md py-2 px-3" type="text" id="familyNameEn" name="familyNameEn" value={formData.familyNameEn} onChange={handleChange} />
  
      <label class="block" for="familyNameAr">Family Name (Arabic)</label>
      <input class="w-full border rounded-md py-2 px-3" type="text" id="familyNameAr" name="familyNameAr" value={formData.familyNameAr} onChange={handleChange} />
  
      <label class="block" for="birthdate">Birthdate</label>
      <input class="w-full border rounded-md py-2 px-3" type="date" id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleChange} />
  
      <label class="block" for="gender">Gender</label>
      <select class="w-full border rounded-md py-2 px-3" id="gender" name="gender" value={formData.gender} onChange={handleChange}>
        <option value="ذكر">Male</option>
        <option value="أنثى">Female</option>
      </select>
  
      <label class="block" for="addressEn">Address (English)</label>
      <input class="w-full border rounded-md py-2 px-3" type="text" id="addressEn" name="addressEn" value={formData.addressEn} onChange={handleChange} />
      </Box>
      <Box width={'40%'}>
      <label class="block" for="addressAr">Address (Arabic)</label>
      <input class="w-full border rounded-md py-2 px-3" type="text" id="addressAr" name="addressAr" value={formData.addressAr} onChange={handleChange} />
  
      <label class="block" for="jobTitle">Job Title</label>
      <input class="w-full border rounded-md py-2 px-3" type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
  
      <label class="block" for="issuedDate">Issued Date</label>
      <input class="w-full border rounded-md py-2 px-3" type="date" id="issuedDate" name="issuedDate" value={formData.issuedDate} onChange={handleChange} />
  
      <label class="block" for="expirationDate">Expiration Date</label>
      <input class="w-full border rounded-md py-2 px-3" type="date" id="expirationDate" name="expirationDate" value={formData.expirationDate} onChange={handleChange} />
  
      <label class="block" for="governorateAr">Governorate (Arabic)</label>
<select class="w-full border rounded-md py-2 px-3" id="governorateAr" name="governorateAr" value={formData.governorateAr} onChange={handleChange}>
  {governorates.map(([id, en, ar]) => (
    <option key={id} value={ar}>{ar}</option>
  ))}
</select>
  
 
      <label class="block" for="governorateEn">Governorate (English)</label>
<select class="w-full border rounded-md py-2 px-3" id="governorateEn" name="governorateEn" value={formData.governorateEn} onChange={handleChange}>
  {governorates.map(([id, en, ar]) => (
    <option key={id} value={en}>{en}</option>
  ))}
</select>
  
      <label class="block" for="frontImage">Front Image</label>
      <input class="w-full border rounded-md py-2 px-3" type="file" id="frontImage" name="frontImageUrl" onChange={handleFileChange} />
      {formData.frontImageUrl && (
          <img src={formData.frontImageUrl} alt="Front Image" width={'150px'} className="mt-2" />
        )}
      <label class="block" for="backImage">Back Image</label>
      <input class="w-full border rounded-md py-2 px-3" type="file" id="backImage" name="backImageUrl" onChange={handleFileChange} />
      {formData.backImageUrl && (
          <img src={formData.backImageUrl} width={'150px'}  alt="Back Image" className="mt-2 max-w-xs" />
        )}
      <label class="block" for="faceImage">Face Image</label>
      <input class="w-full width={'150px'}  border rounded-md py-2 px-3" type="file" id="faceImage" name="faceImageUrl" onChange={handleFileChange} />
      {formData.faceImageUrl && (
          <img src={formData.faceImageUrl} alt="Face Image" className="mt-2 max-w-xs" />
        )}
      <label class="block" for="contract">Contract</label>
      <input class="w-full border rounded-md py-2 px-3" type="file" id="contract" name="contractUrl" onChange={handleFileChange} />
  
      <label class="block" for="kycForm">KYC Form</label>
      <input class="w-full border rounded-md py-2 px-3" type="file" id="kycForm" name="kycFormUrl" onChange={handleFileChange} />
      </Box>
    </Box>
      <Button width={'full'} bg={'red.600'} _hover={{bg:'red.500'}} isLoading={load} type="submit">Submit</Button>
    </form>
  </Box>
  
  );
};

export default Addnewbassta;
