import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import {useRouter} from "next/router"
function Restaurant() {
  const route = useRouter();
  
  const state = useSelector((state) => state.RestaurantSlice.categories);
  return (
    <div className="sidebar">
       <div className="parent2"  onClick={()=>route.push("/restaurants")}>
          <Image width="25" height="28" src="" />
          <p className="type">All</p>
        </div>
      {state?.map((category) => (
        <div onClick={()=>route.push(`?category=${category.name}`)} className="parent2" key={category.id}>


          <Image width="25" height="28" src={`/restaurant/category${category.image}`} />

          
          <p className="type">{category.name}</p>
        </div>
      ))}
    </div>
  );
}
export default Restaurant;
