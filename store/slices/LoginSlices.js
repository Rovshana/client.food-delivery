import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const LoginSlices = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers : (state,action)=>{
        state.users = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUsers } = LoginSlices.actions

export default LoginSlices.reducer