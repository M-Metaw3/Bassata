

import React,{useRef} from 'react';
import { UpdateData,PostData,PostDataWithImg,GetDataProtected ,DeleteData} from '../../api/apiFactory';
import {
    Button ,AlertDialog,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader ,AlertDialogBody,AlertDialogFooter,useDisclosure,useToast

  } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import {deletecustomer } from '../../store/slice/customer'

const DeleteCustomer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const {user,openmodaldelete} = useSelector((state) => state.customer)
  console.log(user)
    const dispatch = useDispatch()
    const toast = useToast();

const deleteuser=async()=>{
try {

    const res= await DeleteData(`customer/${user?.id}`)
    console.log(res)
    if(res.status==200){

        toast({
            title: 'Success',
            description: 'Success deleted.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
          dispatch(deletecustomer({open:false,data:{}}))
          window.location.reload()
    }
    
} catch (error) {
    console.log(error)
}


}
 
    return (
        <>
  
  
        <AlertDialog
          isOpen
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete Customer
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? Yto delete this customer {user?.name}
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={()=>
    dispatch(deletecustomer({open:false,data:{}}))
}>
                  Cancel
                </Button>
                <Button  colorScheme='red' onClick={()=>deleteuser()} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
}

export default DeleteCustomer;
