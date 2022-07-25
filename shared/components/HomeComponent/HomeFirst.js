import React from 'react'
import { Title, Content, Button1, Button2, ImageKeeper, Box } from './HomeFirst.styled'

 function HomeFirst(props) {
    

    return (
        <>
        <Box>
            <div>
                <Title>Our Food site makes it easy to find local food</Title>
                <Content>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Content>
            <div>
                <Button1>Register</Button1>
                <Button2>Order now</Button2>
            </div>
            </div>
            
            < ImageKeeper>
                {/* <img src="assets/burger.svg"alt=".."/>  */}
            
            </ ImageKeeper>
            
        </Box>
            
        </>
    )
}
export default HomeFirst