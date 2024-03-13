import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PostDataWithImg,GetDataProtected ,UpdateDataWithImg} from '../../api/apiFactory';
import { format } from 'date-fns';

import { useSelector, useDispatch } from 'react-redux'
import  {deletebranchaction,openmodalbranches,editbranc } from '../../store/slice/branches'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
import {Box,useToast,Button} from '@chakra-ui/react'
import Skeletoncomp from '../../components/Skeletoncomp';
const Updateadmins = () => {
const {id} = useParams()


  const { isPending, error, data } = useQuery({
    queryKey: ['userudated'],
    queryFn: () =>
    GetDataProtected(`user/${id}`)
  })

  
  const [file1, setFile1] = useState(null);
  const [fileName1, setFileName1] = useState('');
  const dispatch = useDispatch()


  // const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [roles, setroles] = useState([]);
  const [brnaches, setbranches] = useState([]);



  // Fetch branch data from API
  useEffect(() => {
    const fetchBranch = async () => {
      try {
        const response = await GetDataProtected('branch'); // Replace with your actual API endpoint for branches
        // Assuming the response contains an array of branches
        // Set the branch data in formData
        console.log(response)
        setbranches(response?.data);
      } catch (err) {
        console.error('Error fetching branches:', err);
      }
    };

    fetchBranch();
  }, []);


  useEffect(() => {
    const fetchBranch = async () => {
      try {
        const response = await GetDataProtected('role'); // Replace with your actual API endpoint for branches
        // Assuming the response contains an array of branches
        // Set the branch data in formData
        setroles(response?.data);
      } catch (err) {
        console.error('Error fetching branches:', err);
      }
    };

    fetchBranch();
  }, []);
const handleDragOver = (event) => {
  event.preventDefault();
};
const handleFileChange = (event, setFile, setFileName) => {
  const selectedFile = event.target.files[0];
  setFile(selectedFile);
  setFileName(selectedFile.name);
};
const handleDrop = (event, setFile, setFileName) => {
  event.preventDefault();
  const selectedFile = event.dataTransfer.files[0];
  setFile(selectedFile);
  setFileName(selectedFile.name);
};

const handleInputChange = (event, setFile, setFileName) => {
  setFile(null);
  setFileName(event.target.value);
};
const [formData, setFormData] = useState({
  name: data?.data?.name,
  email: data?.data?.email,
  personal_id: data?.data?.personal_id,
  profile: data?.data?.profile,
  rolename:data?.data?.role?.name,
  role_id: data?.data?.role?.id,
  branch_id: data?.data?.branch?.id,
  barnchnam:data?.data?.branch?.name
   // Will be fetched from an API
});
useEffect(() => {
  setFormData({
    name: data?.data?.name,
    email: data?.data?.email,
    personal_id: data?.data?.personal_id,
    profile: data?.data?.profile,
    rolename:data?.data?.role?.name,
    role_id: data?.data?.role?.id,
    branch_id: data?.data?.branch?.id,
    barnchnam:data?.data?.branch?.name
     // Will be fetched from an API
  } || null); // Update state when data changes
}, [data]);
console.log(data?.data?.branch?.id)
console.log(formData?.branch_id)
const [loading, setloading] = useState(false);
const toast = useToast();


const handleUpdate = async (event) => {
    event.preventDefault();
console.log(formData.role_id)
// Create a new FormData object

const updatedData = new FormData();
updatedData.append('_method', "PATCH");
    if(formData?.name!=data?.data?.name){

      updatedData.append('name', formData.name);
    }
    if(formData?.email!=data?.data?.email){    updatedData.append('email', formData.email)};


    if(formData?.personal_id!=data?.data?.personal_id){


      updatedData.append('personal_id', formData.personal_id);
    }

    if(formData?.branch_id!=data?.data?.branch?.id){


      updatedData.append('branch_id', formData?.branch_id);
    }
    // updatedData.append('phone', formData.phone);
if(formData?.role_id!=data?.data?.role?.id){
    updatedData.append('role_id', formData.role_id)
}
    // updatedData.append('branch_id', formData.branch_id);
    if(file1){
    updatedData.append('profile', file1);
    }
    try {
    setloading(true)

      // Make an API call to update user data
      const response = await PostDataWithImg(`user/${data?.data?.id}`, updatedData);
      console.log(response.data); // Handle the response as needed
      if(response.status==200){
        setloading(false)
                
                toast({
                  title: 'success',
                  description: 'success updated  ',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                });
                setTimeout(() => {
                    window.location.href="/layout/admins"
                }, 1000);
                     
                        return;
                      }
              if(response.response.status==500){
                setloading(false)
        
                toast({
                  title: 'Error',
                  description: 'Failed to fetch users. Please try again.',
                  status: response.response.data.messge,
                  duration: 3000,
                  isClosable: true,
                });
            }
              
    } catch (error) {
      console.log(error)
      setloading(false)
  
            toast({
              title: 'Error',
              description:error?.response?.data?.message,
              status: "error",
              duration: 3000,
              isClosable: true,
            });
    }
  };
  if(isPending) return <Skeletoncomp/>

console.log(formData.personal_id)
  return (
    <Box alignItems={"center"} width={"90%"} my={"auto"} p={"10px"} mx={"auto"}>
      <h2 className="text-2xl font-semibold mb-4">Update admin :  { formData?.name}</h2>
      
      <Box  fontSize={{base:"0.7rem",lg:"1.5rem"}} className=" justify-center items-start py-5 pr-10 pl-4 whitespace-wrap max-md:pr-5">
       Created At :       {format(new Date(data?.data?.created_at), 'MMMM dd, yyyy HH:mm:ss')}
              </Box>
      <form onSubmit={handleUpdate}>
        <Box fontSize={"20px"} m={"10px"}>Name : </Box>
        <input
          type="text"
          placeholder="Name"
          value={formData?.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
             <Box fontSize={"20px"} m={"10px"}>Email : </Box>
                <input
          type="text"
          placeholder="Email"
          value={formData?.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
             <Box fontSize={"20px"} m={"10px"}>Personal Id </Box>

                        <input
          type="text"
          placeholder="Personal Id"
          value={formData?.personal_id}
          onChange={(e) => setFormData({ ...formData, personal_id: e.target.value })}
          className="border p-2 mb-2 w-full"
        />


<Box fontSize={"20px"} m={"10px"}>Role </Box>



      <select onChange={(e) => setFormData({ ...formData, role_id: e.target.value })} value={formData?.role_id?.id} placeholder='nationality'>
  <option value={data?.data?.role?.id}>{formData?.rolename}</option>
  {roles?.map((el)=>(

<option value={el.id}>{el?.name}</option>
  ))}


</select>

<br/>
{/* 
<div className="max-md:max-w-full">
        branches
      </div>
      <select onChange={(e) => setFormData({ ...formData, branch_id: e.target.value })} value={formData?.branch_id?.id} placeholder='nationality'>
  <option value={data?.data?.branch?.id}>{formData?.barnchnam}</option>
  {brnaches?.map((el)=>(

<option value={el.id}>{el?.name}</option>
  ))}


</select> */}






        <label
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) => handleDrop(e, setFile1, setFileName1)
                }
                  htmlFor="fileInput1"

                  className="flex justify-center items-center px-16 py-5 mt-6 w-full whitespace-nowrap rounded-xl border-2 border-dashed border-neutral-700 max-w-[720px] max-md:px-5 max-md:max-w-full"
                >
                  {/* Your content for the first file input */}
                  <div className="flex flex-col max-w-full w-[247px]">
                    {/* Display file preview or placeholder */}
                    {file1 ? (
                      <img
                        loading="lazy"
                        src={URL.createObjectURL(file1)}
                        alt="Uploaded File"
                        className="self-center aspect-square w-[80px] mb-2"
                      />
                    ) : (
                      <img
                        loading="lazy"
                        src={data?.data?.profile}
                        className="self-center aspect-[1.4] w-[100px]"
                      />
                    )}
                    {/* File input */}
                    <input
                      type="file"
                      id="fileInput1"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) =>{
                        handleFileChange(e, setFile1, setFileName1);
                        // Trigger the React Hook Form onChange event for the file input
                    }}
                      className="hidden"
                    />
                    <div className="mt-7">Upload Customer docs </div>
                  </div>
                </label>

        <Box my={"20px"} alignContent={"center"} >
            <Button isLoading={loading}    type="submit" width={"25%"}   colorScheme="teal">
            update
            </Button>
          </Box>
      </form>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </Box>
  );
};

