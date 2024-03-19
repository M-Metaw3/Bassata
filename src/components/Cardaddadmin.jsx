
import React, { useState,useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {Box,useToast,Button} from'@chakra-ui/react'
import {PostDataWithImg,GetDataProtected} from'../api/apiFactory'
import Profile from './../pages/profile/Profile';

const Cardaddadmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedImage, setSelectedImage] = useState(null);
  const [branches, setbranches] = useState([]);
  const [roles, setroles] = useState([]);

  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchBranch = async () => {
      try {
        const response = await GetDataProtected('branch'); 
        setbranches(response?.data);
  console.log(response.data)
      } catch (err) {
        console.error('Error fetching branches:', err);
      }
    };

    fetchBranch();
  }, []);



  useEffect(() => {
    const fetchBranch = async () => {
      try {
        const response = await GetDataProtected('role'); 
        setroles(response?.data);
  console.log(response.data)
      } catch (err) {
        console.error('Error fetching branches:', err);
      }
    };

    fetchBranch();
  }, []);
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // You can perform additional checks/validation on the file if needed
      setSelectedImage(URL.createObjectURL(file));
    }
  };
const toast = useToast();
  const onSubmit =async (data) => {
    console.log(data)
console.log(data.profile[0])
    if(data.password!=data.password_confirmation){
      toast({
      title: 'warning',
      description: 'password not matching',
      status: 'warning',
      duration: 3000,
      isClosable: true,
    })

    return ;
    };
    const dataa = new FormData();
    dataa.append('name', data.name);
    dataa.append('email', data.email);
    dataa.append('password', data.password);
    dataa.append('password_confirmation', data.password_confirmation);
    dataa.append('personal_id', data.personal_id);
    dataa.append('phone', data.phone);
    dataa.append('profile', data.profile);
    dataa.append('role_id', data.role_id);
    dataa.append('branch_id', data?.branch_id);

    dataa.append('profile', data.profile[0]);
    try {

console.log(dataa)



      setloading(true)
      const response = await PostDataWithImg("user",dataa)
      console.log(response)
      if(response.status==201){
        setloading(false)
        toast({
          title: 'success',
          description: 'success registeration please verify your account and then log in',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        window.location.reload()
             
                return;
              }
      if(response.response.status==500){
        setloading(false)

        toast({
          title: 'Error',
          description: 'Failed to fetch users. Please try again.',
          status: response.response.data.messge,
          duration: 3000,
          isClosable: true,
        });
  
      }
    } catch (error) {
      console.log(error)
      setloading(false)

      toast({
        title: 'Error',
        description:error?.response?.data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      
    }

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center text-lg bg-white max-w-full"
    >
          <Box  className="flex flex-col justify-center p-2.5 mt-6 w-full rounded-2xl border border-solid border-[color:var(--Gray-Gray-4,#838383)] max-w-full text-zinc-400 max-md:max-w-full">
        <Box className="flex gap-5 justify-between p-2.5 max-md:flex-wrap max-md:max-w-full">
          <input
            {...register('name', {
              required: 'Admin Name is required',
              minLength: {
                value: 3,
                message: 'Admin Name must be at least 3 characters',
              },
            })}
            type="text"
            placeholder="Admin Name"
            className="w-full h-full text-stone-950 bg-transparent border-none focus:outline-none"
          />
        </Box>
        {errors.adminName && (
          <div className="mt-2 text-red-500 max-md:max-w-full">{errors.adminName.message}</div>
        )}
      </Box>
      {/* ... (previous input fields) */}




      <Box className="flex flex-col justify-center p-2.5 mt-6 w-full rounded-2xl border border-solid border-[color:var(--Gray-Gray-4,#838383)] max-w-full text-zinc-400 max-md:max-w-full">
        <Box className="flex gap-5 justify-between p-2.5 max-md:flex-wrap max-md:max-w-full">
          <input
            {...register('email', {
              required: 'Admin email is required',
              minLength: {
                value: 3,
                message: 'Admin email must be at least 3 characters',
              },
            })}
            type="text"
            placeholder="Admin Name"
            className="w-full h-full text-stone-950 bg-transparent border-none focus:outline-none"
          />
        </Box>
        {errors.adminName && (
          <div className="mt-2 text-red-500 max-md:max-w-full">{errors.adminName.message}</div>
        )}
      </Box>
   


      <Box className="flex flex-col justify-center p-2.5 mt-6 w-full rounded-2xl border border-solid border-[color:var(--Gray-Gray-4,#838383)] max-w-full text-zinc-400 max-md:max-w-full">
        <Box className="flex gap-5 justify-between p-2.5 max-md:flex-wrap max-md:max-w-full">
          <input
            {...register('password', {
              required: 'Admin password is required',
              minLength: {
                value: 3,
                message: 'Admin password must be at least 3 characters',
              },
            })}
            type="password"
            placeholder="password"
            className="w-full text-stone-950 h-full bg-transparent border-none focus:outline-none"
          />
        </Box>
        {errors.adminName && (
          <div className="mt-2 text-red-500 max-md:max-w-full">{errors.adminName.message}</div>
        )}
      </Box>
      <Box className="flex flex-col justify-center p-2.5 mt-6 w-full rounded-2xl border border-solid border-[color:var(--Gray-Gray-4,#838383)] max-w-full text-zinc-400 max-md:max-w-full">
        <Box className="flex gap-5 justify-between p-2.5 max-md:flex-wrap max-md:max-w-full">
          <input
            {...register('password_confirmation', {
              required: 'Admin Name is required',
              minLength: {
                value: 3,
                message: 'Admin password_confirmation must be at least 3 characters',
              },
            })}
            type="password"
            
            placeholder="password_confirmation"
            className="w-full text-stone-950 focus:outline-none focus:border-red-600 h-full bg-transparent focus:outline-none"
          />
        </Box>
        {errors.adminName && (
          <div className="mt-2 text-red-500 max-md:max-w-full">{errors.adminName.message}</div>
        )}
      </Box>
      {/* ... (previous input fields) */}

      <Box className="flex flex-col justify-center p-2.5 mt-6 w-full rounded-2xl border border-solid border-[color:var(--Gray-Gray-4,#838383)] max-w-full text-zinc-400 max-md:max-w-full">
        <Box className="flex gap-5 justify-between p-2.5 max-md:flex-wrap max-md:max-w-full">
          <input
            {...register('personal_id', {
              required: 'Admin Name is required',
              minLength: {
                value: 3,
                message: 'Admin personal_id must be at least 3 characters',
              },
            })}
            type="text"
            placeholder="personal_id"
            className="w-full h-full bg-transparent text-stone-950 border-none focus:outline-none"
          />
        </Box>
        {errors.adminName && (
          <div className="mt-2 text-red-500 max-md:max-w-full">{errors.adminName.message}</div>
        )}
      </Box>
      {/* ... (previous input fields) */}
      <Box className="flex flex-col justify-center p-2.5 mt-6 w-full rounded-2xl border border-solid border-[color:var(--Gray-Gray-4,#838383)] max-w-full text-zinc-400 max-md:max-w-full">
        <Box className="flex gap-5 justify-between p-2.5 max-md:flex-wrap max-md:max-w-full">
          <input
            {...register('phone', {
              required: 'Admin Name is required',
              minLength: {
                value: 3,
                message: 'Admin phone must be at least 3 characters',
              },
            })}
            type="text"
            placeholder="phone"
            className="w-full h-full text-stone-950 bg-transparent border-none focus:outline-none"
          />
        </Box>
        {errors.adminName && (
          <div className="mt-2 text-red-500 max-md:max-w-full">{errors.adminName.message}</div>
        )}
      </Box>
      {/* ... (previous input fields) */}

      {/* ... (previous input fields) */}

      <div className="flex flex-col justify-center p-2.5 mt-6 w-full rounded-2xl border border-solid border-[color:var(--Gray-Gray-4,#838383)] max-w-full text-zinc-400 max-md:max-w-full">
        <div className="flex gap-5 justify-between p-2.5 max-md:flex-wrap max-md:max-w-full">
          <label htmlFor="roleSelect" className="flex-auto">
            Profile
          </label>
              <input
          type="file"
          id="profile"
          {...register('profile', { required: 'Front Personal ID is required' })}
        />

</div>
</div>

     
      {/* ... (remaining input fields) */}
      <div className="flex flex-col justify-center p-2.5 mt-6 w-full rounded-2xl border border-solid border-[color:var(--Gray-Gray-4,#838383)] max-w-full text-zinc-400 max-md:max-w-full">
        <div className="flex gap-5 justify-between p-2.5 max-md:flex-wrap max-md:max-w-full">
          <label htmlFor="roleSelect" className="flex-auto">
            Role
          </label>
          <select
            {...register('role_id', {
              required: 'Role is required',
            })}
            id="roleSelect"
            className="w-1/2 p-2 border border-solid rounded"
          >
            <option value="" disabled selected>
              Select Role
            </option>
    
           {roles?.map((el)=>(

<option value={el?.id}>{el?.name}</option>

           )



           ) }
     
            {/* Add more options as needed */}
          </select>
        </div>
        {errors.role_id && (
          <div className="mt-2 text-red-500 max-md:max-w-full">{errors.role_id.message}</div>
        )}
      </div>



      <div className="flex flex-col justify-center p-2.5 mt-6 w-full rounded-2xl border border-solid border-[color:var(--Gray-Gray-4,#838383)] max-w-full text-zinc-400 max-md:max-w-full">
        <div className="flex gap-5 justify-between p-2.5 max-md:flex-wrap max-md:max-w-full">
          <label htmlFor="branch_id" className="flex-auto">
            Branches
          </label>
          <select
            {...register('branch_id', {
              required: 'branch_id is required',
            })}
            id="branch_id"
            className="w-1/2 p-2 border border-solid rounded"
          >
            <option value="" disabled selected>
              Select branches
            </option>
    
           {branches?.map((el)=>(

<option value={el?.id}>{el?.name}</option>

           )



           ) }
     
            {/* Add more options as needed */}
          </select>
        </div>
        {errors.role_id && (
          <div className="mt-2 text-red-500 max-md:max-w-full">{errors.role_id.message}</div>
        )}
      </div>
   
      <Button
      bg="red-600"
      p={'30px'}
      _hover={{ bg: 'red-700' }}
      isLoading={loading}
        type="submit"
        className="hover:bg-red-500 grow w-full justify-center my-[10px] items-center px-16 py-6 bg-red-600 rounded-2xl text-center text-neutral-200 max-md:px-5"
      >
        Save
      </Button>
    </form>
  );
};

export default Cardaddadmin;
