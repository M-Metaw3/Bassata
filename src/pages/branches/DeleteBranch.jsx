import React,{useRef} from 'react';
import { UpdateData,PostData,PostDataWithImg,GetDataProtected ,DeleteData} from '../../api/apiFactory';
import {
    Button ,AlertDialog,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader ,AlertDialogBody,AlertDialogFooter,useDisclosure,useToast

  } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import {deletebranchaction,openmodalbranches,editbranc } from '../../store/slice/branches'

const DeleteBranch = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const {openmodaldelete,deletebranch} = useSelector((state) => state.branches)
    console.log(deletebranch)
    const dispatch = useDispatch()
    const toast = useToast();

const deletebranches=async()=>{
try {

    const res= await DeleteData(`branch/${deletebranch?.id}`)
    console.log(res)
    if(res.status==200){

        toast({
            title: 'Success',
            description: 'Success deleted.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
          dispatch(deletebranchaction({open:false,data:{}}))
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
                Are you sure? Yto delete this branch {deletebranch?.name}
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={()=>
    dispatch(deletebranchaction({open:false,data:{}}))
}>
                  Cancel
                </Button>
                <Button  colorScheme='red' onClick={()=>deletebranches()} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
}

export default DeleteBranch;
