import React from 'react'
import Styles from "../../Styles/Styles.module.css"
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()

    const tokens = JSON.parse(localStorage.getItem("token"))
    const hanldeLogout = ()=>{
        localStorage.removeItem('token')
        navigate("/")
    }
    return (
        <nav className={Styles.Nav}>
            <div className={Styles.LeftNavBar}>
                <div className={Styles.logo}><Link to={"/"} ><button className={Styles.men}>Home</button></Link></div>
                <div className={Styles.category}>
                    <div className={Styles}><Link to={"/men"} ><button className={Styles.men}>MEN</button></Link></div>
                    <div className={Styles}><Link to={"/women"} ><button className={Styles.men}>Women</button></Link></div>

                </div>
            </div>
            <div className={Styles.RightNavBar}>
                <div className={Styles.Inputs}><input placeholder='Search' className={Styles.Inputss} type="text" onChange={''} /> </div>
                <div>
                    <input type="Submit" className={Styles.InputsBtn} />
                </div>
                {
                    tokens == null ? <div className={Styles}><Link to={"/register"}> <button className={Styles.men}><i   class="fa-solid fa-user-plus"></i></button></Link></div> : <div className={Styles}><button className={Styles.men} onClick={hanldeLogout}>LOGOUT</button></div>
                }
                <div className={Styles}><Link to={"/cart"} ><button className={Styles.men}><i onClick={(e) => console.log(e.target)} class="fa-solid fa-cart-arrow-down"></i></button></Link></div>
            </div>
        </nav>
    )
}
export default Navbar
