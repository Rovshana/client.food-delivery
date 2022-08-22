import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myBasket: [],
  result:0

};

export const BasketSlices = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.myBasket.push(action.payload);

    },
    setBasketDelete: (state, action) => {
      state.myBasket = action.payload;
    },
    setBasketUpdate: (state, action) => {
      console.log(action.payload);
      state.myBasket.map((item) => {
        if (action.payload.inc && item.id === action.payload.id) {
          item.count++;
        }
        else if(action.payload.desc && item.id === action.payload.id)
        {
          item.count--
        }
      });
    },

    setResult:(state, action)=>{
   
      state.result = action.payload
    }
  },
});



// Action creators are generated for each case reducer function
export const {setResult, setBasketUpdate, setBasket, setBasketDelete } = BasketSlices.actions;

export default BasketSlices.reducer;
