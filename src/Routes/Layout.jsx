import React,{useState} from 'react';
import {
    BrowserRouter as Router,
  
    Route,
    Outlet,
    Routes
  } from "react-router-dom";
  import { Box,Button } from '@chakra-ui/react'
import Nav from '../pages/Navbar';
import Footer from '../pages/Footer';
import Cookies from 'js-cookie';
import { HamburgerIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
const Layout = ({x}) => {
  const userCookieadmin = Cookies?.get('user');
  const useradmin = userCookieadmin ? JSON.parse(userCookieadmin) : undefined;
  const jwtCookieadmin = Cookies?.get('useradmin');
  const jwtadmin = jwtCookieadmin ? JSON.parse(jwtCookieadmin) : undefined;
  const [condition, setcondition] = useState(false);

  console.log(useradmin)
    return (<><Box>          <Button onClick={()=>setcondition((pre)=>!pre)} display={{base:"block",lg:"none"}}>
     <HamburgerIcon/>
      </Button></Box>
   <Box display={"flex"}>
{/* aaaaaaaa */}
       {/* <Box   display={condition ? { base: "block" } : { base: "none", lg: "block" }}    mr={"20px"} w={"20%"} > */}
       <Box   display={ { base: `${condition?"block":"none"}`, lg: "block" }}    mr={"20px"} w={"20%"} >

<Footer/>
</Box>
   <Box  w={{base:"100%" ,lg:'80%'}}>

   <Box  >
   <Nav user={useradmin}/>
   </Box>
   <Box  >

   <Outlet user={useradmin}/>
   </Box>
   </Box>




   </Box>
   </>

    );
}

export default Layout;
