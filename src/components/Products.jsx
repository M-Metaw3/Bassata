import React from 'react';
import { Card, CardHeader, CardBody, CardFooter ,Button,ButtonGroup,Divider,Text,Heading,Stack,Image} from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const Products = (props) => {
console.log(props);
  // console.log(props.attributes.thumbnail.data.attributes.url);
    return (
        <Card key={props?.id}   maxW='sm' bg={"none"}>
        <CardBody textAlign={"center"} >
          <Image
          src={props?.thumbnail}
            alt='Green double couch with wooden legs'
            borderRadius='50%'
            mx={"auto"}
            width={"250px"}
            height={"250px"}
            objectFit={'cover'}
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{props.title}</Heading>
            <Text>
         {props?.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {props?.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter alignItems={"center"} >
          <ButtonGroup width='100%' textAlign={"center"} spacing='2 '>
          <NavLink  to={`/products/${props?.id}`}>
          <Button width='100%' size='lg' variant='solid' colorScheme='blue'>
            veiw details
            </Button>
          </NavLink>
       
       
          </ButtonGroup>

        </CardFooter>
      </Card>
    );
}

export default Products;
