import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,Box

 

} from '@chakra-ui/react';


import Cookies from 'js-cookie';
import { PostDatalogin } from '../../api/apiFactory';
import {Navigate, NavLink, useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import loginimage from '../../assets/Rectangle 1.png'
export default function Registration({isjwt,islogin}) {
  const userCookie = Cookies?.get('user');
  const user = userCookie ? JSON.parse(userCookie) : undefined;


  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const toast = useToast();
  if (islogin&&isjwt) return <Navigate to={'/'} />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
 
    
    try {
      const response = await PostDatalogin('auth/login', formData);
      console.log(response);
      if (response.status === 200) {
        toast({
          title: 'Success',
          description: 'Success login.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
  
        Cookies.set('token', response?.data?.data?.token, { expires: 1 })
        Cookies.set('user',JSON.stringify( response?.data?.data), { expires: 1 })
        window.location.href = '/layout';

      
          // Save token in a cookie

      }
      if (response.response && response.response.status === 401) {
        toast({
          title: 'Warnning',
          description: response.response.data.message,
          status: 'warning',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const UpdateData = async () => {
  //   try {
  //     const response = await PostDatalogin('auth/login', formData );

  //      console.log(response)
  //  if (response.status==200){
  //    alert("your email is verified successfully")
  //    toast({
  //     title: 'success',
  //     description: 'your email is verified successfully',
  //     status: 'success',
  //     duration: 3000,
  //     isClosable: true,
  //   });

  //      return response;
  //  }else{
  //   toast({
  //     title: 'Error',
  //     description: response?.response?.data?.messge,
  //     status: 'error',
  //     duration: 3000,
  //     isClosable: true,
  //   }); 
  //  }
  //   } catch (error) {
  //    alert("an error")
  //   }
  //  };

  if(user){
 
    return window.location.href = "/layout";
  } 

  return (













<>

{/* <div className="flex flex-col bg-white">
  
      <div className="flex gap-5 justify-between w-full text-sm max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src={loginimage}
          className="flex-1 w-full aspect-[0.86] max-md:max-w-full"
        />
        <div className="flex flex-col flex-1 px-5 py-px my-auto max-md:max-w-full">
          <div className="self-center text-3xl text-cyan-900 capitalize max-md:max-w-full">
            welcome back !
          </div>
          <div className="justify-center items-start py-6 pr-16 pl-4 mt-14 rounded-lg border border-solid border-slate-300 text-slate-500 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
           
            <input placeholder=' Email / Phone number' name="email" value={formData.email} onChange={handleChange}  className="w-full h-full font-bold bg-transparent border-none focus:outline-none" type="email" />
          </div>
          <div className="justify-center items-start py-6 pr-16 pl-4 mt-6 whitespace-nowrap rounded-lg border border-solid border-slate-300 text-slate-500 max-md:pr-5 max-md:max-w-full">
                  <input placeholder='Password'    className="w-full h-full  font-bold text-3xlbg-transparent border-none focus:outline-none" name="password" value={formData.password} onChange={handleChange} type="password" />
          </div>
          <button onClick={handleSubmit} className="justify-center items-center px-16 py-4 mt-10 text-lg font-medium text-center text-white whitespace-nowrap rounded-lg bg-slate-500 max-md:px-5 max-md:max-w-full">
            Login
          </button>
          <div className="self-center mt-11 text-stone-500 max-md:mt-10 max-md:max-w-full">
            <span className="text-zinc-800">Don’t have an account? </span>
            <NavLink to={'/registration'}>   <span className="text-stone-700 text-2xl">Register</span></NavLink>
            <br/>
            <br/>

            


          </div>
              <Button onClick={onOpen}><Text color={'blue.500'}>Forgot password?</Text></Button>
        </div>
              <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent>
           <ModalHeader>Modal Title</ModalHeader>
           <ModalCloseButton />
           <ModalBody>
           <FormControl>
             <Text>enter your email to send you reset password</Text>
             <br/>
             <br/>

           <FormLabel>Email address</FormLabel>
             <Input name="email" value={formData.email} onChange={handleChange} type="email" />
           </FormControl>
           </ModalBody>

           <ModalFooter>
             <Button color='blue' mr={3} onClick={onClose}>
               Close
             </Button>
            {/* <Button onClick={UpdateData} variant='ghost'>Send to email</Button> */}
           {/* </ModalFooter> */}
        {/* </ModalContent> */}
      {/* </Modal> */}
      {/* </div> */}
    {/* </div>  */}










        <Box  className="pl-20 bg-white max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
         <div className="flex flex-col  lg:w-[45%] md:w-[100%] max-md:ml-0 max-md:w-full">
           <div className="flex flex-col mt-14 text-lg text-neutral-700 max-md:mt-10 max-md:max-w-full">
             <img
               loading="lazy"
               src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac5b5ea9da02499b8cd3b88f92c7828050a211a73405cde915dbf17f17a4502f?"
              className="aspect-[0.55] w-[95px]"
            />
            <div className="mt-28 text-4xl max-md:mt-10 max-md:max-w-full">
              Log in{" "}
            </div>
            <div className="mt-8 mr-3 text-2xl max-md:mr-2.5 max-md:max-w-full">
              Please enter your user name and password
            </div>
            <div className="justify-center items-start py-5 pr-16 pl-5 mt-8 whitespace-nowrap rounded-2xl border border-solid border-[color:var(--Gray-Gray-4,#838383)] text-zinc-400 max-md:pr-5 max-md:max-w-full">
            <input
             type="text"
             name="email" value={formData.email} onChange={handleChange}  
             placeholder="Email"
       
       className="w-full h-full bg-transparent border-none focus:outline-none"
          
          />
            </div>
            <div className="flex flex-col justify-center p-2.5 mt-8 rounded-2xl border border-solid border-[color:var(--Gray-Gray-4,#838383)] text-zinc-400 max-md:max-w-full">
              <Box  display={"flex"} className="flex  justify-between p-2.5 max-md:flex-wrap max-md:max-w-full">
                        <input
             type="password"
             name="password" value={formData.password} onChange={handleChange}
             placeholder="Password"
       
       className="w-[90%] h-full bg-transparent border-none focus:outline-none"
          
          /> 
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/62eea3ae81fd6d268d56643b4966ad3140a490bca8bd1eb2c6c495a751610f98?"
                  className="w-6 aspect-square"
                />
              </Box>
            </div>
            <button onClick={handleSubmit}  className="justify-center hover:bg-red-400 items-center px-16 py-4 mt-8 text-center whitespace-nowrap bg-red-600 rounded-2xl text-neutral-200 max-md:px-5 max-md:max-w-full">
              Log in{" "}
            </button>
          </div>
        </div>
        <Box display={{base:"none" ,md:'block'}} h={"100vh"} className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={loginimage}
            className=" w-full aspect-square h-full max-md:mt-10 max-md:max-w-full"
          />
        </Box>
      </div>
    </Box>  










</>
  );
} 
