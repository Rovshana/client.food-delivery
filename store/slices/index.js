import  LoginSlices  from "./LoginSlices";
import  BasketSlices  from "./BasketSlices";
import RestaurantSlice from "./RestaurantSlice"
import CheckoutSlice from "./CheckoutSlice"
import CardSlice from "./CardSlice";

export const combineReducers = {
    LoginSlices,
    BasketSlices,
    RestaurantSlice,
    CheckoutSlice,
     CardSlice
}