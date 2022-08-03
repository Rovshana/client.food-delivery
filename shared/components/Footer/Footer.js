import React from 'react'
import { FooterBox, FooterContainer, FooterIcons, FooterP, List, ListFooter, PTag } from './footer.styled'
import FooterTop from './FooterTop'

 function Footer(props) {
    

    return (
       <>
        
        <FooterBox>
        <FooterTop/>
            <FooterContainer className='container'>
            <div>
                <img src="/footerIcons/foody.svg" alt='..'/>
                <FooterP>Lorem ipsum is placeholder text commonly used in the graphic, </FooterP>
                <FooterIcons>
                    <img src='/footerIcons/facebook.svg' alt='.'/>
                    <img src='/footerIcons/insta.svg' alt='.'/>
                    <img src='/footerIcons/twitter.svg' alt='.'/>
                </FooterIcons>
                

            </div>
    
        
          <ul>
            <List>Popular</List>
            <List>Fast food</List>
            <List>Sea foods</List>
            <List>Soup</List>
            <List>Cakes</List>
            </ul>
            <ul>
            <List>Cash</List>
            <List>Delivery </List>
            <List>Payments</List>
            <List>About the store</List>
        
            </ul>
            <ul>
            <List>Help</List>
            <List>Contacts </List>
            <List>Purchase returns</List>
            <List>Buyer Help</List>
        
            </ul>
        

         
            </FooterContainer>
            <PTag>All rights reserved © 2003-2022 Foody TERMS OF USE | Privacy Policy</PTag>
        </FooterBox>
       </>
    )
}

export default Footer