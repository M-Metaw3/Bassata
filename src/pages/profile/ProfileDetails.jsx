
import React, { useState } from 'react';
import { Button,Box, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const ProfileDetails = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <Box textAlign={'center'}m={'auto'} width={'60%'} border={"1px solid #819FBD"} borderRadius={'8px'}  mt={4}>
      
      <NavLink to={'/profile'}>
      <Button
      width={'33%'}
        colorScheme={activeButton === 1 ? 'white'  : 'gray'}
        variant="outline"
        onClick={() => handleButtonClick(1)}
        bg={activeButton === 1 ? '#4495D0' : 'transparent'}
        border={'none'}
      >
        
        My Requests
      </Button>
      </NavLink>

      <NavLink to={'myprofile'}>
      <Button
        width={'33%'}
        colorScheme={activeButton === 2 ? 'white'  : 'gray'}
        variant="outline"
        onClick={() => handleButtonClick(2)}
    
        bg={activeButton === 2 ? '#4495D0' : 'transparent'}
      >
        Personal Information
      </Button>
      </NavLink>
    
      <Button
        width={'33%'}
        colorScheme={activeButton === 3 ? 'white' : 'gray'}
        variant="solid"
        onClick={() => handleButtonClick(3)}
        bg={activeButton === 3 ? '#4495D0' : 'transparent'}
      >
        Saved Cards
      </Button>
    </Box>
  );
};

export default ProfileDetails;
