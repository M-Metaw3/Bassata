import  React, {useState} from 'react';
import { format } from 'date-fns';
import { PostDataWithImg,GetDataProtected ,DeleteData} from '../../api/apiFactory';
import { useToast, Input } from '@chakra-ui/react';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'


  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,Button,Text
  } from '@chakra-ui/react'





























const Viewadmin = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['useradmin'],
        queryFn: () =>
        GetDataProtected("user")
      })


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


    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)































    const [formData, setFormData] = useState({
        // Define your form fields here
        name: '',
        email: '',
        password: '',
        phone: '',
        password_confirmation:'',
        profile:'',
        personal_id:'',
        role_id:0
    
      })

      const deleteUser = async (userId) => {
        try {
        //   setLoading(true);
          const response= await  DeleteData(`user/${userId}`);
          if(response.success==true){
            alert("user deleted successfully")
          }
        //   setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        //   setLoading(false);
        } catch (error) {
          console.error(error);
        //   setLoading(false);
        }
      };
    
      
    return (
        <div>

        <Modal isCentered isOpen onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Custom backdrop filters!</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>





































            <table className="w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Personal ID</th>
              <th className="border px-4 py-2">Profile</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Updated At</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    value={user.name}
                    // onChange={(e) => updateUser(user.id, { name: e.target.value })}
                    className="border rounded py-1 px-2"
                  />
                </td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.personal_id}</td>
                <td className="border px-4 py-2">
                  {user.profile ? (
                    <img src={user.profile} alt="Profile" className="w-16 h-16 rounded-full" />
                  ) : (
                    <span>No profile image</span>
                  )}
                </td>
                <td className="border px-4 py-2">  {format(new Date(user.created_at), 'MMMM dd, yyyy HH:mm:ss')}</td>
                <td className="border px-4 py-2">  {format(new Date(user.updated_at), 'MMMM dd, yyyy HH:mm:ss')}</td>
                <button
                   onClick={() => {
                    setFormData({

                         

                        name: user?.name,
                        email: user?.email,
                        password: user?.password,
                        phone: user?.phone,
                        password_confirmation:user?.password_confirmation,
                        profile:user?.profile,
                        personal_id:user?.personal_id,
                        role_id:user?.role
                    

                    })
                    setOverlay(<OverlayOne />)
                    onOpen()
                  }}
                //   onClick={() => updateUser(user.id, { name: user.name })} // Use the user's current name for updating
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Update
                </button>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    








        </div>
    );
}

export default Viewadmin;
