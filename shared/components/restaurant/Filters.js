import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
function Filters(props) {
  const route = useRouter();
  const state = useSelector((state) => state.RestaurantSlice.categories);
  return (
    <>
      <div className="filters-parent">
        <img
          src="/filterClose.svg"
          alt=""
          onClick={() => props.setFilterShow()}
        />
        <div className="parentFilter" onClick={() => route.push("/restaurants")}>
          <Image width="25" height="28" src="" />
          <p className="typeFilter">All</p>
        </div>
        {state?.map((category) => (
          <div
            onClick={() => route.push(`?category=${category.name}`)}
            className="parentFilter"
            key={category.id}
          >
          

            <p className="type">{category.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Filters;
