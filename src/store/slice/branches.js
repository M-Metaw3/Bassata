import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  value: 0,
  text : 'hi from redux',
  openmodal:false,
  editbranch:{},
  openmodaldelete:false,

  deletebranch:{}


}

export const counterSlice = createSlice({
  name: 'branches',
  initialState,
  reducers: {
    increment: (state) => {

      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    editbranc:  (state, action) => {
      state.editbranch= action.payload
    },
    deletebranchaction:  (state, action) => {
      state.openmodaldelete= action.payload.open
      state.deletebranch= action.payload.data

      console.log(action.payload)
    },
    openmodalbranches:  (state, action) => {


      state.openmodal= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,openmodalbranches,editbranc,deletebranchaction } = counterSlice.actions

export default counterSlice.reducer