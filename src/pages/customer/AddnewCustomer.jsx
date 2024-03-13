import React,{useState} from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,Button,Box,Select,useToast
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux'
import {openmodalcustomer } from '../../store/slice/customer'
import { PostDataWithImg } from '../../api/apiFactory';
function AddnewCustomer() {
////   // useEffect(() => {
//   //   // Fetch nationalities data and set it to the state
//   //   // You can replace the API endpoint with your actual endpoint
//   //   axios.get('your-nationalities-api-endpoint').then((response) => {
//   //     setNationalities(response.data);
//   //   });
//   // }, []);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
    const {openmodal} = useSelector((state) => state.customer)
    const dispatch = useDispatch()
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [file1, setFile1] = useState(null);
    const [fileName1, setFileName1] = useState('');
  
    const [file2, setFile2] = useState(null);
    const [fileName2, setFileName2] = useState('');
  
    const [file3, setFile3] = useState(null);
    const [fileName3, setFileName3] = useState('');
  
    const handleFileChange = (event, setFile, setFileName) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
    };
  
    const handleDrop = (event, setFile, setFileName) => {
      event.preventDefault();
      const selectedFile = event.dataTransfer.files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
    };
  
    const handleInputChange = (event, setFile, setFileName) => {
      setFile(null);
      setFileName(event.target.value);
    };

    const [size, setSize] = React.useState('xl')
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
const [next, setnext] = useState(false);
  
  
const toast = useToast();
  const onSubmit =async (data) => {
    console.log(data)
    
    const dataa = new FormData();
    dataa.append('name', data.name);
    dataa.append('email', data.email);
    dataa.append('personal_id', data.personal_id);
    dataa.append('type', data.type);
    dataa.append('front_personal_id', file1);
    dataa.append('phone_number', data.phone_number);
    dataa.append('back_personal_id', file2);
    dataa.append('contract', file3);
    dataa.append('initial_balance', data?.initial_balance);
    dataa.append('nationality_id', data?.nationality_id);


    try {






      const response = await PostDataWithImg("customer",dataa)
      console.log(response)
      if(response.status==201){
        
        toast({
          title: 'success',
          description: 'success registeration please verify your account and then log in',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setnext(5)
        setTimeout(() => {
            dispatch(openmodalcustomer(false))
            window.location.reload()
        }, 1000);
             
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
      toast({
        title: 'Error',
        description:error?.response?.data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      
    }

  };

    return (
      <>
        
  
        <Drawer onClose={onClose}  isOpen size={size}>
          <DrawerOverlay />
          <form onSubmit={handleSubmit(onSubmit)}>
          <DrawerContent>
          <div className="flex gap-5 justify-between px-6 py-8 w-full text-2xl leading-9 capitalize border-b border-solid border-stone-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto my-auto">new customer </div>
        <img
        onClick={() => dispatch(openmodalcustomer(false))}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2859a57c7c710add2395a67e9cb69a51204cccce3cfe74f833c4a7c3d709b5a7?"
          className= "cursor-pointer shrink-0 w-6 aspect-square"
          />
      </div>
            <DrawerBody>
        
            {next==5&&<Box >

<div className="flex  flex-col justify-center items-center text-2xl bg-white max-w-[792px]">

<img
loading="lazy"
src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ce95cfff7d221f10f2760d0c84566350bb5e8eac3d9db40ca2a59d087185397?"
className="mt-10 max-w-full aspect-square w-[196px] max-md:mt-10"
/>
<div className="mt-7 text-green-600">Congratulations</div>
<div className="mt-1.5 text-lg text-green-600 whitespace-nowrap">
Customer added successfully{" "}
</div>
{/* <div className="flex gap-2.5 justify-end self-stretch px-4 py-3.5 mt-80 w-full text-lg text-right whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
<div className="flex-1 grow justify-center items-center px-16 py-6 rounded-2xl border border-red-600 border-solid text-neutral-600 max-md:px-5">
Close
</div>
<div className="flex-1 grow justify-center items-center px-16 py-6 bg-red-600 rounded-2xl text-neutral-200 max-md:px-5">
See all customers{" "}
</div>
</div> */}
</div>
</Box>}

            {next==4&&<Box >

                <div className="flex flex-col justify-center text-lg bg-white max-w-[792px] text-neutral-700">

      <div className="flex gap-0 justify-center self-center px-5 mt-11 text-sm leading-5 text-center max-md:flex-wrap max-md:mt-10">
        <div className="flex flex-col flex-1 items-center text-gray-600">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c1b025c8f8a7c11ead85357ecae7bb5f62baa3597f66d388efdb72ec27bc8ed?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Type </div>
        </div>
        <div className="flex flex-col flex-1 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/52d1562956a016edfecf9f596a7def05fcd2d18c2be345a3db572fe2ee9b567d?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Details </div>
        </div>
        <div className="flex flex-col flex-1 items-center whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/52d1562956a016edfecf9f596a7def05fcd2d18c2be345a3db572fe2ee9b567d?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">ID</div>
        </div>
        <div className="flex flex-col flex-1 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4edc2779aaaf165d7dfb126a96a4cee70229e440369b555810174fdcd79d18df?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Verified </div>
        </div>
      </div>
      <div className="mx-1 mb-2 mt-10 max-md:mr-2.5 max-md:max-w-full">
        Verification number
      </div>
      
      <input type="text" id="verification_number" class="w-full h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600" placeholder="Verification number" required=""/>
      <div class="inline-flex my-4 items-start self-stretch justify-start"><button id="submit" class="w-full p-4 rounded-2xl justify-center items-center gap-2.5 inline-flex hover:bg-red-500 bg-red-600"><div class="text-right text-neutral-200 text-lg font-normal font-['Roboto']">Verify</div></button></div>
   
    </div>


</Box>}










            {next==3&&<Box >
    

                <div className="flex flex-col justify-center items-center text-2xl bg-white max-w-[792px] text-gray-950">

      <div className="flex gap-0 justify-center px-5 mt-11 text-sm leading-5 text-center text-neutral-700 max-md:flex-wrap max-md:mt-10">
        <div className="flex flex-col flex-1 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d2c57da66fdbab63b8df4c63222c51824691e1ddc835dee54381b217ee6a631?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Type </div>
        </div>
        <div className="flex flex-col flex-1 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/050e54c04682f4b3b9ba34b388732a7dbf7086781a99cef7f9ebb6de15b9a6a7?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Details </div>
        </div>
        <div className="flex flex-col flex-1 items-center whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/15a5d79e002cc1affa2909c2e304a4328a8490093704f3d72ab289df1997acf6?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Data</div>
        </div>
        <div className="flex flex-col flex-1 items-center text-zinc-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/833b8c6ceaefe943dbb6d3d694cb1c71977b986b1421a982c2b8dbcf8c6d56d6?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Verified </div>
        </div>
      </div>
      <label
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) => handleDrop(e, setFile1, setFileName1)
                }
                  htmlFor="fileInput1"

                  className="flex justify-center items-center px-16 py-5 mt-6 w-full whitespace-nowrap rounded-xl border-2 border-dashed border-neutral-700 max-w-[720px] max-md:px-5 max-md:max-w-full"
                >
                  {/* Your content for the first file input */}
                  <div className="flex flex-col max-w-full w-[247px]">
                    {/* Display file preview or placeholder */}
                    {file1 ? (
                      <img
                        loading="lazy"
                        src={URL.createObjectURL(file1)}
                        alt="Uploaded File"
                        className="self-center aspect-square w-[80px] mb-2"
                      />
                    ) : (
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b4abbd4c80aca5decfc20cdc2b402c07a62f3c06e3aaeccbb3a908bd88fc730?"
                        className="self-center aspect-[1.2] w-[90px]"
                      />
                    )}
                    {/* File input */}
                    <input
                      type="file"
                      id="fileInput1"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) =>{
                        handleFileChange(e, setFile1, setFileName1);
                        // Trigger the React Hook Form onChange event for the file input
                    }}
                      className="hidden"
                    />
                    <div className="mt-7">Upload Customer docs </div>
                  </div>
                </label>

                {/* Second file input */}
                <label
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) => handleDrop(e, setFile2, setFileName2)}

                  htmlFor="fileInput2"
                  className="flex justify-center items-center px-16 py-5 mt-6 w-full whitespace-nowrap rounded-xl border-2 border-dashed border-neutral-700 max-w-[720px] max-md:px-5 max-md:max-w-full"
                >
                  {/* Your content for the second file input */}
                  <div className="flex flex-col max-w-full w-[247px]">
                    {/* Display file preview or placeholder */}
                    {file2 ? (
                      <img
                        loading="lazy"
                        src={URL.createObjectURL(file2)}
                        alt="Uploaded File"
                        className="self-center aspect-square w-[80px] mb-2"
                      />
                    ) : (
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b4abbd4c80aca5decfc20cdc2b402c07a62f3c06e3aaeccbb3a908bd88fc730?"
                        className="self-center aspect-[1.2] w-[90px]"
                      />
                    )}
                    {/* File input */}
                    <input
                      type="file"
                      id="fileInput2"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => handleFileChange(e, setFile2, setFileName2)
                
                    }
                      className="hidden"

                    />
                    <div className="mt-7">Upload Customer docs </div>
                  </div>
                </label>

                {/* Third file input */}
                <label
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) => handleDrop(e, setFile3, setFileName3)}
                  htmlFor="fileInput3"
                  className="flex justify-center items-center px-16 py-5 mt-6 w-full whitespace-nowrap rounded-xl border-2 border-dashed border-neutral-700 max-w-[720px] max-md:px-5 max-md:max-w-full"
                >
                  {/* Your content for the third file input */}
                  <div className="flex flex-col max-w-full w-[247px]">
                    {/* Display file preview or placeholder */}
                    {file3 ? (
                      <img
                        loading="lazy"
                        src={URL.createObjectURL(file3)}
                        alt="Uploaded File"
                        className="self-center aspect-square w-[80px] mb-2"
                      />
                    ) : (
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b4abbd4c80aca5decfc20cdc2b402c07a62f3c06e3aaeccbb3a908bd88fc730?"
                        className="self-center aspect-[1.2] w-[90px]"
                      />
                    )}
                    {/* File input */}
                    <input
                      type="file"
                      id="fileInput3"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => handleFileChange(e, setFile3, setFileName3)}
                      className="hidden"


                    />
                    <div className="mt-7">Upload Customer docs </div>
                  </div>
                </label>
 
    </div>


