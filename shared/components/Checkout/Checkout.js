import React from 'react'
import { useFormik } from 'formik';
 
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
    <div>
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="deliveryAddress">Delivery Address</label>
       <input
         id="deliveryAddress"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.deliveryAddress}
       />
       <label htmlFor="ContactNumber">Contact  Number</label>
       <input
         id="contactNumber"
         name="ContactNumber"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.contactNumber}
       />
       
       <button type="submit">Submit</button>
     </form> 
     </div>
    )
}
export default Checkout