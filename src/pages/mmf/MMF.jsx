
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input, VStack, Box, Heading, Text } from '@chakra-ui/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateData,PostData,PostDataWithImg,GetDataProtected ,DeleteData} from '../../api/apiFactory';



const MMF = ({user}) => {
//   const [nationalities, setNationalities] = useState([]);
//   const [newNationality, setNewNationality] = useState('');

//   const fetchNationalities = async () => {
//     try {
//       const response = await GetDataProtected('nationality');
//       setNationalities(response.data);
//     } catch (error) {
//       console.error('Error fetching nationalities:', error);
//     }
//   };

//   useEffect(() => {
//     fetchNationalities();
//   }, []);

//   const handleAddNationality = async () => {
//     try {
//       await PostData('nationality', { name: newNationality });
//       fetchNationalities();
//       toast.success('Nationality added successfully!');
//       setNewNationality('');
//     } catch (error) {
//       console.error('Error adding nationality:', error);
//       toast.error('Failed to add nationality!');
//     }
//   };

//   const handleDeleteNationality = async (id) => {
//     try {
//       await DeleteData(`nationality/${id}`);
//       fetchNationalities();
//       toast.success('Nationality deleted successfully!');
//     } catch (error) {
//       console.error('Error deleting nationality:', error);
//       toast.error('Failed to delete nationality!');
//     }
//   };

  if(!user){
 
    return window.location.href = "/";
  }
  return (
    // <Box p={4}>
    //   <ToastContainer />
    //   <Heading mb={4}>Nationalities</Heading>
    //   <VStack spacing={4} align="stretch">
    //     <Input
    //       placeholder="Enter new nationality"
    //       value={newNationality}
    //       onChange={(e) => setNewNationality(e.target.value)}
    //     />
    //     <Button colorScheme="blue" onClick={handleAddNationality}>
    //       Add Nationality
    //     </Button>
    //     {nationalities.map((nationality) => (
    //       <Box key={nationality.id} borderWidth="1px" borderRadius="lg" p={4}>
    //         <Text>{nationality.name}</Text>
    //         <Button colorScheme="red" onClick={() => handleDeleteNationality(nationality.id)}>
    //           Delete
    //         </Button>
  
    //       </Box>
    //     ))}
    //   </VStack>
    // </Box>

    
    
    <>
    
    <div class="flex flex-col items-center justify-center rounded-2xl w-[100%]">
    <div class="h-[5.188rem] px-[.563rem] bg-white border-b border-stone-300 flex-col justify-start items-start gap-2.5 flex w-[100%]">
        <div class="w-[97.788527989%] justify-between items-center inline-flex">
            <div class="flex items-start justify-start w-[100%]">
                <div class="w-[14.688rem] h-[5.188rem] pl-[1.063rem] pr-[4.688rem] justify-start items-center flex">
                    <div class="text-red-600 text-lg font-bold font-['Inter'] capitalize leading-[1.688rem]">Customer name </div>
                </div>
                <div class="w-[13.313rem] h-[5.188rem] pl-[1.063rem] pr-[3.75rem] justify-start items-center flex">
                    <div class="text-red-600 text-lg font-bold font-['Inter'] capitalize leading-[1.688rem]">Customer type</div>
                </div>
                <div class="w-[11.938rem] h-[5.188rem] pl-[1.063rem] pr-11 justify-start items-center flex">
                    <div class="text-red-600 text-lg font-bold font-['Inter'] capitalize leading-[1.688rem]">Wallet balance </div>
                </div>
            </div>
            <div class="justify-end items-center gap-[.813rem] flex">
                <div class="w-[2.625rem] self-stretch p-2.5 rounded-lg border border-red-700 justify-center items-center gap-2.5 flex">
                    <div class="relative w-6 h-6">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Interface / Filter">
                                <path id="Vector" d="M20.0001 5.98486C20.0001 5.42481 19.9997 5.14458 19.8907 4.93066C19.7949 4.7425 19.6425 4.58963 19.4543 4.49376C19.2404 4.38477 18.9598 4.38477 18.3997 4.38477H5.59973C5.03968 4.38477 4.75993 4.38477 4.54602 4.49376C4.35786 4.58963 4.20499 4.7425 4.10912 4.93066C4.00012 5.14458 4.00012 5.42481 4.00012 5.98486V6.72212C4.00012 6.96671 4.00012 7.0891 4.02775 7.20419C4.05225 7.30622 4.09275 7.40369 4.14758 7.49316C4.20941 7.59405 4.29603 7.68067 4.46887 7.85352L9.53161 12.9163C9.70455 13.0892 9.79056 13.1752 9.8524 13.2761C9.90723 13.3656 9.94828 13.4634 9.97278 13.5654C10.0001 13.6793 10.0001 13.8003 10.0001 14.0399V18.7958C10.0001 19.653 10.0001 20.0819 10.1807 20.34C10.3383 20.5654 10.5815 20.7157 10.8536 20.756C11.1653 20.802 11.5488 20.6105 12.3156 20.2271L13.1156 19.8271C13.4366 19.6666 13.5968 19.5861 13.714 19.4663C13.8178 19.3604 13.8971 19.2332 13.9454 19.0931C14.0001 18.9347 14.0001 18.7547 14.0001 18.3958V14.0474C14.0001 13.8028 14.0001 13.6805 14.0278 13.5654C14.0522 13.4634 14.0928 13.3656 14.1476 13.2761C14.209 13.1759 14.2948 13.0901 14.4654 12.9195L14.4689 12.9163L19.5316 7.85352C19.7046 7.68056 19.7906 7.59408 19.8524 7.49316C19.9072 7.40369 19.9483 7.30622 19.9728 7.20419C20.0001 7.09027 20.0001 6.9692 20.0001 6.72957V5.98486Z" stroke="#D20000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="h-[5.188rem] px-[.563rem] bg-white transition duration-900 ease-in-out hover:bg-rose-100 flex-col justify-start items-start gap-2.5 flex w-[100%] cursor-pointer">
        <div class="w-[97.788527989%] justify-between items-center inline-flex">
            <div class="flex items-start justify-start">
                <div class="w-[14.688rem] h-[5.188rem] pl-[1.063rem] justify-start items-center flex">
                    <div class="text-black text-lg font-normal font-['Inter'] capitalize leading-[1.688rem]">Linking</div>
                </div>
                <div class="w-[13.313rem] h-[5.188rem] pl-[1.063rem] justify-start items-center flex">
                    <div class="text-black text-lg font-normal font-['Inter'] capitalize leading-[1.688rem]">Cooperate</div>
                </div>
                <div class="w-[11.938rem] h-[5.188rem] pl-[1.063rem] justify-start items-center flex">
                    <Box  style={{ filter: ' blur(5px)' }} class="text-black text-lg font-normal font-['Inter'] capitalize leading-[1.688rem]">Subsidiary </Box>
                </div>
            </div>
            <div class="justify-end items-center gap-[.813rem] flex">
                <div class="w-[2.625rem] self-stretch p-2.5 rounded-lg border border-blue-500 justify-center items-center gap-2.5 flex">
                    <div class="relative w-6 h-6">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 2.5C5.5 2.22386 5.27614 2 5 2C4.72386 2 4.5 2.22386 4.5 2.5V22.5C4.5 22.7761 4.72386 23 5 23C5.27614 23 5.5 22.7761 5.5 22.5V2.5ZM6.75 2.5C6.75 1.67157 7.42157 1 8.25 1C9.07843 1 9.75 1.67157 9.75 2.5V22.5C9.75 23.3284 9.07843 24 8.25 24C7.42157 24 6.75 23.3284 6.75 22.5V2.5ZM15.25 8.5C15.25 8.22386 15.4739 8 15.75 8C16.0261 8 16.25 8.22386 16.25 8.5V22.5C16.25 22.7761 16.0261 23 15.75 23C15.4739 23 15.25 22.7761 15.25 22.5V8.5ZM16.5 8.5C16.5 7.67157 17.1716 7 18 7C18.8284 7 19.5 7.67157 19.5 8.5V22.5C19.5 23.3284 18.8284 24 18 24C17.1716 24 16.5 23.3284 16.5 22.5V8.5Z" fill="#1E3A8A"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    
    </>
    
  );
};

export default MMF;