</Box>}








            {next==2&&<Box >
    
                <div className="flex flex-col justify-center text-lg bg-white max-w-[792px] text-neutral-700">

      <div className="flex gap-0 justify-center self-center px-5 mt-11 text-sm leading-5 text-center max-md:flex-wrap max-md:mt-10">
        <div className="flex flex-col flex-1 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d2c57da66fdbab63b8df4c63222c51824691e1ddc835dee54381b217ee6a631?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Type </div>
        </div>
        <div className="flex flex-col flex-1 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/050e54c04682f4b3b9ba34b388732a7dbf7086781a99cef7f9ebb6de15b9a6a7?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Details </div>
        </div>
        <div className="flex flex-col flex-1 items-center whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/15a5d79e002cc1affa2909c2e304a4328a8490093704f3d72ab289df1997acf6?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Data</div>
        </div>
        <div className="flex flex-col flex-1 items-center text-zinc-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/833b8c6ceaefe943dbb6d3d694cb1c71977b986b1421a982c2b8dbcf8c6d56d6?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Verified </div>
        </div>
      </div>
      <div class="self-stretch h-[6.688rem] flex-col justify-start items-start gap-[1.375rem] flex"><div class="text-neutral-700 text-lg font-normal font-['Inter']">Place set the customer id</div><div class="self-stretch justify-center items-start gap-2.5 inline-flex"><input type="text" id="amount" class="w-full h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600" placeholder="personal_id" required="" {...register('personal_id', { required: 'personal_id is required' })}/></div></div>

    </div>

        
        
        </Box>}





