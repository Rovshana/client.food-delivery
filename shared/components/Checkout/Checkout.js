import React from 'react'
import { useFormik } from 'formik';
import { Input, Label, Title, Button, InputRadio, LabelRadio } from './checkout.styled';

 
 function Checkout(props) {
    const formik = useFormik({
        initialValues: {
          deliveryAddress: '',
          contactNumber: '',
          cash: 'a',
          cash: 'b'


       
        
        },
        onSubmit: values => {
          props.changeShow()
          // alert(JSON.stringify(values, null, 2));
        },
      });

    
      
   return (
    <div className='checkoutcontainer'>
      <Title>Checkout</Title>
     <form onSubmit={formik.handleSubmit}>
      <div  className='checkoutInfo'>
       <Label htmlFor="deliveryAddress">Delivery Address</Label>
       <Input
         id="deliveryAddress"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.deliveryAddress}
       />
       </div>
       <div className='checkoutInfo'>
       <Label htmlFor="ContactNumber">Contact  Number</Label>
       <Input
         id="contactNumber"
         name="ContactNumber"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.contactNumber}
       />
       </div>
       <div className='orderRadio'>
      
       <div className='checkoutForm'>
    
       <InputRadio
         id="cash"
         name="cash"
         type="radio"
         onChange={formik.handleChange}
         value={formik.values.cash}
       />
       <LabelRadio htmlFor="cash">pay at the door</LabelRadio>
       </div>
       <div className='checkoutForm'>
       <InputRadio
         id="cash"
         name="cash"
         type="radio"
         onChange={formik.handleChange}
         value={formik.values.cash}
         checked
       />
       
       <LabelRadio htmlFor="card">pay at the door by credit-cards</LabelRadio>
      
       </div>
     </div>
       <div className='checkoutInfo'>
       <Button type="submit">Checkout</Button>
       </div>
     </form> 
     </div>
    )
}
export default Checkout