import  LoginSlices  from "./LoginSlices";
import  BasketSlices  from "./BasketSlices";
import RestaurantSlice from "./RestaurantSlice"
import CheckoutSlice from "./CheckoutSlice"

export const combineReducers = {
    LoginSlices,
    BasketSlices,
    RestaurantSlice,
    CheckoutSlice
}