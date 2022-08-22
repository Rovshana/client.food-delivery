import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { categoryApi } from "../../api/category";
import { restaurantsApi } from "../../api/restaurants";
import RestaurantsContainer from "../../features/Restaurants/RestaurantContainer";
import { setCategory, setRestaurant } from "../../store/slices/RestaurantSlice";

function Restaurants({restaurant,category}) {
    const dispath = useDispatch()
    useEffect(()=>{
        dispath(setRestaurant(restaurant))
        dispath(setCategory(category))
    } , [])
    return ( 
        <RestaurantsContainer/>
     );
}

export async function getServerSideProps() {
    const restaurant = await restaurantsApi.then(res=>res.data.Restaurants)
    const category = await categoryApi.then(res=>res.data.Category)
 
    return { props: { 
        restaurant, category
     } }
  }


export default Restaurants;