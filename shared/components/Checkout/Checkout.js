import React from 'react'
import { useFormik } from 'formik';
import { Input, Label, Title, Button } from './checkout.styled';
 
 function Checkout(props) {
    const formik = useFormik({
        initialValues: {
          deliveryAddress: '',
          contactNumber: '',
        
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    
    
          
   return (
    <div className='checkoutcontainer'>
      <Title>Checkout</Title>
     <form onSubmit={formik.handleSubmit}>
      <div className='checkoutForm'>
       <Label htmlFor="deliveryAddress">Delivery Address</Label>
       <Input
         id="deliveryAddress"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.deliveryAddress}
       />
       </div>
       <div className='checkoutForm'>
       <Label htmlFor="ContactNumber">Contact  Number</Label>
       <Input
         id="contactNumber"
         name="ContactNumber"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.contactNumber}
       />
       </div>
       
     
       <div className='checkoutForm'>
       <Button type="submit">Checkout</Button>
       </div>
     </form> 
     </div>
    )
}
export default Checkout