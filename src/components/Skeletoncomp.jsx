import React from 'react';
import {Grid,Image} from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText,Box } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import logo from '../assets/Group 1000001038.png'
const Skeletoncomp = () => {
    return (
        <Box  textAlign={'center'} alignItems={'center'} display={'flex'} alignContent={'center'} justifyContent={'center'} height={'100vh'} bgColor={'black'}>
                
{/* <Image zIndex={'1'} src={logo}/> */}
<Spinner  color='red.200'  size='xl' />
        </Box>
    );
}

export default Skeletoncomp;
