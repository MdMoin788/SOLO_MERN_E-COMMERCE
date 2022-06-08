import axios from 'axios'
import {
 ADD_TO_CARD, REMOVE_CART,DECREASE_CART, INCREASE_CART, CHECKOUT_ADDRESS,ADD_BUY, PAYMENT_DETAILS
} from '../ActionType/ActionType'



export const addDataToCard =(id) =>{
    console.log('id', id);
    return {
      type: ADD_TO_CARD, payload:id
    }
  }

  
export const addDataToCardW =(id) =>{
  console.log('id w', id);
  return {
    type: "ADD_TO_CARD_W", payload:id
  }
}
  export const RemoveDataFromCart =(id) =>{
    return {
      type: REMOVE_CART, payload:id
    }
  }
  export const decreaseQtyCart =(id) =>{
    return {
      type: DECREASE_CART, payload:id
    }
  }
  export const increaseQtyCart =(id) =>{
    console.log('id', id);
    return {
      type: INCREASE_CART, payload:id
    }
  }
export const CheckoutAddress = (data) =>  {
     return {
       type : CHECKOUT_ADDRESS, 
       payload:data
     }
    };
    export const Addpayment = (data) =>  {
     return {
       type : PAYMENT_DETAILS, 
       payload:data
     }
    };
    export const HandleBuyows = (data) =>  {
     return {
       type : ADD_BUY, 
       payload:data
     }
    };
