import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SinglePoduct } from '../../Redux/Action/Men.Action'
import { addDataToCard, addDataToCardW, HandleBuyows } from '../../Redux/Action/Cart.Action'
import Styles from "../../Styles/StylesDetails.module.css"
import { Link, useParams } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import axios from 'axios'
const DetailsPage = () => {
  
    const single = useSelector((store)=>store.products.single_product)
    const tokens = JSON.parse(localStorage.getItem("token"))
    console.log('tokens', tokens);
    const types = useSelector((store)=>store.products.types)
    const { id } = useParams()
    console.log('id', id);
    useEffect(() => {
        console.log(id)
        axios.get(`http://localhost:5000/${types}/${id}`).then((data) => {
          dispatch(SinglePoduct(data.data));
        });
      }, [id]);  

    
    const dispatch = useDispatch()
    const handleAddCart = (id) => {
       if(types == "womens"){
        dispatch(addDataToCardW(id));
       }else{
        dispatch(addDataToCard(id));
       }
      };
   

 

    const handleBuyNow=()=>{
        dispatch(HandleBuyows(single)) 
    
      }
    return (
       <>
       <div className={Styles.Navbar}>
                <Navbar></Navbar>
            </div>
      <br />
      <br />
   
       <div className={Styles.details}>
            <div className={Styles.detailsSection}>
                <div className={Styles.detailsImage}>
                    <img className={Styles.img} src={single.image_url} alt="" />
                    <p>Description : {single.Description}</p>
                </div>
                <div className={Styles.detailsRightSection}>
                    <div className={Styles.detailsTitle}><h3>{single.brand}</h3></div>
                    <div className={Styles.detailsPrice}><p>{single.category}
                    </p></div>
                    <div className={Styles.detailsSize}><p>{single.price}</p></div>
                    <div className={Styles.detailsSize}>
                        <select >
                            <option >Size</option>
                            <option value="Small">Small</option>
                            <option value="Large">Large</option>
                            <option value="Medium">Medium</option>
                            <option value="Extra_Large">Extralarge</option>
                        </select>
                    </div>
                    <div className={Styles.detailsColor}>
                        <select >
                            <option >Color</option>
                            <option value="Red">Red</option>
                            <option value="Black">Black</option>
                            <option value="White">White</option>
                            <option value="Blue">Blue</option>
                        </select>
                    </div>
                    <div className={Styles.detailsButBtn}>
                        <div className={Styles.detailsButBtnBuy}>
                        <button  className={Styles.detailsBtnButon}  >{tokens != null ? <Link className={Styles.links}  onClick={handleBuyNow} to="/checkout">Buy Now</Link> :<Link onClick={handleBuyNow} className={Styles.links}  to="/register">Buy Now</Link> }</button>
                        </div>
                        
                        <div className={Styles.detailsAddCart}>
                            <button className={Styles.detailsBtnButon} onClick={() => handleAddCart(single._id)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}
export default DetailsPage
