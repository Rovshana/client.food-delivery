import Restaurant from "../../shared/components/restaurant/Restaurant";
import RestaurantCards from "../../shared/components/restaurant/RestaurantCards";
import CirclePagination from "../../shared/components/Pagination/CirclePagination";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Filters from "../../shared/components/restaurant/Filters.js";
function RestaurantsContainer() {
  const [categoryRes, setCategoryRes] = useState([]);
  const route = useRouter();
  const [width, setWidth] = useState(0);
  const [filtershow, setFilterShow] = useState(false);
  const state = useSelector((state) => state.RestaurantSlice.restaurants);

  useEffect(() => {
    setWidth(window.innerWidth);
    if (route.query.category) {
      let arr = state.filter((item) =>
        item.categories.includes(route.query.category)
      );
      setCategoryRes(arr);
    } else  {
      setCategoryRes(state);
    }
  }, [state,route.query.category]);


  return (
    <div className="container row mx-auto" style={{ padding: 0 }}>
      <div className="col-lg-2">
        <>
          {width < 576 ? (
            <div className="sidebar-filters">
              <img src="/filter.svg" alt="" />
              <p onClick={()=>setFilterShow(!filtershow)}>Filters</p>
            </div>
          ) : (
            <Restaurant />
          )}
        </>
      </div>
      <div className="col-lg-10">
        <RestaurantCards categoryRes={categoryRes} />
        <CirclePagination />
      </div>
      {filtershow && <Filters setFilterShow={setFilterShow} />}
    </div>
  );
}

export default RestaurantsContainer;
