import React from 'react';
import { Box, Divider, Text   ,FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,Flex
    
  } from '@chakra-ui/react';
import myreq from '../../assets/Group.png'
import downloadicon from '../../assets/Group (1).png'

import './request.css'

const MyrequestsProfile = () => {
    return (
        <Box m={"30px"} bgColor={'#f9f9f9'} borderRadius={'8px'}>
              <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} textAlign={'center'}
               alignContent={'center'}  >
                <Flex ml={'10px'}mt={'10px'}  w={'50%'}>
                <img className="group-2" alt="Group" src={myreq} />
              <Text p={'5px'} fontSize='2xl'>My Requests</Text>
                </Flex>
        
              <Text className='text1'pt={'25px'} mr={'10px'} >2 requests</Text>
 
        </Box>
        <br/>
        <Divider />
        <Box p={"20px"}>
        {/* /////////////////////////////////// */}
        <Box mt={'15px'} bgColor={' #eeeff0'} borderRadius={'6px'} display={'flex'} flexWrap={'wrap'}  justifyContent={'space-between'} textAlign={'center'} alignContent={'center'}  >
          <Box  alignItems={'center'} textAlign={'center'}  ml={'-2px'} >

              <Text fontSize='14px' mt={'13px'} textAlign={'center'} ml={'13px'} fontWeight={600} color={'#3380a0'} >Request 1&nbsp;&nbsp; #000</Text>
          </Box>
              <Flex>
              <Text   p={'10px'} fontSize='16px ' color={'#00a9eb'}>Download file</Text>
              <Text  p={'10px'} fontSize='12px  ' mt={"5px"} textAlign={'center'} color={'#33547199'}>Download file</Text>

              </Flex>
        </Box>
        {/* /////////////////////////////////// */}
        <Box mt={'15px'} display={'flex'} flexWrap={'wrap'}  justifyContent={'space-between'} >
        <FormControl  w={'40%'}>
  <FormLabel color={'#6D758F'}>service title</FormLabel>
  <Text bgColor={'white' }  className='cont' p={'10px'} fontSize='xs'>Service title</Text>
 
</FormControl>

<FormControl  w={'25%'}>
  <FormLabel color={'#6D758F'}>service cost</FormLabel>
  <Text  className='cont' color={'#6D758F'} p={'10px'} fontSize='xs'>service cost</Text>

</FormControl>
<FormControl    w={'25%'}>
  <FormLabel color={'#6D758F'}>Request Status</FormLabel>
  <Text   className='m1' p={'10px'} fontSize='xs'>Request Status</Text>

</FormControl>
        </Box>
        {/* /////////////////////////////////// */}
        <Box mt={'15px'} display={'flex'} flexWrap={'wrap'}  justifyContent={'space-between'} >



        <FormControl  w={'48%'}>
  <FormLabel color={'#6D758F'}>Email address</FormLabel>
  <div className="input-text">
      <img className="group" alt="Group" src={downloadicon} />
    </div>


</FormControl>
<FormControl  w={'48%'}>
  <FormLabel color={'#6D758F'}>Email address</FormLabel>
  <Textarea bgColor={'white'} p={'10px'} fontSize='xl'>Lorem ipsum dolor sit amet consectetur. Id lobortis bibendum ut sed ut varius dictum. Dictum suspendisse arcu arcu interdum. Dolor nisi ligula elit eu pulvinar. Dolor feugiat a bibendum egestas porttitor amet amet viverra. Cursus tristique pulvinar volutpat quam a cras lacus.</Textarea>
 
</FormControl>
        </Box>
        {/* /////////////////////////////////// */}
        </Box>
        <br/>
        <Divider />
        <br/>

        </Box>
    );
}

export default MyrequestsProfile;
