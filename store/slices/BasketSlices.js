import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myBasket: [],
}

export const BasketSlices = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket : (state,action)=>{
    state.myBasket = action.payload;
       
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBasket } = BasketSlices.actions

export default BasketSlices.reducer