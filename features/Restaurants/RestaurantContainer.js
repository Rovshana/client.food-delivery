import Restaurant from "../../shared/components/restaurant/Restaurant";
import RestaurantCards from "../../shared/components/restaurant/RestaurantCards";
import CirclePagination from "../../shared/components/Pagination/CirclePagination"
import { useSelector } from "react-redux";
import {useRouter} from "next/router"
import { useEffect, useState } from "react";

function RestaurantsContainer() {
  const [categoryRes,setCategoryRes] = useState([])
  const route = useRouter();
  // console.log(route);
  const state = useSelector((state) => state.RestaurantSlice.restaurants);
  useEffect(() => {
    if (route.query.category) {
        let arr = state.filter(item=>item.categories.includes(route.query.category))
        setCategoryRes(arr)
    }

  },[route.query.category])

 
    return ( 
        <div className = 'container d-flex' style={{padding:0}}>
        <div className="col-2">
        <Restaurant />
        </div >
        <div className="col-10">
        <RestaurantCards categoryRes = {categoryRes}/>
        <CirclePagination/>
        </div>
        
        </div>
     );

}

export default RestaurantsContainer;
