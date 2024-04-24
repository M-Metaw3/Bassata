
import React, { useState, useLayoutEffect, useEffect  } from 'react';
import { getTokens, refreshAccessToken, makeApiRequest } from '../../shared/authUtils';
import axios from 'axios';
import {Box,useToast,Button, useDisclosure, FormControl, FormLabel, Input, ModalFooter, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Modal} from'@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import {openmodalcustomer } from '../../store/slice/customer'

import governorates from '../../shared/government';
// import useAuth from './../../shared/useAuth';
import { Navigate } from 'react-router-dom';
import useOtpGenerator from '../../shared/useOtpGenerator'; 
import userSchema from '../../validations/customervalidation';
import { PostData, PostDataWithImg, PostDataWithImg2 } from '../../api/apiFactory';
import  Cookies  from 'js-cookie';

// const Addnewbassta = () => {
//   const [accessToken, setAccessToken] = useState('');
//   const [refreshToken, setRefreshToken] = useState('');
//   const { loaading, error, otp, generateOtp } = useOtpGenerator();
//   const [loading, setLoading] = useState(false);

//   const [verificationCode, setVerificationCode] = useState('');

  
//   const {openmodal} = useSelector((state) => state.customer)

//   const { isOpen, onOpen, onClose } = useDisclosure()

//   const initialRef = React.useRef(null)
//   const finalRef = React.useRef(null)





//   useLayoutEffect (() => {
//     const fetchData = async () => {
//       try {
//         const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await getTokens();
//         setAccessToken(newAccessToken);
//         setRefreshToken(newRefreshToken);
//       } catch (error) {
//         console.error('Error fetching tokens:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   const toast = useToast();
// const [load,setload]=useState(false)
// const [ver,setver]=useState(false)

//   const [formData, setFormData] = useState({
//     nationalId: '11111111111122',
//     email: 'example@example.com',
//     mobilePhone: '01066252526',
//     nameEn: 'Ahmed',
//     nameAr: 'احمد',
//     secondNameEn: "mohsen" ,
//     secondNameAr: "محسن",
//     thirdNameEn: "mohamed" ,
//     thirdNameAr: "محمد" ,
//     familyNameEn: ' Algebali',
//     familyNameAr: 'محمد',
//     birthdate: '1990-01-01',
//     gender: 'ذكر',
//     addressAr: 'عنوان بالعربية',
//     addressEn: 'Address in English',
//     jobTitle: 'Software Engineer',
//     issuedDate: '2022-01-01',
//     expirationDate: '2025-01-01',
//     isExpired: false,
//     governorateAr: 'القاهرة',
//     governorateEn: 'Cairo',
//     frontImageUrl: "",
//     backImageUrl: "",
//     faceImageUrl: "",
//     contractUrl: "",
//     kycFormUrl: "",
//   });





//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };



//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     const file = files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const fileUrl = reader.result;
//         setFormData((prevFormData) => ({
//           ...prevFormData,
//           [name]: fileUrl,
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };





//   const dispatch = useDispatch()



// const handelerotp = async()=>{
//   if (formData?.mobilePhone.length < 10) {
//     return alert('Please enter a valid phone number');
// }
// // if(ver){
// //   return await handleSubmit()
// // }
//   onOpen()
//   await generateOtp(formData.mobilePhone)
// }








// const [phone,setphone]=useState('')

//   const handleSubmit = async (e) => {
//     if (!accessToken) {
//       toast({
//         title: 'error',
//         description: 'access token missed please refresh the page',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       })
//       return;
//     }

//     try {
// if(!ver){
//   if(initialRef.current.value!=otp) return toast({
//     title: 'error',
//     description: 'incorrect verification code',
//     status: 'error',
//     duration: 3000,
//     isClosable: true,
//   })

// }
  
//       setver(true)
//       setphone(formData.mobilePhone)