{next==1&&<Box >
    
<Box  className="flex flex-col justify-center text-lg bg-white max-w-[792px] text-neutral-700">
   
      <div className="flex gap-0 justify-center self-center px-5 mt-11 text-sm leading-5 text-center max-md:flex-wrap max-md:mt-10">
        <div className="flex flex-col flex-1 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d2c57da66fdbab63b8df4c63222c51824691e1ddc835dee54381b217ee6a631?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Type </div>
        </div>
        <div className="flex flex-col flex-1 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/63adfe5cacf25cd64c7940cb181fa6df47dcef65c7f0493057ef035a59fc15cf?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Details </div>
        </div>
        <div className="flex flex-col flex-1 items-center whitespace-nowrap text-zinc-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb269066567a475d338bb07efaddb350dfffff9630662ae3f1b67bde294afbb2?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Data</div>
        </div>
        <div className="flex flex-col flex-1 items-center text-zinc-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/833b8c6ceaefe943dbb6d3d694cb1c71977b986b1421a982c2b8dbcf8c6d56d6?"
            className="aspect-[4.55] w-[108px]"
          />
          <div className="mt-2.5">Verified </div>
        </div>
      </div>
      <div className="mx-9 mt-10 max-md:mr-2.5 max-md:max-w-full">
        Place enter the customer Details{" "}
      </div>
      <div className="flex gap-2.5 justify-center self-center mt-5 w-full whitespace-nowrap max-w-[720px] text-zinc-400 max-md:flex-wrap max-md:max-w-full">
      <input type="text" id="amount" class="w-full h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600" placeholder="Name" {...register('name', { required: 'First Name is required' })}/>


      <input type="text" id="amount" class="w-full h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600" placeholder="phone" {...register('phone_number', { required: ' phone is required' })} required=""/>

      </div>
      <input type="text" id="amount" class="w-[720px] mx-auto my-4 h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600" placeholder="E-mail" {...register('email', { required: ' email is required' })} required=""/>

      <div className="mx-9 mt-10 max-md:mr-2.5 max-md:max-w-full">
        Place add balance to the wallet
      </div>
      <input type="text" {...register('initial_balance', { required: 'First initial_balance is required' })} id="amount" class="w-[720px] mx-auto my-4 h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600" placeholder="Enter your blance" required=""/>

    </Box>
    
    
    
    </Box>}





        
 {next==0&&             <Box  width={"100%"} fontSize={{base:"0.7rem",lg:'1rem'}}  className="justify-center items-center lg:pr-16 py-5 pr-4 pl-4 max-md:pr-5">

   

              <div className="flex flex-col items-start pt-9 pr-20 pb-20 text-lg max-w-full text-neutral-700 max-md:pr-5">
      <div className="max-md:max-w-full">
        Place enter the customer nationality
      </div>
      <Select      {...register('nationality_id', { required: 'First Name is required' })} borderRadius={"20px"} outline={"none"}  width={"100%"} h={"70px"} placeholder='nationality'>
  <option value='1'>Egypt</option>
  <option value='2'>Emirate</option>
</Select>
      <div className="mt-40 max-md:mt-10 max-md:max-w-full">
        Place enter the customer type{" "}
      </div>
      <Select      {...register('type', { required: 'First Name is required' })} borderRadius={"20px"} outline={"none"}  width={"100%"} h={"70px"} placeholder='customer type'>
  <option value='individual'> individual</option>
  <option value='cooperate'>cooperate </option>
</Select>
    </div>










              </Box>}




