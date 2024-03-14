import React,{useState} from 'react';
import { PostDataWithImg,GetDataProtected ,DeleteData} from '../../api/apiFactory';
import { useToast, Input, Box } from '@chakra-ui/react';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'


  import { useSelector, useDispatch } from 'react-redux'
import {deletebranchaction,openmodalbranches,editbranc } from '../../store/slice/branches'

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
import Addbranches from './Addbranches';
import Editbranches from './Editbranches';
import DeleteBranch from './DeleteBranch';
import Skeletoncomp from './../../components/Skeletoncomp';
const Branches = ({user}) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['branches'],
    queryFn: () =>
    GetDataProtected("branch")
  })


  const { isOpen, onOpen, onClose } = useDisclosure()

  const [size, setSize] = React.useState('')
  const [edits, setEdits] = useState(false);
  const [updates, setupdates] = useState(false);
  const [editbranch, seteditbranch] = useState({});

  const [editingUserId, setEditingUserId] = useState(null);
  const [selectedid, setselectedid] = useState('');

  const [openfilteration,setopenfilteration] = useState(false)


  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }






  const {openmodal,openmodaldelete} = useSelector((state) => state.branches)
  const dispatch = useDispatch()










  const handeleredit =(brn)=>{
    dispatch(openmodalbranches(true))
    dispatch(editbranc(brn))

      }




  const deleteUser = async (branch) => {
    dispatch(deletebranchaction({open:true,data:branch}))

  };







const handeleropenedit =(id)=>{
  setEdits((pre)=>!pre)
  setselectedid(id)
}

