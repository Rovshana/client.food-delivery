import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Title, Content, Button1, Button2, ImageKeeper, Box, Header, BoxImg, ButtonBox, Burger} from './HomeFirst.styled'

 function HomeFirst(props) {
    

    return (
        <Header>
            <Navbar/>
        <Box>
            <div>
                <Title>Our Food site makes it easy to find local food</Title>
                <Content>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Content>
            <ButtonBox>
                <Button1>Register</Button1>
                <Button2>Order now</Button2>
            </ButtonBox>
            </div>
            <BoxImg>
            < ImageKeeper>
                
                <Burger src="/burger.svg"  alt="."/>
            </ ImageKeeper>
            </BoxImg>
            
        </Box>
            
        </Header>
    )
}
export default HomeFirst