//       if(ver&&(phone!=formData.mobilePhone)){
//     toast({
//       title: 'error',
//       description: `you change phone number from ${phone} to ${formData.mobilePhone} please try agin and  verify the new phone number `,
//       status: 'error',
//       duration: 3000,
//       isClosable: true,
//     })   
//     setver(false);
// return;

//       }
//       const newAccessToken = await refreshAccessToken(refreshToken);
//       setAccessToken(newAccessToken);
//       setload(true)
//       const response = await axios.post('http://102.69.150.7:9002/api/Customers/AddMMFCustomer', formData, {
//         headers: {
//           Authorization: `Bearer ${newAccessToken}`,
//           // 'Content-Type': 'multipart/form-data',
//         },
//       });
//       toast({
//         title: 'successfully',
//         description: 'Customer added successfully',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       })
//       dispatch(openmodalcustomer(false))

//       setTimeout(() => {
//         window.location.reload();
//       }, 3000);
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         // If access token expired, refresh token and retry
//         console.log("object")
//         await refreshAccessToken();
//         // Retry submitting the form
//         await handleSubmit(e);
//       } else {
//         console.error('Add customer error:', error?.response?.data?.message);
//         toast({
//           title: 'error',
//           description: error?.response?.data?.message,
//           status: 'error',
//           duration: 3000,
//           isClosable: true,
//         })
//       }
//     }finally {
//       setload(false)

//     }
//   };

//   return (


//     <Box  class="max-w-xl ">


//     <h2 class="text-2xl font-bold mb-4">Create Customer</h2>
//     <form class="space-y-4" onSubmit={handleSubmit}>
//       <Box display={'flex'} justifyContent={'space-around'}>
//       <Box width={'40%'}>
//       <label class="block" for="nationalId">National ID</label>
//       <input class="w-full border rounded-md py-2 px-3" type="text" id="nationalId" name="nationalId" value={formData.nationalId} onChange={handleChange} />
  
//       <label class="block" for="email">Email</label>
//       <input class="w-full border rounded-md py-2 px-3" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
  
//       <label class="block" for="mobilePhone">Mobile Phone</label>
//       <input class="w-full border rounded-md py-2 px-3" type="text" id="mobilePhone" name="mobilePhone" value={formData.mobilePhone} onChange={handleChange} />
  
//       <label class="block" for="nameEn">Name (English)</label>
//       <input class="w-full border rounded-md py-2 px-3" type="text" id="nameEn" name="nameEn" value={formData.nameEn} onChange={handleChange} />
  
//       <label class="block" for="nameAr">Name (Arabic)</label>
//       <input class="w-full border rounded-md py-2 px-3" type="text" id="nameAr" name="nameAr" value={formData.nameAr} onChange={handleChange} />
  
//       <label class="block" for="secondNameEn">Second Name En (English)</label>
//       <input class="w-full border rounded-md py-2 px-3" type="text" id="secondNameEn" name="secondNameEn" value={formData.secondNameEn} onChange={handleChange} />
  
//       <label class="block" for="secondNameAr"> Second Name AR (Arabic)</label>
//       <input class="w-full border rounded-md py-2 px-3" type="text" id="secondNameAr" name="secondNameAr" value={formData.secondNameAr} onChange={handleChange} />


//       <label class="block" for="thirdNameEn">Third Name En(English)</label>
//       <input class="w-full border rounded-md py-2 px-3" type="text" id="thirdNameEn" name="thirdNameEn" value={formData.thirdNameEn} onChange={handleChange} />
  
//       <label class="block" for="thirdNameAr"> Second Name AR (Arabic)</label>
//       <input class="w-full border rounded-md py-2 px-3" type="text" id="thirdNameAr" name="thirdNameAr" value={formData.thirdNameAr} onChange={handleChange} />



//       <label class="block" for="familyNameEn">Family Name (English)</label>
//       <input class="w-full border rounded-md py-2 px-3" type="text" id="familyNameEn" name="familyNameEn" value={formData.familyNameEn} onChange={handleChange} />
  
