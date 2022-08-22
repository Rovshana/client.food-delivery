import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
function Restaurant() {
  const route = useRouter();

  const state = useSelector((state) => state.RestaurantSlice.categories);
  
  return (
    <div className="sidebar">
      <div className="parent2" onClick={() => route.push("/restaurants")}>
        <p className="type">All</p>
      </div>
      {state?.map((category,index) => (
        <>
          <div
            onClick={() => route.push(`?category=${category.name}`)}
            key={index}
            className="parent2"
          >
            <Image
              width="25"
              height="28"
              src={`/restaurant/category/${category.image}`}
            />

            <p className="type">{category.name}</p>
          </div>
        </>
      ))}

    </div>
  );
}
export default Restaurant;
