import React from 'react'
import Styles from "../../Styles/Styles.module.css"
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Slider from './Slider'
const Home = () => {
    return (
        <div className={Styles.HomeContainer}>
            <div className={Styles.Navbar}>
                <Navbar></Navbar>
            </div>

            
            <Slider></Slider>

        
           
            <div className={Styles.Footers}>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default Home
