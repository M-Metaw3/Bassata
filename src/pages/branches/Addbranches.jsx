import React,{useEffect,useState} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PostData,PostDataWithImg,GetDataProtected ,DeleteData} from '../../api/apiFactory';

import {   useToast,Box
} from '@chakra-ui/react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const Addbranches = ({updates}) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['userAdmina'],
    queryFn: () =>
    GetDataProtected("user")
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const toast = useToast();
  // const dispatch = useDispatch()


  const onSubmit = async (data) => {
try {

  const branches =await PostData("branch",data)  


  if(branches.status==201){
    toast({
      title: 'Success',
      description: 'Success Added',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    // dispatch(openmodalbranches(false))
    window.location.reload()
  }
  
  
  
} catch (error) {
  

    toast({
      title: 'error occured',
      description: 'error occured.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
    // dispatch(openmodalbranches(false))
    window.location.reload()
  
}
  }







  return (
    <form

      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center text-lg bg-white max-w-[100%]"
    >
      <Box  className="flex gap-2.5 justify-center mt-11 w-full whitespace-nowrap max-w-[720px] text-zinc-400 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <input
          {...register('name', { required: 'Branches name is required' })}
          placeholder="Branches name"
          className="w-full h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600"
        />

        <input
          {...register('location', { required: 'Branches location is required' })}
          placeholder=" location"
          className="w-full text-black h-16 p-2.5 rounded-2xl border border-zinc-500 flex-col justify-start items-start gap-2.5 flex self-stretch text-lg font-normal font-['Inter'] focus:outline-none focus:border-red-600"
        />
      </Box>

      {errors.branchesName && (
        <div className="mt-2 text-red-500 max-md:max-w-full">{errors.branchesName.message}</div>
      )}

      {errors.branchesLocation && (
        <div className="mt-2 text-red-500 max-md:max-w-full">
          {errors.branchesLocation.message}
        </div>
      )}

      <div className="mt-6 text-neutral-700 max-md:max-w-full">Please enter the admin name</div>

      <select
        {...register('manager_id', { required: 'Admin name is required' })}
        onChange={(e) => {
 
        }}
        
        className="flex flex-col justify-center p-6 mt-2 w-full rounded-2xl h-18 border border-solid border-[color:var(--Gray-Gray-4,#838383)] max-w-[720px] text-zinc-400 max-md:max-w-full"
      >
 <option className='border-red-500' value=''>""</option>

      { data?.data?.map((el)=>(
 <option className='border-red-500' value={el?.id}>{el?.email}</option>
      ))}
    
      </select>

      {errors.adminName && (
        <div className="mt-2 text-red-500 max-md:max-w-full">{errors.adminName.message}</div>
      )}

      <div className="flex gap-2.5 justify-between self-stretch px-4 py-3.5 w-full text-right whitespace-nowrap mt-[200px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <button
          type="submit"
          className="grow hover:bg-red-500 justify-center items-center text-center px-16 py-6 bg-red-600 rounded-2xl text-neutral-200 max-md:px-5"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Addbranches;