export default Updateadmins;



// src/components/UserDetailsComponent.js











// import React from 'react';
// import {
//   Box,
//   Flex,
//   Text,
//   Avatar,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
// } from '@chakra-ui/react';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: theme.spacing(2),
//   },
//   avatar: {
//     width: theme.spacing(10),
//     height: theme.spacing(10),
//     marginBottom: theme.spacing(2),
//   },
//   input: {
//     marginBottom: theme.spacing(2),
//   },
// }));

// const Updateadmins = () => {
//   const classes = useStyles();
//     const {user} = useSelector((state) => state.admins)

//   return (
//     <Box className={classes.root}>
//       <Avatar
//         src={user.profile}
//         alt={`${user.name}'s profile`}
//         className={classes.avatar}
//       />
//       <Text fontSize="xl" fontWeight="bold">
//         {user.name}
//       </Text>
//       <Text>{user.email}</Text>
//       <Text>Personal ID: {user.personal_id}</Text>
//       <Text>Phone: {user.phone}</Text>
//       <Text>Role ID: {user.roleId}</Text>
//     </Box>
//   );
// };

// export default Updateadmins;







// 'use client'

// import {
//   Container,
//   SimpleGrid,
//   Image,
//   Flex,
//   Heading,
//   Text,
//   Stack,
//   StackDivider,
//   Icon,
//   useColorModeValue,Box
// } from '@chakra-ui/react'
// import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
// import { ReactElement } from 'react'
// import { useSelector, useDispatch } from 'react-redux'




// const Updateadmins=()=> {
//     const {user} = useSelector((state) => state.admins)

//   return (
//     <Container maxW={'5xl'} py={12}>
//       <Box columns={{ base: 1, md: 2 }} spacing={10}>
//         <Stack spacing={4}>

//           <Heading>{user?.email}</Heading>
//           <Text color={'gray.500'} fontSize={'lg'}>

//           </Text>
//           <Stack
//             spacing={4}
//             divider={
//               <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
//             }>
//        <Text fontSize="xl" fontWeight="bold">
//          {user.name}
//        </Text>
//        <Text>{user.email}</Text>
//        <Text>Personal ID: {user.personal_id}</Text>
//        <Text>Phone: {user.phone}</Text>
//        <Text>Role ID: {user.role}</Text>
//           </Stack>
//         </Stack>
//         <Flex>
//           <Image
//             rounded={'md'}
//             alt={'feature image'}
//             src={
// user?.profile            }
//             objectFit={'cover'}
//           />
//         </Flex>
//       </Box>
//     </Container>
//   )
// }
// export default Updateadmins