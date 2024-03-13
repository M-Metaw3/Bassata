import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/branches'
import LogoutSlice from './slice/logout'
import adminSlice from './slice/admins'
import customerSlice  from './slice/customer';


export const store = configureStore({
  reducer: {
    branches:counterSlice,
    logout:LogoutSlice,
    admins:adminSlice,
    customer:customerSlice
  },
})

