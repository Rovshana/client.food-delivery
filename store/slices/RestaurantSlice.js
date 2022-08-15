import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurants: [],
  categories: [],
}

export const RestaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setRestaurant : (state,action)=>{
        state.restaurants = action.payload
    },
    setCategory : (state,action)=>{
        state.categories = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setCategory,setRestaurant } = RestaurantSlice.actions

export default RestaurantSlice.reducer