//       <label class="block" for="familyNameAr">Family Name (Arabic)</label>
//       <input class="w-full border rounded-md py-2 px-3" type="text" id="familyNameAr" name="familyNameAr" value={formData.familyNameAr} onChange={handleChange} />
  
//       <label class="block" for="birthdate">Birthdate</label>
//       <input class="w-full border rounded-md py-2 px-3" type="date" id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleChange} />
  
//       <label class="block" for="gender">Gender</label>
//       <select class="w-full border rounded-md py-2 px-3" id="gender" name="gender" value={formData.gender} onChange={handleChange}>
//         <option value="ذكر">Male</option>
//         <option value="أنثى">Female</option>
//       </select>
  
//       <label class="block" for="addressEn">Address (English)</label>
//       <input class="w-full border rounded-md py-2 px-3" type="text" id="addressEn" name="addressEn" value={formData.addressEn} onChange={handleChange} />
//       </Box>
//       <Box width={'40%'}>
//       <label class="block" for="addressAr">Address (Arabic)</label>
//       <input class="w-full border rounded-md py-2 px-3" type="text" id="addressAr" name="addressAr" value={formData.addressAr} onChange={handleChange} />
  
//       <label class="block" for="jobTitle">Job Title</label>
//       <input class="w-full border rounded-md py-2 px-3" type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
  
//       <label class="block" for="issuedDate">Issued Date</label>
//       <input class="w-full border rounded-md py-2 px-3" type="date" id="issuedDate" name="issuedDate" value={formData.issuedDate} onChange={handleChange} />
  
//       <label class="block" for="expirationDate">Expiration Date</label>
//       <input class="w-full border rounded-md py-2 px-3" type="date" id="expirationDate" name="expirationDate" value={formData.expirationDate} onChange={handleChange} />
  
//       <label class="block" for="governorateAr">Governorate (Arabic)</label>
// <select class="w-full border rounded-md py-2 px-3" id="governorateAr" name="governorateAr" value={formData.governorateAr} onChange={handleChange}>
//   {governorates.map(([id, en, ar]) => (
//     <option key={id} value={ar}>{ar}</option>
//   ))}
// </select>
  
 
//       <label class="block" for="governorateEn">Governorate (English)</label>
// <select class="w-full border rounded-md py-2 px-3" id="governorateEn" name="governorateEn" value={formData.governorateEn} onChange={handleChange}>
//   {governorates.map(([id, en, ar]) => (
//     <option key={id} value={en}>{en}</option>
//   ))}
// </select>
// <Box>
//       <label class="block" for="frontImage">Front Image</label>
//       <input class="w-full border rounded-md py-2 px-3" type="file" id="frontImage" name="frontImageUrl" onChange={handleFileChange} />
//       {formData.frontImageUrl && (
//           <img src={formData.frontImageUrl} alt="Front Image" width={'150px'} className="mt-2" />
//         )}
//       <label class="block" for="backImage">Back Image</label>
//       <input class="w-full border rounded-md py-2 px-3" type="file" id="backImage" name="backImageUrl" onChange={handleFileChange} />
//       {formData.backImageUrl && (
//           <img src={formData.backImageUrl} width={'150px'}  alt="Back Image" className="mt-2 max-w-xs" />
//         )}
//       <label class="block" for="faceImage">Face Image</label>
//       <input class="w-full width={'150px'}  border rounded-md py-2 px-3" type="file" id="faceImage" name="faceImageUrl" onChange={handleFileChange} />
//       {formData.faceImageUrl && (
//           <img src={formData.faceImageUrl} width={'150px'}  alt="Face Image" className="mt-2 max-w-xs" />
//         )}
//       <label class="block" for="contract">Contract</label>
//       <input class="w-full border rounded-md py-2 px-3" type="file" id="contract" name="contractUrl" onChange={handleFileChange} />
  
