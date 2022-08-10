import Restaurant from "../../shared/components/restaurant/Restaurant";
import RestaurantCards from "../../shared/components/restaurant/RestaurantCards";

function RestaurantsContainer() {
  return (
    <div className="container d-flex">
      <div className="col-3">
        <Restaurant />
      </div>
      <div className="col-9">
        <RestaurantCards />
      </div>
    </div>
  );
}

export default RestaurantsContainer;
