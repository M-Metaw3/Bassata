import { createSlice } from '@reduxjs/toolkit'


import Cookies from 'js-cookie';

const initialState = {
  value: 0,
  text : 'hi from redux',
  openmodal:false

}

export const LogoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {
  
    logoutaction:  () => {
        Cookies.remove('token')
        Cookies.remove('user')
        window.location.href = '/';
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { logoutaction} = LogoutSlice.actions

export default LogoutSlice.reducer