//       <label class="block" for="kycForm">KYC Form</label>
//       <input class="w-full border rounded-md py-2 px-3" type="file" id="kycForm" name="kycFormUrl" onChange={handleFileChange} />
//       </Box>
//       </Box>

//     </Box>
//       {/* <Button width={'full'} bg={'red.600'} isDisabled={!accessToken} _hover={{bg:'red.500'}} isLoading={load} type="submit">Submit</Button> */}
//     { !ver? <Button width={'full'} bg={'red.600'} isDisabled={!accessToken} _hover={{bg:'red.500'}} isLoading={loaading} onClick={handelerotp}>Submit</Button>: <Button width={'full'} bg={'red.600'} isDisabled={!accessToken} _hover={{bg:'red.500'}} isLoading={loaading} onClick={handleSubmit} >Submit</Button>}
//       {error && <div className="text-red-500 mt-4">{error}</div>}
//       <Box>






// {openmodal&&<Modal
//   initialFocusRef={initialRef}
//   finalFocusRef={finalRef}
//   isOpen
//   onClose={onClose}
// >
//   <ModalOverlay />
//   <ModalContent>
//     <ModalHeader>Otp</ModalHeader>
//     <ModalCloseButton />
//     <ModalBody pb={6}>
//       <FormControl>
//         <FormLabel>enter otp  5 numbers sended to : {formData?.mobilePhone}</FormLabel>
//         <Input ref={initialRef} placeholder='OTP' />
//       </FormControl>


//     </ModalBody>

//     <ModalFooter>
//       <Button isDisabled={!accessToken} _hover={{bg:'red.500'}} isLoading={load} onClick={handleSubmit} colorScheme='blue' mr={3}>
//         Save
//       </Button>
//       <Button  onClick={() => dispatch(openmodalcustomer(false))}>Cancel</Button>
//     </ModalFooter>
//   </ModalContent>
// </Modal>}












// </Box>
//     </form>
//   </Box>
  
//   );
// };

// export default Addnewbassta;











