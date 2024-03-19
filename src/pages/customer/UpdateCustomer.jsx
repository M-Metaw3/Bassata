import React, { useState ,useEffect} from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  HStack,
  Text,
  InputGroup,
  InputRightElement,useToast
} from '@chakra-ui/react';
import { format } from 'date-fns';

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
  import { useParams } from 'react-router-dom';
import { PostDataWithImg,GetDataProtected ,UpdateDataWithImg} from '../../api/apiFactory';
  
  import Skeletoncomp from '../../components/Skeletoncomp';
import { hasAnyPermissionwithout } from '../../permissons';
const UpdateCustomer = ({user}) => {
const {id} = useParams()

    const { isPending, error, data } = useQuery({
        queryKey: ['customerone'],
        queryFn: () =>
        GetDataProtected(`customer/${id}`)
        
      })
      
      const [daata, setData] = useState(data?.data || null);
      useEffect(() => {
        setData(data?.data || null); // Update state when data changes
      }, [data]);
    console.log(daata)
    const [file1, setFile1] = useState(null);
    const [loading, setloading] = useState(false);

    const [fileName1, setFileName1] = useState('');
  
    const [file2, setFile2] = useState(null);
    const [fileName2, setFileName2] = useState('');
  
    const [file3, setFile3] = useState(null);
    const [fileName3, setFileName3] = useState('');
  

      const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
      };
      const handleDragOver = (event) => {
        event.preventDefault();
      };
      const handleFileChange = (event, setFile, setFileName) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setFileName(selectedFile.name);
      };
      const handleDrop = (event, setFile, setFileName) => {
        event.preventDefault();
        const selectedFile = event.dataTransfer.files[0];
        setFile(selectedFile);
        setFileName(selectedFile.name);
      };













      const toast = useToast();

      const onSubmit =async (data) => {



        const updatedData = new FormData();
        
        // Check if each field has changed and append to updatedData accordingly
        updatedData.append('_method', "PATCH");

        if (daata.name !== data?.data?.name) {
          updatedData.append('name', daata?.name);
        }
        if (daata.email !== data?.data?.email) {
          updatedData.append('email', daata?.email);
        }
        if (daata.personal_id !== data?.data?.personal_id) {
          updatedData.append('personal_id', daata?.personal_id);
        }
        if (daata.type !== data?.data?.type) {
          updatedData.append('type', daata?.type);
        }
        if (file1) {
          updatedData.append('front_personal_id', file1);
        }
        if (daata.phone_number !== data?.data?.phone_number) {
          updatedData.append('phone_number', daata.phone_number);
        }
        if (file2) {
          updatedData.append('back_personal_id', file2);
        }
        if (file3) {
          updatedData.append('contract', file3);
        }
        if (daata.initial_balance !== data?.data?.initial_balance) {
          updatedData.append('initial_balance', daata.initial_balance);
        }
        if (daata.nationality_id !== data?.data?.nationality_id) {
          updatedData.append('nationality_id', daata?.nationality_id);
        }
      
        // Check if any data has changed
        if (updatedData.entries().next().done) {
          console.log('No changes to update.');
          return;
        }
      

   
    
        try {
    
    
    
    
    console.log(data)
    setloading(true)
          const response = await PostDataWithImg(`customer/${daata?.id}`,updatedData)
          console.log(response)
          console.log(response)
          if(response.status==200){
    setloading(false)
            
            toast({
              title: 'success',
              description: 'success updated  ',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
            setTimeout(() => {
                window.location.href="/layout/customer"
            }, 1000);
                 
                    return;
                  }
          if(response.response.status==500){
            setloading(false)
    
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
    setloading(false)

          toast({
            title: 'Error',
            description:error?.response?.data?.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          
        }
    
      };













      if(isPending) return <Skeletoncomp/>

      if(!user){
 
        return window.location.href = "/";
      } 
      
    return (
        <Box p={{base:"30px"}} textAlign={"center"}>
     <Text mb={"30px"} fontSize={"4rem"} >Update : {data?.data?.name}</Text>
      <Box 
      width={"100%"}
      justifyContent={"center"}
      display={"flex"} gap={"40"}
      >
        <Box spacing={4} align="stretch">
          <FormControl w={"100%"} >
            <FormLabel>Name</FormLabel>
            <Input
            readOnly
              type="text"
              value={daata?.name}
              onChange={(e) => setData({ ...daata, name: e.target.value })}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
            readOnly

              type="email"
              value={daata?.email}
              onChange={(e) => setData({ ...daata, email: e.target.value })}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Personal ID</FormLabel>
            <Input
            readOnly

              type="text"
              value={daata?.personal_id}
              onChange={(e) => setData({ ...daata, personal_id: e.target.value })}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Type</FormLabel>
            <Select
            readOnly
            _placeholder={daata?.type}
              value={daata?.type}
              onChange={(e) => setData({ ...daata, type: e.target.value })}
              required
            >
              <option value={daata?.type}>{daata?.type}</option>

              {/* <option value="cooperate">cooperate</option>
              <option value="individual">individual</option> */}
            </Select>
          </FormControl>





        </Box>
        <Box spacing={4} align="stretch">
          {/* <FormControl>
            <FormLabel>nationality</FormLabel>
            <Input
              type="text"
              value={daata?.name}
              onChange={(e) => setData({ ...daata, name: e.target.value })}
              required
            />
          </FormControl> */}

          <FormControl>
            <FormLabel>Phone number</FormLabel>
            <Input
            readOnly

              type="text"
              value={daata?.phone_number}
              onChange={(e) => setData({ ...daata, phone_number: e.target.value })}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Intial Balance</FormLabel>
            <Input
            readOnly

              type="text"
              value={daata?.initial_balance}
              onChange={(e) => setData({ ...daata, initial_balance: e.target.value })}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Created by</FormLabel>
      <Text>{data?.data?.created_by?.email}</Text>
          </FormControl>
{/* 
          <Box width={'16.5%'} fontSize={{base:"0.7rem",lg:"1rem"}} className=" justify-center items-start py-5 pr-10 pl-4 whitespace-wrap max-md:pr-5">
              {format(new Date(data?.data?.created_at), 'MMMM dd, yyyy HH:mm:ss')}
              </Box> */}


        </Box>
      </Box>












    <Box display={{base:"block",xl:"flex"}} width={"100%"}  justifyContent={"space-between"}>


<label
        //  onDragOver={(e) => handleDragOver(e)}
        //           onDrop={(e) => handleDrop(e, setFile1, setFileName1)
        //         }
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
                        src={daata?.front_personal_id}
       
                        className="self-center aspect-[1.2] w-[90px]"
                      />
                    )}
                    {/* File input */}
                    <input
            readOnly

                      type="file"
                      id="fileInput1"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) =>{
                        handleFileChange(e, setFile1, setFileName1);
                        // Trigger the React Hook Form onChange event for the file input
                    }}
                      className="hidden"
                    />
                    <div className="mt-7">front personal id </div>
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
                        src={daata?.back_personal_id}
                 
                        className="self-center aspect-[1.2] w-[90px]"
                      />
                    )}
                    {/* File input */}
                    <input
            readOnly

                      type="file"
                      id="fileInput2"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => handleFileChange(e, setFile2, setFileName2)
                
                    }
                      className="hidden"

                    />
                    <div className="mt-7">Back personal id </div>
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
                        src={daata?.contract}
                        className="self-center aspect-[1.2] w-[90px]"
                      />
                    )}
                    {/* File input */}
                    <input
            readOnly

                      type="file"
                      id="fileInput3"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => handleFileChange(e, setFile3, setFileName3)}
                      className="hidden"


                    />
                    <div className="mt-7">Contract </div>
                  </div>
                </label>
    </Box>
 {
 !hasAnyPermissionwithout("Full-Access","Update-Employee ","Update-Everything")&&
 <Box m={"20px"} alignContent={"center"} >
            <Button isLoading={loading}    onClick={()=>onSubmit()} width={"25%"}  type="submit" colorScheme="teal">
            update
            </Button>
    
          </Box>}
        </Box>
    );
}

export default UpdateCustomer;
