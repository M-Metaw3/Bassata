import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {GetDataProtected,PostDatalogin,DeleteData} from '../../api/apiFactory';
import Skeletoncomp from './../../components/Skeletoncomp';
import { Box, Button } from '@chakra-ui/react';
import {
  QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'

const CrudComponent = () => {
    const [dataa, setData] = useState([]);
    const [postrole, setpostrole] = useState('');
    const [postperm, setperm] = useState([]);

    const [selectedPermissions, setSelectedPermissions] = useState([]);

    const handleInputChange = (event) => {
      if (event.target.name === 'name') {
        setpostrole(event.target.value);
      } else if (event.target.name === 'permissions') {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) =>
          Number(option.value)
        );
        setSelectedPermissions(selectedOptions);
      }
    };

    const [loading, setLoading] = useState(false);
    const [permissions, setPermissions] = useState([]);
    const { isPending, error, data } = useQuery({
        queryKey: ['role'],
        queryFn: () =>
        GetDataProtected("/role")
      })
console.log(data);




// if(isPending){
//     return <Skeletoncomp/>
// }



    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await GetDataProtected("/permission")
console.log(response?.data)

        setData(response?.data);
        // setPermissions(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };







    const createData = async () => {
        try {
          setLoading(true);
          const response = await PostDatalogin('role', {
            name: postrole,
            permissions: selectedPermissions,
          });
          setLoading(false);
        console.log(response)
        if(response.status ==201){

            alert("success added")
            window.location.reload();
        }
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
    






      const deleteData = async (roleId) => {
        try {
          setLoading(true);
          const response = await DeleteData(`role/${roleId}`) 
          // Handle the response as needed
          if(response.status==200){
            alert("role deleted ")
            window.location.reload()
          }
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };










      if(isPending) return <Skeletoncomp/>


  return (
    <Box  className="flex p-10 flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Roles : <span style={{color:"red"}}>{data?.data?.length}</span></h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full">
        <h1 className="text-2xl font-bold mb-4">Name</h1>

<input
  type="text"
  name="name"
  onChange={handleInputChange}
  className="border p-2 mb-2 w-full"
  placeholder="Name"
/>

<select
  name="permissions"
  multiple
  onChange={handleInputChange}
  className="border h-[40vh] p-2 mb-4 w-full"
>
          {dataa?.map((permission) => (
            <option className='m-2' key={permission.id} value={permission.id}>
              {permission.name}
            </option>
          ))}
        </select>


        <button
  onClick={createData}
  className="bg-green-500 hover:bg-green-700 text-white font-bold m-8  w-[35%] py-2 px-4 rounded"
>
  Create
</button>









        <h1 className="text-2xl font-bold mb-4">Permissions View</h1>

        <Box  justifyContent={"space-between"} flexWrap={"wrap"}  display={"flex"} flexDir={{base:"column", md:'row',xl:"row"}}>
{data?.data?.map((role) => (
    <Box width={{base:"100%" ,md:'48%', xl:'30%'}} display={"flex" } m={"10px"} flexDirection={"column"} justifyContent={"space-between"}>  <div key={role.id} className="border rounded p-4 mb-4">
    <h2 className="text-lg font-bold">{role.name}</h2>
    <ul className="list-disc pl-6">
      {role.permissions.length > 0 ? (
        role.permissions.map((permission) => (
          <li key={permission.id}>{permission.name}</li>
        ))
      ) : (
        <li>No permissions</li>
      )}
    </ul>
  </div>



  <Box display={"flex"} justifyContent={"space-around"} alignItems={"end"} >
  <Button
    display="flex"
    justifyItems="flex-end"
    bg="red.500"
    onClick={() => deleteData(role.id)}
    className="bg-red-500 hover:bg-red-700 grow text-white font-bold py-2 px-4 rounded"
  >
    Delete
  </Button>
</Box>


</Box>





))}
</Box>
</div>
)
};














        </Box>
      )}

export default CrudComponent;