{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}




















            </DrawerBody>
            <Box  p={"10px"}>
            <Box class="self-stretch px-[1.063rem] py-3.5 justify-end items-start gap-2.5 inline-flex">
  <Box border={'1px solid red'} class="w-full justify-end items-start gap-2.5 inline-flex" style={{ display: 'none' }}>
    <button class=" shrink basis-0 h-16 p-4 rounded-2xl border border-red-600 justify-center items-center gap-2.5 flex cursor-pointer">
      <div class="text-right text-neutral-600 text-lg font-normal font-['Roboto']">Close</div>
    </button>
   {next!=3&& <button class="grow shrink basis-0 h-16 p-4 bg-red-600 rounded-2xl justify-center items-center gap-2.5 flex cursor-pointer">
      <div class="text-right text-neutral-200 text-lg font-normal font-['Roboto']">Next</div>
    </button>}

  </Box>
  <div class="w-full justify-end items-start gap-2.5 inline-flex" style={{}}>
    <button 
    onClick={() => dispatch(openmodalcustomer(false))} 
    class="grow shrink basis-0 h-16 p-4 rounded-2xl border border-red-600 justify-center items-center gap-2.5 flex cursor-pointer">
      <div class="text-right text-neutral-600 text-lg font-normal font-['Roboto']">Close</div>
    </button>
{next!=0&&    <button onClick={()=>setnext((pre)=>pre-1)} class=" grow shrink basis-0 h-16 p-4 rounded-2xl border border-red-600 justify-center items-center gap-2.5 flex cursor-pointer">
      <div class="text-right text-neutral-600 text-lg font-normal font-['Roboto']">Back</div>
    </button>}
 {next!=4&&   <button onClick={()=>setnext((pre)=>pre+1)} class="grow shrink basis-0 h-16 p-4 bg-red-600 rounded-2xl justify-center items-center gap-2.5 flex cursor-pointer">
      <div class="text-right text-neutral-200 text-lg font-normal font-['Roboto']">next</div>
    </button>}
  {next==4&& <button type='submit' class="grow shrink basis-0 h-16 p-4 bg-red-600 rounded-2xl justify-center items-center gap-2.5 flex cursor-pointer">
      <div class="text-right text-neutral-200 text-lg font-normal font-['Roboto']">finished</div>
    </button>}
  {/* { next==0&& <button  type="submit"  class="grow shrink basis-0 h-16 p-4 bg-red-600 rounded-2xl justify-center items-center gap-2.5 flex cursor-pointer" style={{ display: 'none' }}>
      <div class="text-right text-neutral-200 text-lg font-normal font-['Roboto']">See all customers</div>
    </button>} */}
  </div>
</Box>

            </Box>
          </DrawerContent>
            </form>
        </Drawer>
      </>
    )
  }

export default AddnewCustomer;
