import React from 'react';
import { Box, Button,Avatar } from '@chakra-ui/react';
import profile from '../assets/Frame (1).png'  
import { useDispatch,useSelector } from 'react-redux';
import {openmodalcustomer } from '../store/slice/customer'
import AddnewCustomer from './customer/AddnewCustomer';
import { NavLink,useNavigate } from 'react-router-dom';
import { hasAnyPermission } from '../permissons'
const Navbar = ({user}) => {
const {openmodal} = useSelector((state) => state.customer)
const nav=useNavigate()
  const dispatch = useDispatch()
  console.log(user)
  if(!user) {

    return nav("/")  }
  return (
    <div>
      
    {openmodal&&  <AddnewCustomer/>}
       <Box display={{xl:"block",base:'none',lg:"block"}} className="flex flex-col justify-center whitespace-nowrap">
      <div className="flex gap-5 justify-between px-14 py-2.5 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <Box border={"1px solid red"} className="flex flex-col justify-center items-start  pl-5 my-auto text-lg rounded-2xl border border-solid border-[color:var(--Gray-Gray-4,#838383)] text-zinc-400 max-md:pr-5">
          <Box className="flex gap-2.5 justify-center">
            <button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/57698db732cfd279a549017f023afaa3234936e6a6a9b566ab674694db3650e8?"
              className="w-6 p-2 aspect-square"
            />
            </button>
            <input placeholder='Search' className='p-4 focus:broder-black-300  outline-none placeholder-slate-500: bg-transparent w-full h-full'/>
          </Box>
        </Box>
        <Box  className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
        {hasAnyPermission(user,"Full-Access","Create-Everything","Create-Employee") && (
  <Button onClick={() => dispatch(openmodalcustomer(true))} bg={"red"} p={"7%"} className="flex gap-2.5 justify-center  px-11 py-5 my-auto text-lg text-right bg-red-600 rounded-2xl text-neutral-200 max-md:px-5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8663721bc77ba949380b93cfece2400850f5c88d002b7edf43d1d6d344612a?"
      className="w-6 aspect-square"
    />
    <div className='p-2'>Add new customer</div>
  </Button>)}
  
          <div className="flex gap-1 justify-between self-stretch">
            
                <Avatar size='lg' name='Dan Abrahmov' 
              alt='profileImage'

              src={user?.profile}
              />
            <div className="flex flex-col flex-1 my-auto">
              <div className="text-2xl text-neutral-700">{user?.name}</div>
              <div className="mt-1 text-lg text-zinc-400">{user?.role?.name}</div>
            </div>
          </div>
        </Box>
      </div>
    </Box>
    <Box display={{base:"none" , xl:"none",lg:"none " ,sm:"block" }}>
      {/* <Box>
        add customer 
      </Box> */}
    </Box>
    </div>
    
  );
}

export default Navbar;
