import React,{useState} from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,Button,Box
} from '@chakra-ui/react'
import {GetDataProtected} from '../../api/apiFactory'
import AddnewCustomer from './AddnewCustomer';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { useSelector, useDispatch } from 'react-redux'
import {deletecustomer,openmodalcustomer } from '../../store/slice/customer'
import Skeletoncomp from './../../components/Skeletoncomp';
import { NavLink } from 'react-router-dom';
import DeleteCustomer from './DeleteCustomer';
import { hasAnyPermissionwithout } from '../../permissons';
const Customer = ({user}) => {
  console.log(user)
  const { isPending, error, data } = useQuery({
    queryKey: ['customer'],
    queryFn: () =>
    GetDataProtected("customer")
  })


 
    

  
  
  
  const {openmodal,openmodaldelete} = useSelector((state) => state.customer)
  const dispatch = useDispatch()


    // dispatch(editadmin(use))

    const deleteUser = async (branch) => {
      dispatch(deletecustomer({open:true,data:branch}))
    
    };
    // setupdates((pre)=>!pre)
      
const { isOpen, onOpen, onClose } = useDisclosure()

const [size, setSize] = React.useState('')

const [edits, setEdits] = useState(false);


const [updates, setupdates] = useState(false);

const [editingUserId, setEditingUserId] = useState(null);
console.log(data)
const handleEditClick = (userId) => {
  setEditingUserId(userId);
  setEdits((prev) => !prev);
};
const handleClick = (newSize) => {
  setSize(newSize)
  onOpen()
}



if(isPending) return <Skeletoncomp/>
if(!user){
   
  return window.location.href = "/";
} 

return (
  

  
  
  
  
  










<>
{openmodaldelete&&<DeleteCustomer/>}
{openmodal&&
<AddnewCustomer/>
}
<Box>
<Box className="flex gap-5 justify-between max-md:flex-wrap">
 {  hasAnyPermissionwithout("Full-Access","View-Everything","View-Employee")&&(   <Box  className="flex-auto my-auto text-2xl leading-5 text-black">
        Customers : <span style={{color:"red"}}>{data?.data?.length}</span>
      </Box>)}
    {/* { hasAnyPermissionwithout("Full-Access","Create-Everything","Create-Employee")&& <button onClick={()=>dispatch(openmodalcustomer(true))} className="flex hover:bg-red-500  hover:transition-2s gap-2.5 justify-center px-11 py-4 text-lg text-right whitespace-nowrap bg-red-600 rounded-2xl text-neutral-200 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8663721bc77ba949380b93cfece2400850f5c88d002b7edf43d1d6d344612a?"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="grow my-auto">Add new customer </div>
      </button>} */}

<NavLink to={'/layout/B'}>
{ hasAnyPermissionwithout("Full-Access","Create-Everything","Create-Employee")&& <button  className="flex hover:bg-red-500  hover:transition-2s gap-2.5 justify-center px-11 py-4 text-lg text-right whitespace-nowrap bg-red-600 rounded-2xl text-neutral-200 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8663721bc77ba949380b93cfece2400850f5c88d002b7edf43d1d6d344612a?"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="grow my-auto">Add new customer </div>
      </button>}
      </NavLink>
</Box>









 {hasAnyPermissionwithout("Full-Access","View-Everything","View-Employee")&&<Box>
<Box className="flex flex-col justify-center px-3.5 py-3.5 bg-white border-b border-solid border-stone-300">
      <Box className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <Box  width={'90%'} className="flex gap-0 text-lg font-bold leading-7 text-red-600 capitalize max-md:flex-wrap max-md:max-w-full">
          <Box width={"19%"} alignItems={"center"} fontSize={{base:"0.85rem",lg:'1rem'}}  className=" justify-center  items-center lg:pr-16  py-5 pr-4 pl-4 max-md:pr-5">
            Customer name{" "}
          </Box>
          <Box width={"19%"} fontSize={{base:"0.85rem",lg:'1rem'}} className=" justify-center items-center py-5 lg:pr-16 pr-4 pl-4  max-md:pr-6">
            Customer type
          </Box>
          <Box width={"19%"} fontSize={{base:"0.85rem",lg:'1rem'}}  className=" justify-center items-center lg:pr-16 py-5 pr-4 pl-4 max-md:pr-5">
            Phone
          </Box>
          <Box width={"19%"} fontSize={{base:"0.85rem",lg:'1rem'}}  className=" justify-center items-center py-5 lg:pr-16 pr-4 pl-4  max-md:pr-5">
            Wallet balance{" "}
          </Box>
          <Box  width={"19%"} fontSize={{base:"0.85rem",lg:'1rem'}}  className=" justify-center items-center lg:pr-16 py-5 pr-4 pl-4 max-md:pr-5">
            ID{" "}
          </Box>
        </Box>
        <button   className="flex justify-center items-center px-2.5 py-2.5 my-auto rounded-lg border border-red-700 border-solid">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9077e5312187a1d1dc748500d4ab5c3cf3ababd3f426666f8ebe33336720b2ca?"
            className="w-6 aspect-square"
          />
        </button>
      </Box>

    </Box>
</Box>}








{/* {hasAnyPermissionwithout("Full-Access","View-Everything","View-Employee")&&<Box >
{data?.data?.map((el)=>
  
  <Box cursor={"pointer"}   _hover={{bg:"red.200",transition:'0.7s'}} className="flex flex-col justify-center px-3.5 py-3.5 text-lg leading-7 text-black capitalize bg-white">

      <Box  className="flex gap-5 justify-between pr-2.5 w-full max-md:flex-wrap max-md:max-w-full">
        <Box width={"90%"} className="flex gap-0 max-md:flex-wrap max-md:max-w-full">
          <Box  width={"19%"} fontSize={{base:"0.8rem",lg:'1rem'}}  className=" justify-center items-center lg:pr-16 py-5 pr-4 pl-4 max-md:pr-5">
            {el?.name} {" "}
          </Box>
          <Box width={"19%"} fontSize={{base:"0.8rem",lg:'1rem'}}  className=" justify-center items-center lg:pr-16 py-5 pr-4 pl-4 max-md:pr-5">
            {el?.type}{" "}
          </Box>
          <Box width={"19%"} fontSize={{base:"0.8rem",lg:'1rem'}}  className=" justify-center items-center lg:pr-16 py-5 pr-4 pl-4 max-md:pr-5">
            {el?.phone_number}
          </Box>
          <Box width={"19%"}  style={{filter:' blur(5px)'}} fontSize={{base:"0.8rem",lg:'1rem'}}  className=" justify-center items-center lg:pr-16 py-5 pr-4 pl-4 max-md:pr-5">
            333333${" "}
          </Box>
          <Box width={"19%"} fontSize={{base:"0.8rem",lg:'1rem'}}  className="justify-center items-center lg:pr-16 py-5 pr-4 pl-4 max-md:pr-5">
            {el?.personal_id}
          </Box>
        </Box>
        <button >

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbb154ed7b6f9a540c841ab96df16db8d45d14d0d0f5e85aee515d4f634473fa?"
          className="shrink-0 my-auto w-6 aspect-square"
        />
            </button>

      </Box>
      {/* { edits && editingUserId === el.id && <div className="flex relative  left-[85%] flex-col text-lg rounded-2xl shadow-sm max-w-[230px] text-neutral-700">
            <NavLink to={`/layout/customer/${el?.id}`}>
      <button 
      // onClick={()=>handeleredit(el)} 
      className="flex flex-col justify-center hover:bg-red-600 items-start py-4 pr-16 pl-6 w-full bg-white">
        <div className="flex gap-2  w-[160px]">
        {hasAnyPermissionwithout("Full-Access","Update-Employee","Update-Everything")&&      <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/358746b37b4522e3a18dca93d87bba09783b2bff6bd1ded5a183020a3819a02c?"
            className="flex-1 shrink-0 w-6 aspect-square"
          />}
          <div>{hasAnyPermissionwithout("Full-Access","Update-Employee","Update-Everything")?"Edit and details":" details"} </div>
        </div>
      </button>
      </NavLink>
  
  {
  
  
  hasAnyPermissionwithout("Full-Access","Delelte-Employee","Delelte-Everything")    &&
  <button className="flex flex-col hover:bg-red-600 justify-center items-start py-4 pr-16 pl-6 w-full bg-white">
        <div className="flex gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93bf17e7a4aad8b7d2af0585c526785df69cd1e46361f0bff9d3c6e88d44507e?"
            className="w-6 aspect-square"
          />
          <button
            onClick={() => deleteUser(el)}
            
            >Delete </button>
        </div>
      </button>}
    </div>} */}

    {/* </Box> */}
{/* ))} */} 






{/* </Box> */}
          {/* } */}




          {hasAnyPermissionwithout("Full-Access","View-Everything","View-Employee") && (
  <Box>
    {data?.data?.map((el) => (
      <NavLink key={el?.id} to={`/layout/customer/${el?.id}`}>
        <Box cursor={"pointer"} _hover={{ bg: "red.200", transition: '0.7s' }} className="flex flex-col justify-center px-3.5 py-3.5 text-lg leading-7 text-black capitalize bg-white">
          <Box className="flex gap-5 justify-between pr-2.5 w-full max-md:flex-wrap max-md:max-w-full">
            <Box width={"90%"} className="flex gap-0 max-md:flex-wrap max-md:max-w-full">
              <Box width={"19%"} fontSize={{ base: "0.8rem", lg: '1rem' }} className="justify-center items-center lg:pr-16 py-5 pr-4 pl-4 max-md:pr-5">
                {el?.name} {" "}
              </Box>
              <Box width={"19%"} fontSize={{ base: "0.8rem", lg: '1rem' }} className="justify-center items-center lg:pr-16 py-5 pr-4 pl-4 max-md:pr-5">
                {el?.type}{" "}
              </Box>
              <Box width={"19%"} fontSize={{ base: "0.8rem", lg: '1rem' }} className="justify-center items-center lg:pr-16 py-5 pr-4 pl-4 max-md:pr-5">
                {el?.phone_number}
              </Box>
              <Box width={"19%"} style={{ filter: ' blur(5px)' }} fontSize={{ base: "0.8rem", lg: '1rem' }} className="justify-center items-center lg:pr-16 py-5 pr-4 pl-4 max-md:pr-5">
                333333$
              </Box>
              <Box width={"19%"} fontSize={{ base: "0.8rem", lg: '1rem' }} className="justify-center items-center lg:pr-16 py-5 pr-4 pl-4 max-md:pr-5">
                {el?.personal_id}
              </Box>
            </Box>
            <button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbb154ed7b6f9a540c841ab96df16db8d45d14d0d0f5e85aee515d4f634473fa?"
                className="shrink-0 my-auto w-6 aspect-square"
              />
            </button>
          </Box>
        </Box>
      </NavLink>
    ))}
  </Box>
)}







</Box>

















    </>
    );
}

export default Customer;
