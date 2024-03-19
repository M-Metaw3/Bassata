import React,{useState} from 'react';
import { PostDataWithImg,GetDataProtected ,DeleteData} from '../../api/apiFactory';
import { useToast, Input, Box } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux'
import {editadmin,deleteadmin } from '../../store/slice/admins'
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import { format } from 'date-fns';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,Button
  } from '@chakra-ui/react'
import Cardaddadmin from '../../components/Cardaddadmin';
import { NavLink } from 'react-router-dom';
import DeleteAdmin from './DeleteAdmin';
import Skeletoncomp from './../../components/Skeletoncomp';
import { hasAnyPermissionwithout } from '../../permissons';

const Admins = ({user}) => {


  const { isPending, error, data } = useQuery({
    queryKey: ['userAdmindata'],
    queryFn: () =>
    GetDataProtected("user")
  })
const OverlayOne = () => (
  <ModalOverlay
    bg='blackAlpha.300'
    backdropFilter='blur(10px) hue-rotate(90deg)'
  />
)

const OverlayTwo = () => (
  <ModalOverlay
    bg='none'
    backdropFilter='auto'
    backdropInvert='80%'
    backdropBlur='2px'
  />
)

const [overlay, setOverlay] = React.useState(<OverlayOne />)

const {openmodal,openmodaldelete} = useSelector((state) => state.admins)
const dispatch = useDispatch()


const deleteUser = async (branch) => {
  dispatch(deleteadmin({open:true,data:branch}))

};
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


    const [size, setSize] = React.useState('')
    const [edits, setEdits] = useState(false);
    const [updates, setupdates] = useState(false);

  const [openfilteration,setopenfilteration] = useState(false)
    
    const [editingUserId, setEditingUserId] = useState(null);
  
    const handleEditClick = (userId) => {
      setEditingUserId(userId);
      setEdits((prev) => !prev);
    };
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  const handeleredit =(use)=>{
dispatch(editadmin(use))

// setupdates((pre)=>!pre)
  }
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

   


    if(isPending) return <Skeletoncomp/>
    if(!user){
   
      return window.location.href = "/";
    } 
    
    return (
        <>


{openmodaldelete&& <DeleteAdmin/>}
  
   

      <Drawer onClose={onClose} isOpen={isOpen} size={'xl'}>
        <DrawerOverlay />
        <DrawerContent>
   
          <DrawerHeader>    <div className="flex gap-5 justify-between self-stretch px-6 py-8 w-full text-2xl leading-9 capitalize border-b border-solid border-b-[color:var(--Gray-Gray-2,#C9C9C9)] text-neutral-700 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto self-start mt-1.5">new admin</div>
        <DrawerCloseButton />
      </div></DrawerHeader>
          <DrawerBody >
  <Cardaddadmin/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>










  { updates&&   <Modal isCentered isOpen onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton onClick={()=>setupdates(false)} />
            <ModalBody>
              <Text>Custom backdrop filters!</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={()=>setupdates(false)}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>}













        <div className="flex flex-col">
      <div className="flex gap-5 justify-between px-5 w-full max-md:flex-wrap max-md:max-w-full">
   {
    hasAnyPermissionwithout("Full-Access","View-Admin","View-Everything")&&
    <div className="flex-auto my-auto text-2xl leading-5 text-black">
          Admins : <span style={{color:"red"}}>{data?.data?.length}</span>
          </div>}
         { 
         
         hasAnyPermissionwithout("Full-Access","Create-Everything","Create-Admin")&&<button  
             onClick={() => handleClick(size)}
             className="flex gap-2.5 justify-between px-11 py-4 text-lg text-right whitespace-nowrap hover:bg-red-500 bg-red-700 rounded-2xl text-neutral-200 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8663721bc77ba949380b93cfece2400850f5c88d002b7edf43d1d6d344612a?"
              className="w-6 aspect-square"
            />
        
            <div
       
            
            className="grow self-start">Add new admin </div>
          </button>}
        </div>
    {    hasAnyPermissionwithout("Full-Access","View-Admin","View-Everything")&&    <Box  className="flex flex-col justify-center px-3.5 py-3.5 mt-4 w-full bg-white border-b border-solid border-b-[color:var(--Gray-Gray-2,#C9C9C9)] max-md:max-w-full">
          <Box  className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <Box  width={"97%"} className="flex gap-0 text-lg font-bold leading-7 text-red-600 capitalize max-md:flex-wrap max-md:max-w-full">
              <Box width={'16.5%'} fontSize={{base:"0.8rem",lg:"1rem"}} className=" justify-center items-start py-5 pr-10 pl-4 whitespace-wrap max-md:pr-5">
              Name{" "}
              </Box>
              <Box width={'16.5%'}  fontSize={{base:"0.8rem",lg:"1rem"}}  className=" justify-center items-start py-5 pr-10 pl-4 whitespace-wrap max-md:pr-5">
              Admin Role

              </Box>
              <Box width={'16.5%'}  fontSize={{base:"0.8rem",lg:"1rem"}}  className=" justify-center items-start py-5 pr-10pl-4 whitespace-wrap max-md:pr-5">
              email
              </Box>
              <Box width={'16.5%'} fontSize={{base:"0.8rem",lg:"1rem"}}  className=" justify-center items-start py-5 pr-10 pl-4 whitespace-wrap max-md:pr-5">
                ID{" "}
              </Box>
              <Box width={'16.5%'} fontSize={{base:"0.8rem",lg:"1rem"}}   className=" justify-center items-start py-5 pr-10 pl-4 whitespace-wrap max-md:pr-5">
              Admin ID
{" "}
              </Box>
              <Box width={'16.5%'} fontSize={{base:"0.8rem",lg:"1rem"}}   className=" justify-center items-start py-5 pr-10 pl-4 whitespace-wrap max-md:pr-5">
              created at

{" "}
              </Box>
              
            </Box>
            <Box onClick={()=>setopenfilteration((pre)=>!pre)} _hover={{background:"red"}}  cursor={"pointer"}  className="flex justify-center items-center px-2.5 my-auto rounded-lg border border-red-700 border-solid aspect-[0.95] h-[43px] w-[43px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9077e5312187a1d1dc748500d4ab5c3cf3ababd3f426666f8ebe33336720b2ca?"
                className="w-full aspect-square"
                />
            </Box>
          </Box>
          {openfilteration&&  
     
     <Box display={'flex'}>
       
               <Input _focus={{outline:'none'}} class="w-full h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600"/>
                 <Input class="w-[33%] h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600"/>
     
               <Input class="w-[33%] h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600"/>
          
               </Box>
         
       
           }
     
        </Box>}







        {data&&data?.data?.map((user) => (      
        <>
   {    hasAnyPermissionwithout("Full-Access","View-Admin","View-Everything")&&      
        <Box cursor={"pointer"} zIndex={"0"} _hover={{bg:'red.200',transition:"0.5s"}} className="flex flex-col justify-center px-3.5 py-3.5 w-full text-lg leading-7 text-black capitalize bg-white max-md:max-w-full">
          <Box  className="flex  justify-between pr-2.5 w-full max-md:flex-wrap max-md:max-w-full">
            <Box  width={"97%"}  className="flex gap-0 max-md:flex-wrap max-md:max-w-full">
            <Box width={'16.5%'} fontSize={{base:"0.7rem",lg:"1rem"}} className=" justify-center items-start py-5 pr-10 pl-4 whitespace-wrap max-md:pr-5">
                {user?.name}
              </Box>
              <Box width={'16.5%'} fontSize={{base:"0.7rem",lg:"1rem"}} className=" justify-center items-start py-5 pr-10 pl-4 whitespace-wrap max-md:pr-5">
              {user?.role?.name}
              
              </Box>
    
              <Box width={'16.5%'} fontSize={{base:"0.7rem",lg:"1rem"}} className=" justify-center items-start py-5 pr-10 pl-4 whitespace-wrap max-md:pr-5">
              {user?.email}
              
              </Box>
              <Box width={'16.5%'} fontSize={{base:"0.7rem",lg:"1rem"}} className=" justify-center items-start py-5 pr-10 pl-4 whitespace-wrap max-md:pr-5">
              {user?.personal_id}
                
              </Box>
              <Box width={'16.5%'} fontSize={{base:"0.7rem",lg:"1rem"}} className=" justify-center items-start py-5 pr-10 pl-4 whitespace-wrap max-md:pr-5">
              {/* {format(new Date(user.updated_at), 'MMMM dd, yyyy HH:mm:ss')} */}
              {user?.id}

              </Box>
              <Box width={'16.5%'} fontSize={{base:"0.7rem",lg:"1rem"}} className=" justify-center items-start py-5 pr-10 pl-4 whitespace-wrap max-md:pr-5">
              {format(new Date(user.created_at), 'MMMM dd, yyyy HH:mm:ss')}
              </Box>
            </Box>
            <button onClick={() => handleEditClick(user?.id)}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbb154ed7b6f9a540c841ab96df16db8d45d14d0d0f5e85aee515d4f634473fa?"
              className="my-auto w-6 aspect-square"
            />
            </button>
          </Box>
          { edits && editingUserId === user.id && <Box zIndex={"3"} className="flex relative  left-[85%] flex-col text-lg rounded-2xl shadow-sm max-w-[230px] text-neutral-700">
            <NavLink to={`/layout/admins/${user?.id}`}>
    {    hasAnyPermissionwithout("Full-Access","Update-Admin","Update-Everything")&&   <button onClick={()=>handeleredit(user)} className="flex flex-col justify-center hover:bg-red-600 items-start py-4 pr-16 pl-6 w-full bg-white">
        <div className="flex gap-2  w-[160px]">
      { hasAnyPermissionwithout("Full-Access","Update-Admin","Update-Everything")&&   <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/358746b37b4522e3a18dca93d87bba09783b2bff6bd1ded5a183020a3819a02c?"
            className="flex-1 shrink-0 w-6 aspect-square"
          />}
          <div>{hasAnyPermissionwithout("Full-Access","Update-Admin","Update-Everything")?"Edit and details":"details"} </div>
        </div>
      </button>}
      </NavLink>
     
   {hasAnyPermissionwithout("Full-Access","Delelte-Everything","Delelte-Admin")&&   <button className="flex flex-col hover:bg-red-600 justify-center items-start py-4 pr-16 pl-6 w-full bg-white">
        <div className="flex gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93bf17e7a4aad8b7d2af0585c526785df69cd1e46361f0bff9d3c6e88d44507e?"
            className="w-6 aspect-square"
          />
          <button  onClick={() => deleteUser(user)}
            
            >Delete </button>
        </div>
      </button>}
    </Box>}
          
        </Box>
        }</>  ))}













 
        {/* <div className="flex justify-center items-center self-center px-16 pt-1.5 mt-6 w-full max-w-[995px] max-md:px-5 max-md:max-w-full">
          <div className="flex gap-2 max-md:flex-wrap max-md:max-w-full">
            <div className="flex justify-center items-center px-2.5 pt-2.5 bg-white border border-solid aspect-[2.4] border-[color:var(--Gray-04,#C2D1D9)]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c634c5426ab13a53831c4ef8d091a5ab03762c912812f654a3b99ae79f06cc?"
                className="w-4 aspect-[3.23]"
                />
            </div>
            <div className="justify-center px-3.5 pt-3.5 text-sm leading-5 text-center text-white whitespace-nowrap bg-gray-600 border border-solid aspect-[2.4] border-[color:var(--Gray-05,#F2F5F7)]">
              1
            </div>
            <div className="justify-center px-3.5 pt-3.5 text-sm leading-5 text-center text-gray-400 whitespace-nowrap bg-white border border-solid aspect-[2.4] border-[color:var(--Gray-05,#F2F5F7)]">
              2
            </div>
            <div className="justify-center px-3.5 pt-3.5 text-sm leading-5 text-center text-gray-400 whitespace-nowrap bg-white border border-solid aspect-[2.4] border-[color:var(--Gray-05,#F2F5F7)]">
              3
            </div>
            <div className="w-9 bg-white border border-solid border-[color:var(--Gray-05,#F2F5F7)] h-[15px]" />
            <div className="justify-center px-2.5 pt-3.5 text-sm leading-5 text-center text-gray-400 whitespace-nowrap bg-white border border-solid aspect-[2.4] border-[color:var(--Gray-05,#F2F5F7)]">
              60
            </div>
            <div className="flex justify-center items-center px-2.5 pt-2.5 bg-white border border-solid aspect-[2.4] border-[color:var(--Gray-04,#C2D1D9)]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/63cb92a1bf125f2c692ee5e38ceeef1a462906c1fd9250a446f2c3c798a94ff5?"
                className="w-4 aspect-[3.23]"
              />
            </div>
            <div className="flex gap-2 justify-between px-2.5 pt-2.5 text-sm leading-5 text-center text-gray-400 whitespace-nowrap bg-white border border-solid border-[color:var(--Gray-04,#C2D1D9)]">
              <div className="grow">Jump to page 10</div>
              <div className="w-4 h-[5px]" />
            </div>
          </div>
        </div> */}
      </div>
                </>
    );
}

export default Admins;