const Addnewbassta = () => {
  const toast = useToast();
  const [err,seterr]=useState({})
  const [userid,setuserid]=useState('')

const [load,setload]=useState(false)
  const dispatch = useDispatch()
  const finalRef = React.useRef(null)
    const { isOpen, onOpen, onClose } = useDisclosure()









  const initialRef = React.useRef(null)
  const {openmodal} = useSelector((state) => state.customer)
const verifyotp = async()=>{
console.log(initialRef.current.value)

try {
  if(!userid){
    return alert("we didnt dedict user id")
  }
const ver ={
  customer_id: userid,
  otp: initialRef.current.value
}

const response = await PostData('customer/verify',ver)

console.log(response)
  
} catch (error) {
  if(error?.response?.data?.status==false){

    toast({
      title: 'error',
      description: error?.response?.data?.message,
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }
  console.log(error)



  
}finally{

  dispatch(openmodalcustomer(false));


}





}









// const updateuser=async(id,formData)=>{



//   try {
//     const rr = await PostDataWithImg(`customer/${id}`,formData)
// console.log("response")

// if(rr?.status==200){
// dispatch(openmodalcustomer(true))
// setuserid(id)

// console.log("done")
// return;
// }

// } catch (error) {

// toast({
// title: 'error',
// description: error?.response?.data?.message,
// status: 'error',
// duration: 3000,
// isClosable: true,
// })
// console.log(error)
// }











// }













useEffect(() => {
  const postData = async () => {
    const data = {
      login: "1813687645",
      password: "k!J$KNd?*PD4:J",
      terminal_id: "1",
      language: "en",
      action: "TransactionInquiry",
      version: 2,
      data: {
        service_version: 173,
        account_number: "1813687645",
        service_id: 381496,
        input_parameter_list: [
          {
            key: "customer_mobile_number",
            value: "01008541445"
          }
        ]
      }
    };

    try {
      const response = await axios.post('https://nx-staging.bee.com.eg:6443/restgw/api/transaction', data);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  postData();
}, []);



const updateuser = async (id, formData) => {
  try {
    const rr = await PostDataWithImg2(`customer/${id}`, formData);
    console.log("response");

    if (rr?.status === 200) {
      dispatch(openmodalcustomer(true));
      setuserid(id);
      console.log("done");
      return;
    }
  } catch (error) {
    toast({
      title: 'error',
      description: error?.response?.data?.message,
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
    console.log(error);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  formData.append('isExpired', 0);

  try {
    setload(true);
    const r = await userSchema.validate(Object.fromEntries(formData), { abortEarly: false });

    const response = await PostDataWithImg("customer", formData);
    console.log(response);

    if (response.status === 201) {
      dispatch(openmodalcustomer(true));
      setuserid(response?.data?.data);

      toast({
        title: 'success',
        description: response?.data?.message,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    // e.target.reset(); 
  } catch (error) {
    if (error.inner) {
      let newerror = {};
      error.inner.forEach((err) => {
        newerror[err.path] = err.message;
      });
      seterr(newerror);
      return;
    }else{
      seterr({});

    }

    console.log(error);

    if (error?.response?.status == 409) {
      const id = error?.response?.data?.data?.id;
      formData.append('_method', 'PATCH');
      await updateuser(id, formData);
      return;
    }

    toast({
      title: 'error',
      description: error?.response?.data?.message,
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
    console.error('Error submitting form:', error?.response);
  } finally {
    setload(false);
    

  }
};

    return (
    <>
  
  
  
      <form className="space-y-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="nationalId" className="block text-gray-700 text-sm font-bold mb-2">National ID</label>
      <input type="text" id="nationalId" name="nationalId" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input type="email" id="email" name="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="mobilePhone" className="block text-gray-700 text-sm font-bold mb-2">Mobile Phone</label>
      <input type="text" id="mobilePhone" name="mobilePhone" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="nameEn" className="block text-gray-700 text-sm font-bold mb-2">Name (English)</label>
      <input type="text" id="nameEn" name="nameEn" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="nameAr" className="block text-gray-700 text-sm font-bold mb-2">Name (Arabic)</label>
      <input type="text" id="nameAr" name="nameAr" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="secondNameEn" className="block text-gray-700 text-sm font-bold mb-2">Second Name (English)</label>
      <input type="text" id="secondNameEn" name="secondNameEn" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="secondNameAr" className="block text-gray-700 text-sm font-bold mb-2">Second Name (Arabic)</label>
      <input type="text" id="secondNameAr" name="secondNameAr" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="thirdNameEn" className="block text-gray-700 text-sm font-bold mb-2">Third Name (English)</label>
      <input type="text" id="thirdNameEn" name="thirdNameEn" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="thirdNameAr" className="block text-gray-700 text-sm font-bold mb-2">Third Name (Arabic)</label>
      <input type="text" id="thirdNameAr" name="thirdNameAr" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="familyNameEn" className="block text-gray-700 text-sm font-bold mb-2">Family Name (English)</label>
      <input type="text" id="familyNameEn" name="familyNameEn" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="familyNameAr" className="block text-gray-700 text-sm font-bold mb-2">Family Name (Arabic)</label>
      <input type="text" id="familyNameAr" name="familyNameAr" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="birthdate" className="block text-gray-700 text-sm font-bold mb-2">Birthdate</label>
      <input type="date" id="birthdate" name="birthdate" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
      <select id="gender" name="gender" required className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option value="ذكر">Male</option>
        <option value="أنثى">Female</option>
      </select>
    </div>
  
    <div className="mb-4">
      <label htmlFor="addressEn" className="block text-gray-700 text-sm font-bold mb-2">Address (English)</label>
      <input type="text" id="addressEn" name="addressEn" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="addressAr" className="block text-gray-700 text-sm font-bold mb-2">Address (Arabic)</label>
      <input type="text" id="addressAr" name="addressAr" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="jobTitle" className="block text-gray-700 text-sm font-bold mb-2">Job Title</label>
      <input type="text" id="jobTitle" name="jobTitle" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>

    {/* <div className="mb-4">
  <label htmlFor="isExpired" className="block text-gray-700 text-sm font-bold mb-2">
    isExpired
  </label>
  <input
    type="checkbox"
    id="isExpired"
    name="isExpired"
    className="mr-2 leading-tight"
    // Additional props for styling and functionality
  />
  <span className="text-sm text-gray-600">Is the item expired?</span>
</div> */}

  
    <div className="mb-4">
      <label htmlFor="issuedDate" className="block text-gray-700 text-sm font-bold mb-2">Issued Date</label>
      <input type="date" id="issuedDate" name="issuedDate" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="expirationDate" className="block text-gray-700 text-sm font-bold mb-2">Expiration Date</label>
      <input type="date" id="expirationDate" name="expirationDate" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  
    <div className="mb-4">
      <label htmlFor="governorateEn" className="block text-gray-700 text-sm font-bold mb-2">Governorate (English)</label>
      <select id="governorateEn" name="governorateEn" required className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

        {governorates.map(([id, en, ar]) => (
    <option key={id} value={en}>{en}</option>
  ))}

      </select>
    </div>
  
    
  
  <div className="mb-4">
    <label htmlFor="governorateAr" className="block text-gray-700 text-sm font-bold mb-2">Governorate (Arabic)</label>
    <select id="governorateAr" name="governorateAr" required className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
       {governorates.map(([id, en, ar]) => (
    <option key={id} value={ar}>{ar}</option>
  ))}
    </select>
  </div>
  
  <div className="mb-4">
    <label htmlFor="frontImageUrl" className="block text-gray-700 text-sm font-bold mb-2">Front Image</label>
    <input type="file" id="frontImageUrl" name="frontImageUrl" accept="image/*" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  
  <div className="mb-4">
    <label htmlFor="backImage" className="block text-gray-700 text-sm font-bold mb-2">Back Image</label>
    <input type="file" id="backImage" name="backImageUrl" accept="image/*" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  
  <div className="mb-4">
    <label htmlFor="faceImage" className="block text-gray-700 text-sm font-bold mb-2">Face Image</label>
    <input type="file" id="faceImage" name="faceImageUrl" accept="image/*" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  
  <div className="mb-4">
    <label htmlFor="contract" className="block text-gray-700 text-sm font-bold mb-2">Contract</label>
    <input type="file" id="contract" name="contractUrl" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  
  <div className="mb-4">
    <label htmlFor="kycForm" className="block text-gray-700 text-sm font-bold mb-2">KYC Form</label>
    <input type="file" id="kycForm" name="kycFormUrl" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  
  <div className="flex items-center justify-between">
    <Button isLoading={load} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</Button>
  </div>
  </form>
    <div>
    <ul>
      {Object.keys(err).map((key, index) => (
        <li className='text-red-600' key={index}>{err[key]}</li>
      ))}
    </ul>
  </div>












   {openmodal&&<Modal
  initialFocusRef={initialRef}
  finalFocusRef={finalRef}
  isOpen
  onClose={onClose}
>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Otp</ModalHeader>
    <ModalCloseButton />
    <ModalBody pb={6}>
      <FormControl>
        <FormLabel>enter otp  5 numbers sended to : </FormLabel>
        <Input ref={initialRef} placeholder='OTP' />
      </FormControl>


    </ModalBody>

    <ModalFooter>
      <Button  _hover={{bg:'red.500'}} isLoading={load} onClick={verifyotp} colorScheme='blue' mr={3}>
        Save
      </Button>
      <Button  onClick={() => dispatch(openmodalcustomer(false))}>Cancel</Button>
    </ModalFooter>
  </ModalContent>
 </Modal>}

  </>
  
    );
  };
  
  export default Addnewbassta;
  