import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 

    checkoutAddress:[
      
    ],
    
  
}

export const CheckoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCheckout : (state,action)=>{
        state.checkoutAddress.push(action.payload)
        
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCheckout } = CheckoutSlice.actions

export default CheckoutSlice.reducer