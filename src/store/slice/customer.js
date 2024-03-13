import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  
  openmodal:false,
  user:{},openmodaldelete:false,



}

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {

    deletecustomer:  (state, action) => {
      state.openmodaldelete= action.payload.open
      state.user= action.payload.data

      console.log(action.payload)
    },
    openmodalcustomer:  (state, action) => {

console.log(action)
      state.openmodal= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { openmodalcustomer,deletecustomer  } = customerSlice.actions

export default customerSlice.reducer