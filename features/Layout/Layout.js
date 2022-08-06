import Navbar from "../../shared/components/Navbar/Navbar"
import Footer from "../../shared/components/Footer/Footer"
import {useRouter} from 'next/router'
const Layout = ({children}) => {
    const route = useRouter()
    
    return ( 
        <div>
            {route.pathname === "/" ? null : <Navbar/> }
           
            {children}
            <Footer/>
        </div>

     )
}
 
export default Layout;