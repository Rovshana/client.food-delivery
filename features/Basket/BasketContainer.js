import ProfileSidebar from '../../shared/components/Profile/ProfileSidebar'
import { RestaurantProductsCounter } from '../RestaurantPayment/RestaurantPayment.styled';
import RestaurantProductsBasket from '../RestaurantPayment/RestaurantProductsBasket';
import BasketProduct from './BasketProduct';
function BasketContainer() {
    
    return ( 
        < div className='container d-flex'>
        <div className='col-lg-3'>
            <ProfileSidebar/>

        </div>
        <div className='col-lg-9 col-sm-12'>
        <RestaurantProductsCounter myBasket>
          <RestaurantProductsBasket  />
        </RestaurantProductsCounter>
            {/* <BasketProduct/> */}
        </div>
            
        </ div>
     );
}

export default BasketContainer;