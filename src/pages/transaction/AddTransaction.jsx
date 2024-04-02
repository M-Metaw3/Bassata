import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function AddTransaction() {
  return (
<Box alignContent={'center'} h={'100vh'}  >
<Box py={'10px'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}  mx={'auto'} w={'70%'} >
{/* <NavLink> */}
<Button py={8} w={'45%'} colorScheme='red' variant='solid'>
Transaction Inquiry  </Button>


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
