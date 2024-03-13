
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react'
import Login from './Login'
import loginimage from '../../assets/Frame 278.png'
import Nav from '../Navbar';

export default function Test() {
  return (
    <>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
loginimage          }
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
       <Login/>
      </Flex>
  
    </Stack>
    </>
  )
}