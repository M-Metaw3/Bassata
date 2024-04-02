import React,{useState} from 'react';
// import { usePathname } from 'next/navigation'
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Outlet,
  Routes,
  NavLink
} from "react-router-dom";
import logo from '../assets/Group 4.svg'
import userprofile from '../assets/users-profiles-03.svg'
import admin from '../assets/Group.svg'
import branches from '../assets/Frame.svg'
import reports from '../assets/Group 4.svg'
import { Box, Button } from '@chakra-ui/react';

import { useSelector, useDispatch } from 'react-redux'

import { logoutaction } from './../store/slice/logout';
import { hasAnyPermission } from '../permissons';

const Footer = ({user}) => {
  const location = useLocation()
  console.log(location.pathname)
  const [toggle, settoggle] = useState(false);
  const [condition, setcondition] = useState(false);

  const [toggle2, settoggle2] = useState(false);
  const dispatch = useDispatch()

  const isActive = (path) => {
    console.log(location.pathname === path)
    return location.pathname === path;
  };
  return (
    <Box pl={"3%"}>
       <Box   className="${flex flex-col py-6 mx-auto w-full text-lg text-red-600 bg-white max-w-[480px]">
      <NavLink to={'/layout'}>
      <img
        loading="lazy"
        src={logo}
        className="ml-6 aspect-[0.56] w-[61px]"
      />
      </NavLink>
      <NavLink to={'/layout'}>
      <Box   fontSize={{base:"0.8rem",md:'1.2rem'}}  p={{base:"10px",md:"3%"}} className={`flex hover:bg-red-100 text-black flex-col justify-center items-start py-4 pr-10 pl-6 mt-7 w-full whitespace-wrap${isActive("/layout")&&' bg-red-800 text-red-600 border-solid text-white border-r-[5px] border-r-red-600'}`}>
        <Box className="flex gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1147c5ec7b11654711a51e832221a0131d0f9c29111c56be2c8165b07bf2d542?"
            className="w-4 md:w-6 aspect-square "
          />
          <Box >Dashboard</Box>
        </Box>
      </Box>
      </NavLink>
{hasAnyPermission(user,"Full-Access","View-Everything","View-Employee") && 
   (   <NavLink to={'/layout/customer'}>
      <Box  fontSize={{base:"0.8rem",md:'1.2rem'}} p={{base:"10px",md:"3%"}} className={`flex hover:bg-red-100 text-black flex-col justify-center items-start py-4 pr-16 pl-6 mt-7 w-full whitespace-wrap${isActive("/layout/customer")&&'  border-solid border-r-[5px] text-white bg-red-800 border-r-red-600'}`}>
        
        <Box className="flex gap-2">
          <img
            loading="lazy"
            src={userprofile}
            className="w-6 aspect-square"
          />
          <Box className="grow">Customers </Box>
        </Box>
      </Box>
      </NavLink>)}
      {/* <NavLink to={'/layout/mmf'}>
      <Box   fontSize={{base:"0.8rem",md:'1.2rem'}} p={{base:"10px",md:"3%"}} className={`flex hover:bg-red-100 text-black flex-col justify-center items-start py-4 pr-16 pl-6 mt-7 w-full whitespace-wrap${isActive("/layout/mmf")&&'bg-rose-900 text-red-600 border-solid border-r-[5px] border-r-red-600'}`}>
        <Box className="flex gap-2 w-[75px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/48d52ad0134bc23996ed1a5b24076528d68129a02c0cbd9b69128ac5bbe1adec?"
            className="flex-1 shrink-0 w-full aspect-square"
          />
          <Box>MMF</Box>
        </Box>
      </Box>
      </NavLink> */}
     {hasAnyPermission(user,"Full-Access","View-Everything","View-Admin","Create-Admin")&&( <NavLink to={'/layout/admins'}>
      <Box   fontSize={{base:"0.8rem",md:'1.2rem'}} p={{base:"10px",md:"3%"}} className={`flex hover:bg-red-100 text-black flex-col justify-center items-start py-4 pr-16 pl-6 mt-7 w-full whitespace-wrap${isActive("/layout/admins")&&' bg-red-800 text-red-600 text-white border-solid border-r-[5px] border-r-red-600'}`}>
        <Box className="flex gap-2">
          <img
            loading="lazy"
            src={admin}
            className="w-6 aspect-square"
          />
          <Box className="grow">Admins</Box>
        </Box>
      </Box>
      </NavLink>)}


      {hasAnyPermission(user,"Full-Access","View-Everything")&&(   <NavLink to={'/layout/branches'}>
      <Box   fontSize={{base:"0.8rem",md:'1.2rem'}} p={{base:"10px",md:"3%"}} className={`flex hover:bg-red-100 text-black flex-col justify-center items-start py-4 pr-16 pl-6 mt-7 w-full whitespace-wrap${isActive("/layout/branches")&&' bg-red-800 text-red-600 text-white border-solid border-r-[5px] border-r-red-600'}`}>
        <Box className="flex gap-2">
          <img
            loading="lazy"
            src={branches}
            className="w-6 aspect-square"
          />
          <Box className="grow">Branches</Box>
        </Box>
      </Box>
      </NavLink>)}
      {/* <NavLink to={'/layout/reports'}>
      {/* <Box   fontSize={{base:"0.8rem",md:'1.2rem'}} p={{base:"10px",md:"3%"}} className={`flex hover:bg-red-100 text-black flex-col justify-center items-start py-4 pr-16 pl-6 mt-7 w-full whitespace-wrap${isActive("/layout/reports")&&'bg-rose-900 text-red-600 border-solid border-r-[5px] border-r-red-600'}`}>
        <Box className="flex gap-2">
          <img
            loading="lazy"
            src={branches}
            className="w-6 aspect-square"
          />
          <Box className="grow">Reports</Box>
        </Box>
      </Box>
      </NavLink> */} 


{hasAnyPermission(user,"Full-Access","View-Everything")&&(  <NavLink to={'/layout/mmf'}>
      <Box   fontSize={{base:"0.8rem",md:'1.2rem'}} p={{base:"10px",md:"3%"}} className={`flex hover:bg-red-100 text-black flex-col justify-center items-start py-4 pr-16 pl-6 mt-7 w-full whitespace-wrap${isActive("/layout/mmf")&&' bg-red-800 text-white text-red-600 border-solid border-r-[5px] border-r-red-600'}`}>
        <Box className="flex gap-2">
          <img
            loading="lazy"
            src={branches}
            className="w-6 aspect-square"
          />
          <Box className="grow">MMF</Box>
        </Box>
      </Box>
      </NavLink>)}


      {hasAnyPermission(user,"Full-Access","View-Everything")&&(  <NavLink to={'/layout/transaction'}>
      <Box   fontSize={{base:"0.8rem",md:'1.2rem'}} p={{base:"10px",md:"3%"}} className={`flex hover:bg-red-100 text-black flex-col justify-center items-start py-4 pr-16 pl-6 mt-7 w-full whitespace-wrap${isActive("/layout/transaction")&&' bg-red-800 text-white text-red-600 border-solid border-r-[5px] border-r-red-600'}`}>
        <Box className="flex gap-2">
          <img
            loading="lazy"
            src={branches}
            className="w-6 aspect-square"
          />
          <Box className="grow">Transactons</Box>
        </Box>
      </Box>
      </NavLink>)}


      {hasAnyPermission(user,"Full-Access","View-Everything")&&(    <NavLink to={'/layout/roles'}>
      <Box   fontSize={{base:"0.8rem",md:'1.2rem'}} p={{base:"10px",md:"3%"}} className={`flex hover:bg-red-100 text-black hover:text-slate-950 flex-col justify-center items-start py-4 pr-16 pl-6 mt-7 w-full whitespace-wrap${isActive("/layout/roles")&&' bg-red-800 text-white border-solid border-r-[5px] border-r-red-600'}`}>
        <Box className="flex gap-2">
          <img
            loading="lazy"
            src={branches}
            className="w-6 aspect-square"
          />
          <Box className="grow">Roles</Box>
        </Box>
      </Box>
      </NavLink>)}
      {hasAnyPermission(user,"Full-Access","View-Everything")&&(    <NavLink to={'/layout/report'}>
      <Box   fontSize={{base:"0.8rem",md:'1.2rem'}} p={{base:"10px",md:"3%"}} className={`flex hover:bg-red-100 text-black flex-col justify-center items-start py-4 pr-16 pl-6 mt-7 w-full whitespace-wrap${isActive("/layout/report")&&' bg-red-800 text-white text-red-600 border-solid border-r-[5px] border-r-red-600'}`}>
        <Box className="flex gap-2">
          <img
            loading="lazy"
            src={branches}
            className="w-6 aspect-square"
          />
          <Box className="grow">Reports</Box>
        </Box>
      </Box>
      </NavLink>)}
      <NavLink>
      <Button  onClick={()=>dispatch(logoutaction())} _hover={{background:'red'}} backgroundColor={"transparent"} p={'30px'} className=" justify-center items-center self-center px-16 py-4 w-full text-right whitespace-nowrap rounded-2xl border border-red-600 border-solid max-w-[327px] mt-[200px]">
        Log out
      </Button>
      </NavLink>
    </Box>
    </Box>
  );
}

export default Footer;
