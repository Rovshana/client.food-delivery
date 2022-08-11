import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
function Restaurant(props) {
  const state = useSelector((state) => state.RestaurantSlice.categories);
 
  return (
    <div className="sidebar">
      {state?.map((category) => (
        <div className="parent2" key={category.id}>
          <Image width="25" height="28" src={`/restaurant/${category.image}.svg`} />
          <p className="type">{category.name}</p>
        </div>
      ))}
    </div>
  );
}
export default Restaurant;
