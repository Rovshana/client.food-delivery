import React from 'react'
import Navbar from '../Navbar/Navbar'

 function About(props) {
    

    return (
        <div className='container'>
            <Navbar/>
        <div className=' main'>
            
            <div className='left'>
                <h2 className='title'>About Us</h2>
                <p className='content'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div>
                <img src='/about/photo.svg' alt='..'/>
            </div>
            </div> 
        </ div>
    )
}
 export default About