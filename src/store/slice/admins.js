import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  value: 0,
  text : 'hi from redux',
  openmodal:false,
  user:{},
  openmodaldelete:false,

  user:{}


}

export const adminSlice = createSlice({
  name: 'admins',
  initialState,
  reducers: {
    increment: (state) => {

      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    editadmin:  (state, action) => {
      state.user= action.payload
    console.log("object")
    console.log(action.payload)

    },
    deleteadmin:  (state, action) => {
      state.openmodaldelete= action.payload.open
      state.user= action.payload.data

      console.log(action.payload)
    },
    openmodalbranches:  (state, action) => {


      state.openmodal= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { openmodalbranches,editadmin,deleteadmin } = adminSlice.actions

export default adminSlice.reducer