import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'






function AddTransaction() {
  return (
<Box alignContent={'center'} h={'100vh'}  >
<Box py={'10px'} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-between'}  mx={'auto'} w={'70%'} >
{/* <NavLink> */}
<Box w={'45%'} >
<Input placeholder='Enter Phone Number' h={'6vh'} w={'100%'} />
</Box>


{/* </NavLink> */}



{/* <NavLink> */}

  <Button py={8} w={'45%'} colorScheme='red' variant='solid'>
  Transaction payment
  </Button>
  {/* </NavLink> */}
  </Box>

</Box>
  )
}

export default AddTransaction
