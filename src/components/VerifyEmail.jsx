import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Image,Button,useToast } from '@chakra-ui/react';
import logo from '../assets/Group 847 (1).png'
import  axios  from 'axios';
import Url from '../api/ApiUrl';


const VerifyEmail = () => {
    const {token} = useParams()
    const nav = useNavigate()
const toast = useToast();

    const UpdateData = async () => {
       try {
           const res = await axios.patch(`${Url}/users/verifyemail/${token}`);
      if (res.status==200){
        toast({
            title: 'success',
            description: 'your email is verified successfully',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        // alert("your email is verified successfully")
nav('/login')
          return res;
      }
       } catch (error) {
        toast({
            title: 'error',
            description: 'your email is verified successfully',
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        // alert("an error occured")
       }
      };

    return (
   <Box display={'flex'} alignItems={'center'} justifyContent={'center'}  backgroundColor={"black"} h={'100vh'}>
    <Box>
<Image m={"50px"} src={logo}/>
<Button onClick={UpdateData}  >Click Here To Verify Your account  </Button>
    </Box>
   </Box>
    );
}

export default VerifyEmail;
