import React,{useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Image, Button, FormLabel, Input } from '@chakra-ui/react';
import logo from '../assets/Group 847 (1).png'
import  axios  from 'axios';
import Url from '../api/ApiUrl';

const Resestpass = () => {
    const {token} = useParams()
    const [formData, setFormData] = useState({
        // Define your form fields here
        password: '',
        passwordConfirm: '',
        // ... other form fields
      });
      const nav = useNavigate()

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
 
    const UpdateData = async () => {
formData.password!=formData.passwordConfirm??alert("password not matching")

       try {
           const res = await axios.patch(`${Url}/users/resetPassword/${token}`,formData);
           console.log(res)
      if (res.status==200){
        alert("your password reset successful")
nav('/login')
          return res;
      }else{
        alert("an error occured")
        
      }
       } catch (error) {
        alert("an error occured")
       }
      };

    return (
   <Box display={'flex'} alignItems={'center'} justifyContent={'center'}  backgroundColor={"black"} h={'100vh'}>
    <Box>
<Image m={"50px"} src={logo}/>
<FormLabel color={'white'}>New Password</FormLabel>
            <Input
              type="password"
              name="password"
              borderColor={'white'}
              color={'white'}
              value={formData.password}
              onChange={handleChange}
            />
            <FormLabel color={'white'}>Confirm Password</FormLabel>
            <Input
            required
              type="password"
              name="passwordConfirm"
              borderColor={'white'}
              color={'white'}
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
            
<Button m={'10px'} onClick={UpdateData}  >submit </Button>
    </Box>
   </Box>
    );
}

export default Resestpass ;

