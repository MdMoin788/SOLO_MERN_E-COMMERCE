import {
  PRODUCT_DATA_FROM_JSON,
  SUCCESS,
  FALIURE,
  ADD_TO_CARD,
  LOADING,
  FILTER_DATA,
  FILTER_BRAND,
  SINGLE_PRODUCT,
  REMOVE_CART,
  DECREASE_CART,
  DATA_SORT,
  INCREASE_CART,
  CHECKOUT_ADDRESS,
  PAYMENT_DETAILS,
  ADD_BUY,
} from '../ActionType/ActionType'
const initState = {
  sucess: false,
  loading: true,
  failure: false,
  products: [],
  cart: [],
  single_product: {},
  checkout: '',
  payment: '',
  buyNow: {},
  togleIncDec: false,
  men_data: [],
  women_data: [],
  kid_data: [],
  types: '',
}
export const actionReducer = (store = initState, { type, payload }) => {
  console.log('payload', payload)
  switch (type) {
    case PRODUCT_DATA_FROM_JSON:
      return { ...store, products: payload }
    case SUCCESS:
      return { ...store, sucess: true }
    case FALIURE:
      return { ...store, failure: true }
    case LOADING:
      return { ...store, loading: false }
    case FILTER_DATA:
      return { ...store, products: payload }
    case FILTER_BRAND:
      return { ...store, products: payload }
    case DATA_SORT:
      return { ...store, products: payload }
    case SINGLE_PRODUCT:
      return { ...store, single_product: payload }
    case 'PRODUCT_TYPES':
      return { ...store, types: payload }
    // -----------------------------------
    case ADD_TO_CARD:
      const cartData = store.men_data.filter((ele) => ele._id === payload)
      const cartData2 = store.cart.filter((ele) => ele._id === payload)
      if (cartData2.length == 0) {
        alert('Product Added Succesfull')

        return { ...store, cart: [...store.cart, cartData[0]] }
      } else {
        alert('Already Present In Cart')
        return { ...store }
      }

    case 'ADD_TO_CARD_W':
      const cartDataW = store.women_data.filter((ele) => ele._id === payload)
      const cartData2W = store.cart.filter((ele) => ele._id === payload)
      if (cartData2W.length == 0) {
        alert('Product Added Succesfull')

        return { ...store, cart: [...store.cart, cartDataW[0]] }
      } else {
        alert('Already Present In Cart')

        return { ...store }
      }
    case REMOVE_CART:
      const cartREMOVE = store.cart.filter((ele) => ele._id != payload)
      console.log('DELETED', cartREMOVE)
      return { ...store, cart: cartREMOVE }
    case DECREASE_CART:
      const decreaseCartIndex = store.cart.findIndex(
        (ele) => ele._id == payload,
      )
      if (store.cart[decreaseCartIndex].Item >= 1) {
        store.cart[decreaseCartIndex].Item -= 1
        let status2 = store.togleIncDec

        if (store.cart[decreaseCartIndex].Item <= 5) {
          status2 = false
        }
        return {
          ...store,
          cart: [...store.cart],
          togleIncDec: status2,
        }
      }

    case INCREASE_CART:
      const increaseCartIndex = store.cart.findIndex(
        (ele) => ele._id == payload,
      )
      if (store.cart[increaseCartIndex].Item >= 0) {
        store.cart[increaseCartIndex].Item += 1

        let status = store.togleIncDec

        if (store.cart[increaseCartIndex].Item >= 5) {
          status = true
        }
        return {
          ...store,
          cart: [...store.cart],
          togleIncDec: status,
        }
      }

    // ----------------------------////-

    case 'GET_JSON_MEN_DATA':
      return { ...store, men_data: payload }
    case 'GET_JSON_WOMEN_DATA':
      return { ...store, women_data: payload }
    case 'GET_MEN_FILTER_PRODUCT':
      return { ...store, men_data: payload }
    case 'GET_WOMEN_FILTER_PRODUCT':
      return { ...store, women_data: payload }
    case 'GET_MEN_SORTING_PRODUCT':
      return { ...store, men_data: payload }
    case 'GET_WOMEN_SORTING_PRODUCT':
      return { ...store, women_data: payload }

    case CHECKOUT_ADDRESS:
      return { ...store, checkout: payload }
    case PAYMENT_DETAILS:
      return { ...store, payment: payload }
    case ADD_BUY:
      return { ...store, buyNow: payload }
    default:
      return store
  }
}
