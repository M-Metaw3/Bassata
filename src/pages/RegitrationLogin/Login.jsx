
import  React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { PostDataWithImg,GetDataProtected } from '../../api/apiFactory';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { useNavigate, NavLink, Form } from 'react-router-dom';
import { useToast, Input } from '@chakra-ui/react';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
const nav= useNavigate()
const toast = useToast();
  const [formData, setFormData] = useState({
    // Define your form fields here
    name: '',
    email: '',
    password: '',
    phone: '',
    password_confirmation:'',
    profile:'',
    personal_id:'',
    role_id:0

  })



console.log(formData)


  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(formData)
if(formData.password!=formData.password_confirmation){
  toast({
  title: 'warning',
  description: 'password not matching',
  status: 'warning',
  duration: 3000,
  isClosable: true,
})

return ;
};
const dataa = new FormData();
dataa.append('name', formData.name);
dataa.append('email', formData.email);
dataa.append('password', formData.password);
dataa.append('password_confirmation', formData.password_confirmation);
dataa.append('personal_id', formData.personal_id);
dataa.append('phone', formData.phone);
dataa.append('profile', formData.profile);
dataa.append('role_id', formData.role_id);
    try {






      const response = await PostDataWithImg("user",dataa)
      console.log(response)
      if(response.status==201){
        
        toast({
          title: 'success',
          description: 'success registeration please verify your account and then log in',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
                // nav('/login')
                return;
              }
      if(response.response.status==500){

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
    }
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };
  const handleChange = (e) => {
    const { name, value, type } = e.target;
      
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === 'file' ? e.target.files[0] : value,
      };
    });

  };






  return (












    <>
        <div className="flex flex-col flex-1 px-5 my-auto max-md:max-w-full">
          <div className="self-center text-3xl text-cyan-900 capitalize max-md:max-w-full">
            Create an account
          </div>
          <div className="flex gap-5 justify-between items-start mt-16 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="grow justify-center items-start py-6 pr-16 pl-4 whitespace-nowrap rounded-lg border border-solid border-slate-300 max-md:pr-5">
            <input
                  required
                  className="w-full bg-transparent border-none focus:outline-none"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="name"
                  type="text"
                
                />
            </div>
            <div className="grow justify-center items-start py-6 pr-16 pl-4 rounded-lg border border-solid border-slate-300 max-md:pr-5">
             

                         <input
                   type="text"
                   className="w-full bg-transparent border-none focus:outline-none"
                   value={formData.personal_id}
                   onChange={handleChange}
                  required
                  fullWidth
                  id="personal_id"
                  placeholder=" ID"
                  name="personal_id"
                
                />
            </div>
          </div>
          <div className="justify-center items-start py-6 pr-16 pl-4 mt-6 whitespace-nowrap rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full">
         

            <input
                  required
                  className="w-full bg-transparent border-none focus:outline-none"
                  fullWidth
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="Email Address"
            
                  autoComplete="email"
                />
          </div>
          <div className="flex gap-5 justify-between items-start mt-6 max-md:flex-wrap max-md:max-w-full">
            <div className="grow justify-center items-start py-6 pr-16 pl-4 rounded-lg border border-solid border-slate-300 max-md:pr-5">
              

              <input
                className="w-full bg-transparent border-none focus:outline-none"
                  autoComplete="given-name"
                  name="phone"
                  required
                  fullWidth
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  id="phoneNumber"
                  placeholder="Phone number"
                  autoFocus
                />
            </div>
            <div className="grow justify-center items-start py-6 pr-16 pl-4 whitespace-nowrap rounded-lg border border-solid border-slate-300 max-md:pr-5">
              

                         <input
                             className="w-full bg-transparent border-none focus:outline-none"
                             type='file'
                  required
                  fullWidth
                  id="profile"
                  onChange={handleChange}
                  placeholder="profile"
                  name="profile"
                  autoComplete="profile"
                />
            </div>
          </div>
          <div className="justify-center items-start py-6 pr-16 pl-4 mt-6 whitespace-nowrap rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full">
          <input
                  required
                  className="w-full bg-transparent border-none focus:outline-none"
                  fullWidth
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
          </div>
          <div className="justify-center items-start py-6 pr-16 pl-4 mt-6 rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full">
           

            <input
                  required
                  fullWidth
                  className="w-full bg-transparent border-none focus:outline-none"
                  name="password_confirmation"
                  placeholder=" Confirm Password"
                  type="password"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  id="password_confirmation"
                  autoComplete="password_confirmation"
                />
          </div>
          <div className="justify-center items-start py-6 pr-16 pl-4 mt-6 rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full">

          <label htmlFor="price" className="block text-sm font-medium mb-2"> Doctors</label>
          <select  value={formData.role_id}  onChange={handleChange} 
                  name="role_id"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full" placeholder='Select option'>
          <option >email</option>


          {/* {doctors?.map((el)=>(
            <option value={el._id}>{el.email}</option>
          ))} */}

<option value={1}>1</option>
<option value={2}>2</option>
<option value={3}>3</option>
<option value={4}>4</option>


</select>
</div>

          <div className="flex gap-2 justify-between py-2 mt-4 text-gray-400 max-md:flex-wrap max-md:max-w-full">
         <input type='checkbox'/>
            <div className="flex-auto underline max-md:max-w-full">
              By creating an account, I agree to our{" "}
              <span className="text-gray-400 underline">Terms of use</span> and{" "}
              <span className="text-gray-400 underline">Privacy Policy</span>{" "}
            </div>
          </div>
          <button onClick={handleSubmit}  className="justify-center items-center px-16 py-4 mt-12 text-lg font-medium text-center text-white whitespace-nowrap rounded-lg bg-slate-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            Register
          </button>
                <NavLink to="/login" variant="body2">
          <div className="self-center mt-9 text-zinc-800 max-md:max-w-full">
            Already have an account ? Login
          </div>
           </NavLink>

        </div>
    
    













    
       
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  );
}