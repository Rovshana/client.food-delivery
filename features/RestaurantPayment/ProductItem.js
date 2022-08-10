import { ProductItemStyle } from "./RestaurantPayment.styled";
import Image from "next/image"
import { useState } from "react";
function ProductItem() {
    const [click,setClick] = useState(false)
    const addbtn = (e)=>{
      
    }

    return ( 
        <>
        <ProductItemStyle>
            <Image src="/restaurant/pizza.svg" width={57} height={53}  alt="" />
            <div>
                <p>Papa John’s Pizza Restaurant</p>
                <p>Prepared with a patty, a slice of cheese and special sauce</p>
            </div>
            <span>From <b>7.90$</b></span>
            <button>
                <img src="/restaurant/add.svg" />
            </button>
        </ProductItemStyle>
        <ProductItemStyle>
            <Image src="/restaurant/pizza.svg" width={57} height={53}  alt="" />
            <div>
                <p>Papa John’s Pizza Restaurant</p>
                <p>Prepared with a patty, a slice of cheese and special sauce</p>
            </div>
            <span>From <b>7.90$</b></span>
            <button>
                <img src="/restaurant/add.svg" />
            </button>
        </ProductItemStyle>
        <ProductItemStyle>
            <Image src="/restaurant/pizza.svg" width={57} height={53}  alt="" />
            <div>
                <p>Papa John’s Pizza Restaurant</p>
                <p>Prepared with a patty, a slice of cheese and special sauce</p>
            </div>
            <span>From <b>7.90$</b></span>
            <button>
                <img src="/restaurant/add.svg" />
            </button>
        </ProductItemStyle>
        <ProductItemStyle>
            <Image src="/restaurant/pizza.svg" width={57} height={53}  alt="" />
            <div>
                <p>Papa John’s Pizza Restaurant</p>
                <p>Prepared with a patty, a slice of cheese and special sauce</p>
            </div>
            <span>From <b>7.90$</b></span>
            <button>
                <img src="/restaurant/add.svg" />
            </button>
        </ProductItemStyle>
        <ProductItemStyle>
            <Image src="/restaurant/pizza.svg" width={57} height={53}  alt="" />
            <div>
                <p>Papa John’s Pizza Restaurant</p>
                <p>Prepared with a patty, a slice of cheese and special sauce</p>
            </div>
            <span>From <b>7.90$</b></span>
            <button onClick={addbtn}>
                <img src="/restaurant/add.svg" alt="Add" />
            </button>
        </ProductItemStyle>
        </>
     );
}

export default ProductItem;