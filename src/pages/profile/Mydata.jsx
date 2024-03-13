import React from 'react';
import { Box, Divider, Text   ,FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,Input
  } from '@chakra-ui/react';
 import personalicon from '../../assets/Group (3).png'
const Mydata = () => {
    return (
        <Box bgColor={'rgba(240, 240, 240, 0.40)'}   m={"30px"}>
          <Box p={'30px'}>
              <Box  flexWrap={'wrap'}   >
              <Text display={'flex'} fontSize='30px'>
              <img  className='group' src={personalicon} alt="aaa" srcset="" />
                
              Personal information</Text>
          
        </Box>
        <br/>
        <Divider />
        <br/>
        

        <Box display={'flex'} flexWrap={'wrap'}  justifyContent={'space-around'} textAlign={'center'} alignContent={'center'} >
        <FormControl w={'48%'}>
  <FormLabel>Name</FormLabel>
  <Input placeholder='Ahmed' type='text' />
  <FormHelperText>Ahmed</FormHelperText>
</FormControl>
<FormControl w={'48%'}>
  <FormLabel>Phone Number</FormLabel>
  <Input placeholder='00000000000000' type='text' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
        </Box>
        {/* /////////////////////////////////// */}
           {/* /////////////////////////////////// */}
           <Box display={'flex'} flexWrap={'wrap'}  justifyContent={'space-around'} textAlign={'center'} alignContent={'center'} >
        <FormControl w={'48%'}>
  <FormLabel>Email</FormLabel>
  <Input placeholder=' userexample@gmail.com' type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
<FormControl w={'48%'}>
  <FormLabel>Password</FormLabel>
  <Input type='password' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
        </Box>
        {/* /////////////////////////////////// */}
        {/* /////////////////////////////////// */}
        </Box>
        </Box>
    );
}

export default Mydata;
