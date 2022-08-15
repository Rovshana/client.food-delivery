import Restaurant from "../../shared/components/restaurant/Restaurant";
import RestaurantCards from "../../shared/components/restaurant/RestaurantCards";
import CirclePagination from "../../shared/components/Pagination/CirclePagination";
import {  useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function RestaurantsContainer() {
  const [categoryRes, setCategoryRes] = useState([]);
  const route = useRouter();
 
  const state = useSelector((state) => state.RestaurantSlice.restaurants);
console.log(route,"container");
  useEffect(() => {
    if (route.query.category) {
      let arr = state.filter((item) => item.categories.includes(route.query.category));
      setCategoryRes(arr);
    } else {
      setCategoryRes(state);
    }
  }, [route.query.category]);

  console.log(categoryRes);

  return (
    <div className="container row mx-auto" style={{ padding: 0 }}>
      <div className="col-lg-2">
        <Restaurant />
      </div>
      <div className="col-lg-10">
        <RestaurantCards categoryRes={categoryRes} />
        <CirclePagination />
      </div>
    </div>
  );
}

export default RestaurantsContainer;
