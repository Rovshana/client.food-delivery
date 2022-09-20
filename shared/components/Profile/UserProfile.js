import React from 'react'
import { useFormik } from 'formik';
import { Input, Form, Label, Button, TitleProfile, LabelEmail} from '../Profile/Profile.styled'
 function UserProfile(props) {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      userName: '',
      contact: '',
      email: '',
      address: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values)=>{
      let errors = {}
      if (!values.fullName) {
        errors.fullName = "Required!";
      }
      if(!values.userName){
        errors.userName = "Required!"
      }
      if(!values.contact){
        errors.contact = "Required!"
      }
      if (!values.email) {
        errors.email = "Required!";
      } else if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
          values.email
        )
      ) {
        errors.email = "Please enter a valid email!";
      }
      if(!values.address){
        errors.address = 'Required!'
      }
      console.log(errors)
      return errors
    }
  });     
  
  return (
    < div className=' container Profilebox'>
  <Form onSubmit={formik.handleSubmit}>
  <div className='myProfileForm'>
      <TitleProfile>Profile</TitleProfile>
      
     <Label htmlFor="fullName">Full Name</Label>
      <Input
        id="fullName"
        name="fullName"
        type="text"
        placeholder='Rovshana Rzayeva'
        onChange={formik.handleChange}
        value={formik.values.fullName}
      
      />
     </div>
     <div className='myProfileForm'>
      <LabelEmail htmlFor="email">Email</LabelEmail>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder='rzayeva@gmail.com'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      </div>
      <div className='myProfileForm'>
      <Label htmlFor="userName">Username</Label>
      <Input
        id="userName"
        name="userName"
        type="text"
        placeholder=' rovshana'
        onChange={formik.handleChange}
        value={formik.values.userName}
      />
      </div>
      <div className='myProfileForm'>
      <Label htmlFor="text"> Address</Label>
      <Input
        id="address"
        name="address"
        type="text"
        placeholder='address'
        onChange={formik.handleChange}
        value={formik.values.address}
      />
      </div>
      <div className='myProfileForm'>
      <Label htmlFor="address">Contact</Label>
      <Input
        id="contact"
        name="contact"
        placeholder=' +994'
        type="text"
        onChange={formik.handleChange}
        value={formik.values.address}
      />
      </div>
      <Button type="submit">Save</Button>
    </Form>
  

        </div>
    )
}
export default UserProfile