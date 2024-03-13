import React,{useState} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,useDisclosure,Button,Input,useToast
  } from '@chakra-ui/react'
import { UpdateData,PostData,PostDataWithImg,GetDataProtected ,DeleteData} from '../../api/apiFactory';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { decrement, increment,openmodalbranches } from '../../store/slice/branches'
import { useSelector, useDispatch } from 'react-redux'
import Branches from './Branches';


const Editbranches = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['userAdmina'],
    queryFn: () =>
    GetDataProtected("user")
  })
    const {editbranch} = useSelector((state) => state.branches)
    const [editedBranch, setEditedBranch] = useState({ ...editbranch });
    console.log(editbranch)
    const dispatch = useDispatch()
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
      const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )
      const handleInputChange = (key, value) => {
        setEditedBranch((prevBranch) => ({
          ...prevBranch,
          [key]: value,
        }));
      };
  
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)




      const toast = useToast();


      const handelerupdatebranch=async()=>{

try {
  const response= await UpdateData(`branch/${editedBranch?.id}`,editedBranch)
  console.log(response)
  if(response.status==200){

    toast({
        title: 'Success',
        description: 'Success updated.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      dispatch(openmodalbranches(false))
      window.location.reload()
}
} catch (error) {
  console.log(error)
}

      }
    return (
        <div>
            
        <Modal isCentered isOpen onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Update Branches</ModalHeader>
            <ModalBody>
            <Text>Custom backdrop filters!</Text>
            {/* Input fields to edit branch properties */}
            <label>Name:</label>
            <Input
              type="text"
              value={editedBranch.name || ''}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
            <label>Location:</label>
            <Input
              type="text"
              value={editedBranch.location || ''}
              onChange={(e) => handleInputChange('location', e.target.value)}
            />


<label>User:</label>
            <select
              value={editedBranch.manager ? editedBranch.manager.id : ''}
              onChange={(e) =>
                handleInputChange('manager', {
                  id: e.target.value,
                })
              }
              className="flex flex-col justify-center p-6 mt-2 w-full rounded-2xl h-18 border border-solid border-[color:var(--Gray-Gray-4,#838383)] max-w-[720px] text-zinc-400 max-md:max-w-full"
            >
              {data?.data?.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.email}
                </option>
              ))}
            </select>

            </ModalBody>
            <ModalFooter>
              <Button variant={"filled"} _hover={{bg:"green.300"}} color={"black"} mr={"10px"} bg={"green"} onClick={() => handelerupdatebranch()} >Update</Button>
              <Button onClick={() => dispatch(openmodalbranches(false))} >Close</Button>

            </ModalFooter>
          </ModalContent>
        </Modal>
        </div>
    );
}

export default Editbranches;
