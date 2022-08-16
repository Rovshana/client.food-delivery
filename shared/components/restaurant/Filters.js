import Image from "next/image";
import { useSelector } from "react-redux";

function Filters() {
    const state = useSelector((state) => state.RestaurantSlice.categories);
    return ( 
        <>
        <div className="filters-parent">
            <img src="/filterClose.svg" alt="" />
        {state?.map((category) => (
            <div
              onClick={() => route.push(`?category=${category.name}`)}
              className="parent2"
              key={category.id}
            >
              <Image
                width="25"
                height="28"
                src={`/restaurant/category/${category.image}`}
                alt=""
                className="categoryImg"
              />

              <p className="type">{category.name}</p>
            </div>
          ))}
        </div>
        </>
     );
}

export default Filters;