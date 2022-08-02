import React from 'react'
import { Title, Content, Button1, Button2, ImageKeeper, Box, Header, BoxImg, ButtonBox, Burger} from './HomeFirst.styled'

 function HomeFirst(props) {
    

    return (
        <Header>
            <h1>Navbar will come with Matin )</h1>
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
                
                <Burger src="/burger.svg"  alt="." className='photo'/>
            </ ImageKeeper>
            </BoxImg>
            
        </Box>
            
        </Header>
    )
}
export default HomeFirst