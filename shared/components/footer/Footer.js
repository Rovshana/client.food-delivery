
import {BoxForUl, MainBox, ParentDiv } from './Footer.styled'
 function Footer(props) {
    

    return (
        <MainBox>
        <div className='container'>
            <ParentDiv>
               <ul>
                <li>Foody</li>
                <li>Lorem ipsum is placeholder text commonly used in the graphic, </li>
               </ul>
                <div className='icons'>
                </div>

               
                <BoxForUl>
                    <ul>
                        <li>Popular</li>
                        <li>Proggramming</li>
                        <li>Books for children</li>
                        <li>Pyschology</li>
                        <li>Bussinnes</li>
                    </ul>
                    
                    <ul>
                        <li>Cash</li>
                        <li>Dekivery</li>
                        <li>Payment</li>
                        <li>About the store</li>
                       
                    </ul>
                    <ul>
                        <li>Help</li>
                        <li>Contacts</li>
                        <li>Purchase returns</li>
                        <li>Buyer help</li>
                       
                    </ul>
                </BoxForUl>
            </ParentDiv>
            

        </div>
            
        </MainBox>
    )
}
export default Footer