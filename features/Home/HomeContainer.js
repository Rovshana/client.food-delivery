import React from 'react'
import HomeFirst from '../../shared/components/HomeComponent/HomeFirst'
import Card from '../../shared/components/cards/Card'
import Menu from '../../shared/components/Menu/Menu'
import Footer from '../../shared/components/footer/Footer'
import CardsBottom from '../../shared/components/cardsBottom/CardsBottom'

 function HomeContainer(props) {
    

    return (
        <>
       <h3>Navbar will come there :)</h3>
        <HomeFirst/>
        <Card />
        <Menu />
        <CardsBottom />
        <Footer/>
            
        </>
    )
}
export default HomeContainer