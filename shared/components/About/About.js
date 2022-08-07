import React from 'react'
import Navbar from '../Navbar/Navbar'
import Image from 'next/image'
import { motion } from "framer-motion"
 function About(props) {
    

    return (
        <div className='container'>
         
        <div className=' main'>
            
            <div className='left'>
                <h2 className='title'>About Us</h2>
                <p className='content'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div>
                <img src='/about/photo.svg' alt='..'/>
                <motion.div animate={{scale: 1.2}} 
          transition={{
            duration:2,
            repeat:Infinity,
          }} className="burger">
            <img src='/about/hamburger.svg' alt='..'  className='photo'/>
         
            <h3 className='title'>Hamburger</h3>
            <h4>$5.90</h4>
         

                </motion.div>
                <motion.div className='coffee'>
                    <img src="/about/coffee.svg" />
                    <p>Papa Coffee</p>
                    <p>$1.40</p>
                </motion.div>
                <motion.div className='pizza'>
                    <img src="/about/pizza.svg" />
                    <p>Sousage Pizza</p>
                    <p>$7.90</p>
                </motion.div>
            </div>
            </div> 
        </ div>
    )
}
 export default About