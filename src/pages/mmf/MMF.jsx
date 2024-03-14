
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input, VStack, Box, Heading, Text } from '@chakra-ui/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateData,PostData,PostDataWithImg,GetDataProtected ,DeleteData} from '../../api/apiFactory';



const MMF = ({user}) => {
  const [nationalities, setNationalities] = useState([]);
  const [newNationality, setNewNationality] = useState('');

  const fetchNationalities = async () => {
    try {
      const response = await GetDataProtected('nationality');
      setNationalities(response.data);
    } catch (error) {
      console.error('Error fetching nationalities:', error);
    }
  };

  useEffect(() => {
    fetchNationalities();
  }, []);

  const handleAddNationality = async () => {
    try {
      await PostData('nationality', { name: newNationality });
      fetchNationalities();
      toast.success('Nationality added successfully!');
      setNewNationality('');
    } catch (error) {
      console.error('Error adding nationality:', error);
      toast.error('Failed to add nationality!');
    }
  };

  const handleDeleteNationality = async (id) => {
    try {
      await DeleteData(`nationality/${id}`);
      fetchNationalities();
      toast.success('Nationality deleted successfully!');
    } catch (error) {
      console.error('Error deleting nationality:', error);
      toast.error('Failed to delete nationality!');
    }
  };

  if(!user){
 
    return window.location.href = "/";
  }
  return (
    <Box p={4}>
      <ToastContainer />
      <Heading mb={4}>Nationalities</Heading>
      <VStack spacing={4} align="stretch">
        <Input
          placeholder="Enter new nationality"
          value={newNationality}
          onChange={(e) => setNewNationality(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleAddNationality}>
          Add Nationality
        </Button>
        {nationalities.map((nationality) => (
          <Box key={nationality.id} borderWidth="1px" borderRadius="lg" p={4}>
            <Text>{nationality.name}</Text>
            <Button colorScheme="red" onClick={() => handleDeleteNationality(nationality.id)}>
              Delete
            </Button>
  
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default MMF;
