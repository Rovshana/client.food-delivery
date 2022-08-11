import { ProductItemStyle } from "./RestaurantPayment.styled";
import Image from "next/image";
import { useEffect, useState } from "react";
function ProductItem({ value }) {

    const [data, setData] = useState([]);
    useEffect(() => {
        value.products?.map(item=>{
            setData([item])
        })
    },[value])
  console.log(data);
  const addbtn = (e) => {};

  return (
    <>
      {data?.map((item) => {
        <ProductItemStyle key={item.id}>
          <Image
            src={`/restaurant/${item.image}.svg`}
            width={57}
            height={53}
            alt=""
          />
          <div>
            <p>{item.name}</p>
            <p>{item.desc}</p>
          </div>
          <span>
            From <b>{item.price}$</b>
          </span>
          <button>
            <img src="/restaurant/add.svg" />
          </button>
        </ProductItemStyle>;
      })}
    </>
  );
}

export default ProductItem;
