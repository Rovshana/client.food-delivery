import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 
    personInfo:{}, 
    products:[] 
  // gorursenmi burda iki dene data var, burdaki birinci olan ordersda cixandi ikinci olan showda cixandi lakin 
  // time falan vermemisik bura onu elave edecem time hissesi bosh qala biler heleki amount ise count-la price vurassan
  // alina neticedi ,sen 
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