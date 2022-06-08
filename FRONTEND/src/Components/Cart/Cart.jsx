import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RemoveDataFromCart, decreaseQtyCart, increaseQtyCart } from '../../Redux/Action/Cart.Action';
import Styles from "../../Styles/StylesCart.module.css"
import StylesS from "../../Styles/Styles.module.css"
import Navbar from '../Navbar/Navbar';
const Cart = () => {
    const cart = useSelector((store) => store.products.cart)
    const statusIncDecs = useSelector((store) => store.products.togleIncDec)
    console.log('statusIncDecs', statusIncDecs);
    const tokens = JSON.parse(localStorage.getItem("token"))
    const [idToggle, SetIdtoggle] = useState(0)
    const flag = false
    console.log('idToggle', idToggle);
    
    const navigate = useNavigate()
    let sum = 0
    cart.filter((ele) => {
        sum = sum + +ele.price
    })
    const dispatch = useDispatch()
    const RemoveCart = (id) => {
        dispatch(RemoveDataFromCart(id))
    }
    const decreaseQty = (id) => {
        dispatch(decreaseQtyCart(id))
    }
    const increaseQty = (id) => {
        dispatch(increaseQtyCart(id))
        SetIdtoggle(id)

    }
    return (
        <>
            <div className={StylesS.Navbar}>
                <Navbar></Navbar>
            </div>
            <br />
            <br />
            <div className={Styles.CartContainer}>
                <div className={Styles.CartContainerSection}>
                    <div className={Styles.CartContainerHeader}>
                        <div className={Styles.CartContainerHeaderCart}>Cart : {cart.length}</div>
                        <div className={Styles.CartContainerHeaderPrice}>Price ( {cart.length} ) : {Math.round(sum)} </div>
                    </div>
                    {/* == */}
                    {
                        cart.map((ele) => {
                            return (
                                <div className={Styles.CartContainerItem}>
                                    
                                    <Link  className={Styles.CartContainerHeaderImage} to={`/product/description/${ele._id}`}><div><img className={Styles.CartContainerHeaderImg} src={ele.image_url} alt="" /></div></Link>
                                    
                                    <div className={Styles.CartContainerHeaderContents}>
                                        <span>{ele.brand}</span>
                                        <span>{ele.price}</span>
                                        <span>{ele.category}</span>
                                    </div>
                                    <div className={Styles.CartContainerHeaderIncDec}><button className={Styles.CartContainerHeaderIncDecBtn}  onClick={ele.Item >= 1 ? () => decreaseQty(ele._id) : RemoveCart(ele._id)}>-</button><p>{ele.Item}</p>
                                        <button className={Styles.CartContainerHeaderIncDecBtnInc} disabled={idToggle == ele._id && ele.Item == 5  ? statusIncDecs : ele.Item == 5 && idToggle != ele._id ? true : null  }  onClick={() => increaseQty(ele._id)}  >+</button>
                                    </div>
                                    <div className={Styles.CartContainerHeaderIncDec} style={{color:"white", backgroundColor: "green" , height: "30px"}}>
                                        <p style={{color:"white", backgroundColor: "green", wordSpacing: "1px"}}>Total : </p>
                                        <p>{ele.Item*ele.price}</p>
                                       
                                    </div>
                                    <div className={Styles.CartContainerHeaderRemove}><button  style={{color:"white", backgroundColor: "green" , height: "30px", border: "green"}} onClick={() => RemoveCart(ele._id)}>Remove</button> </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={Styles.checkout_container}>
                {
                    tokens != null ? <button
                        className={Styles.checkout_btn}
                        onClick={() => navigate("/checkout")}
                    >
                        CHECKOUT
                    </button> : cart.length == 0 ? <></> : tokens == null ? <button
                        className={Styles.checkout_btn}
                        onClick={() => navigate("/register")}
                    >
                        CHECKOUT
                    </button> : <></>
                }
            </div>
        </>
    )
}
export default Cart
