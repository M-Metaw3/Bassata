import React from 'react';
import {
    BrowserRouter as Router,
  
    Route,
    Outlet,
    Routes
  } from "react-router-dom";
  import { Box } from '@chakra-ui/react'
import Nav from '../pages/Navbar';
import Footer from '../pages/Footer';
import Cookies from 'js-cookie';

const Layout = ({x}) => {
  const userCookieadmin = Cookies?.get('user');
  const useradmin = userCookieadmin ? JSON.parse(userCookieadmin) : undefined;
  const jwtCookieadmin = Cookies?.get('useradmin');
  const jwtadmin = jwtCookieadmin ? JSON.parse(jwtCookieadmin) : undefined;
  console.log(useradmin)
    return (
   <Box display={"flex"}>
       <Box mr={"20px"} w={"20%"} >

<Footer/>
</Box>
   <Box  w={"80%"}>

   <Box  >
   <Nav user={useradmin}/>
   </Box>
   <Box  >

   <Outlet user={useradmin}/>
   </Box>
   </Box>




   </Box>
    );
}

export default Layout;
