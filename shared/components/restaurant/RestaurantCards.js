import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
function RestaurantCards({ categoryRes }) {
  const route = useRouter();
  return (
    <div className="box row">
      {categoryRes.length > 0
        ? categoryRes?.map((item) => (
            <div
              onClick={() =>
                route.push(`restaurants/restaurant?name=${item.name}`)
              }
              className="card1 col-lg-3"
              key={item.id}
            >
              <div>
                <img src={`/restaurant/${item.image}`} alt="" />
              </div>
              <div>
                <h2>{item.name}</h2>
                <p className="contentcard">{item.cuisine.join(",")}</p>
              </div>
              <div className="lastBox">
                <p className="delivery">{item.delivery}$ Delivery</p>
                <div className="red">{item.time} min</div>
              </div>
            </div>
          ))
        : "...."}
    </div>
  );
}
export default RestaurantCards;
