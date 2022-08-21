import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 
    personInfo:{},
    products:[]
  
}

export const CheckoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCheckout : (state,action)=>{
        state.products = action.payload[0]
        state.personInfo = action.payload[1]
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCheckout } = CheckoutSlice.actions

export default CheckoutSlice.reducer