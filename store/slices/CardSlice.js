import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: []
}
export const CardSlice = createSlice({
    name: "dishes",
    initialState,
    reducers: {
        setData: (state, action)=>{
            state.data = action.payload

        }
    }
})


export const { setData } = CardSlice.actions

export default CardSlice.reducer