if(isPending) return <Skeletoncomp/>
if(!user){
 
  return window.location.href = "/";
} 

    return (
   <>
   {openmodal&&<>
   <Editbranches/>
   </>}
   {openmodaldelete&&<><DeleteBranch/></>}
      <Drawer onClose={onClose} isOpen={isOpen} size={'xl'}>
        <DrawerOverlay />
        <DrawerContent>
   
          <DrawerHeader>    <div className="flex gap-5 justify-between self-stretch px-6 py-8 w-full text-2xl leading-9 capitalize border-b border-solid border-b-[color:var(--Gray-Gray-2,#C9C9C9)] text-neutral-700 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto self-start mt-1.5">new Branch</div>
        <DrawerCloseButton />
      </div></DrawerHeader>
          <DrawerBody>
<Addbranches/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>



      
      <div className="flex flex-col px-5">
      <div className="flex gap-5 justify-between px-5 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto text-2xl leading-5 text-black">
          Branches : <span style={{color:"red"}}>{data?.data?.length}</span>
        </div>
        <button
          onClick={() => handleClick(size)}
          className="flex hover:bg-red-500 gap-2.5 justify-between px-11 py-5 text-lg text-right whitespace-nowrap bg-red-700 rounded-2xl text-neutral-200 max-md:px-5"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/856b96043b48ca4113d18f6ee334cc89b206aea0f83c26f80fc6f2f5c7ea5142?"
            className="w-6 aspect-square"
          />
          <div className="grow self-start">Add new Branches </div>
        </button>
      </div>

      <Box  className="flex flex-col justify-center px-3.5 py-3.5 mt-11 w-full bg-white border-b border-solid border-b-[color:var(--Gray-Gray-2,#C9C9C9)] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <Box  width={'80%'} className="flex gap-0 text-lg font-bold leading-7 text-red-600 capitalize max-md:flex-wrap max-md:max-w-full">
            <Box  width={"33%"} className=" justify-center items-start py-5 pr-16 pl-4 whitespace-wrap max-md:pr-5">
              Branch 
            </Box>
            <Box width={"33%"}  className=" justify-center items-start py-5 pr-16 pl-4 whitespace-wrap max-md:pr-5">
              Admin
            </Box>
            <Box  width={"33%"}  className=" justify-center items-start py-5 pr-16 pl-4 max-md:pr-5">
              Location{" "}
            </Box>
          </Box>
          <Box onClick={()=>setopenfilteration((pre)=>!pre)} _hover={{background:"red"}}  cursor={"pointer"} className=" flex justify-center items-center px-2.5 my-auto rounded-lg border border-red-700 border-solid aspect-[0.95] h-[43px] w-[43px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80ae65666123e4844a256d53f38e711d283d92156ecaf4ba362ece4520db5435?"
              className="w-full  "
          
            />
          </Box>



























        </div>

          {openfilteration&&  
     
<Box display={'flex'}>
  
          <Input _focus={{outline:'none'}} class="w-full h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600"/>
            <Input class="w-[33%] h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600"/>

          <Input class="w-[33%] h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600"/>
     
          </Box>
    
  
      }

      </Box>






















      <Box  className="flex flex-col justify-center px-3.5 py-3.5 w-full text-lg leading-7 text-black capitalize bg-white max-md:max-w-full">
      {data?.data?.map((el)=>(

<>     <Box cursor={"pointer"}   _hover={{bg:"red.200",transition:'0.7s'}} className="flex gap-5 justify-between pr-2.5 w-full max-md:flex-wrap max-md:max-w-full">

<Box w={"80%"} className="flex gap-0 max-md:flex-wrap max-md:max-w-full">
            <Box  width={"33%"}   wordBreak={"break-all"} className="  py-5 pr-16 pl-4 whitespace-wrap max-md:pr-5">
              {el?.name}
            </Box>
            <Box width={"33%"}   wordBreak={"break-all"} className="  py-5 pr-16 pl-4 whitespace-wrap max-md:pr-5">
            {el?.manager?.email}
           
            </Box>
            <Box width={"33%"}  wordBreak={"break-all"} className="  py-5 pr-16 pl-4 whitespace-wrap max-md:pr-5">
            {el?.location}
          
            </Box>
          </Box>
          <div onClick={() => handeleropenedit(el?.id)}>          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c120e1906f9a454e1cc74e1f7195ff4e053d221729eeb761ebcfe242344ee874?"
            className="mt-4 w-6 aspect-square"
          />

            










          
          </div>



          

        </Box>
   
        { edits &&selectedid==el?.id  && <Box  position={"relative"}  top={["25%",'45%','25%',"35%"]} left={"82%"} w={"15%"} className="flex   flex-col text-lg rounded-2xl shadow-sm  text-neutral-700">
      <button  onClick={() => handeleredit(el)} className="flex flex-col justify-center hover:bg-red-600 items-start py-4 pr-16 pl-6 w-[full] bg-white">
        <div className="flex gap-2 w-[160px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/358746b37b4522e3a18dca93d87bba09783b2bff6bd1ded5a183020a3819a02c?"
            className="flex-1 shrink-0 w-6 h-[30px] aspect-square"
          />
          <div>Edit and details </div>
        </div>
      </button>

      <button onClick={() => deleteUser(el)} className="flex flex-col hover:bg-red-600 justify-center items-start py-4 pr-16 pl-6 w-full bg-white">
        <div className="flex gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93bf17e7a4aad8b7d2af0585c526785df69cd1e46361f0bff9d3c6e88d44507e?"
            className="w-6 aspect-square"
          />
          <button  
            
            >Delete </button>
        </div>
      </button>
    </Box>}     </>
        )) }
      </Box>

      <div className="flex justify-center items-center self-center px-5 pt-1.5 mt-6 w-full max-w-[995px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2 max-md:flex-wrap max-md:max-w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <div
              key={index}
              className={`w-9 h-2 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-600'
              } border border-solid border-[color:var(--Gray-04,#C2D1D9)]`}
            />
          ))}
          <div className="h-2 bg-white border border-solid border-[color:var(--Gray-04,#C2D1D9)] w-[154px]" />
        </div>
      </div>
    </div>
      </>
    );
}

export default Branches;
