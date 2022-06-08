import React from 'react'
import Styles from "../../Styles/Styles.module.css"
const Footer = () => {
    return (
        <div className={Styles.FooterChildren}>
            <div className={Styles.FooterSection}>
                <div className={Styles.FooterHeader}>
                    <h4>NEED HELP?</h4>
                    <p className={Styles.aligns}>Contact Us</p>
                    <p className={Styles.aligns}>Returns Policy</p>
                    <p className={Styles.aligns}>Shipping Information</p>
                    <p className={Styles.aligns}> FAQs</p>
                    <p className={Styles.aligns}> Terms and Conditions</p>
                    <p className={Styles.aligns}>Privacy Policy</p>
                </div>
                <div className={Styles.FooterHeader}>
                    <h4>CONTACT US</h4>
                    <p className={Styles.aligns}><i class="fa-solid fa-envelope"></i> : Masai@school.com</p>
                    <p className={Styles.aligns}><i class="fa-brands fa-instagram"></i> : Masai@instagram.com</p>
                    <p className={Styles.aligns}><i class="fa-brands fa-twitter"></i> : Masai@twitter.com</p>
                    <p className={Styles.aligns}><i class="fa-brands fa-facebook"></i> : Masai@facebook.com</p>
                </div>
                <div className={Styles.FooterHeader}>
                    <h4>TOP CATEGORIES</h4>
                    <p className={Styles.aligns}>Tops for Girls</p>
                    <p className={Styles.aligns}>Women Jumpsuits</p>
                    <p className={Styles.aligns}>Dungarees Dress</p>
                    <p className={Styles.aligns}> Women Shoes</p>
                    <p className={Styles.aligns}> Women Shoes</p>
                    <p className={Styles.aligns}>Trousers & Chinos</p>
                </div>
                <div className={Styles.FooterHeader}>
                    <h4>BRANDS</h4>
                    <p className={Styles.aligns}>Adidas Neo</p>
                    <p className={Styles.aligns}>Jack & Jones</p>
                    <p className={Styles.aligns}>Flying Machine</p>
                    <p className={Styles.aligns}> Koovs</p>
                    <p className={Styles.aligns}> Adidas Shoes</p>
                    <p className={Styles.aligns}>Blue Saint</p>
                </div>
            </div>
        </div>
    )
}
export default Footer
