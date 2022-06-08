import axios from 'axios'
import {
  PRODUCT_DATA_FROM_JSON,
  SUCCESS,
  LOADING,
  FALIURE,
  FILTER_DATA,
  DATA_SORT,
  SINGLE_PRODUCT,
} from '../ActionType/ActionType'
export const actionProduct = () => (dispatch) => {
  try {
    dispatch(actionProductLoading())
    axios
      .get('http://localhost:5000/kids')
      .then((data) => {
        dispatch({ type: PRODUCT_DATA_FROM_JSON, payload: data.data })
        dispatch(actionProductSuccess())
      })
      .catch(() => {
        dispatch(actionProductFalure())
      })
  } catch (error) {
    console.log('error', error)
  }
}



// ===============================================sorting      ===============================================
export const actionSort = (value) => (dispatch) => {
  try {
    if (value == 'HTL') {
      axios
        .get(`http://localhost:5000/kids?_sort=Price&_order=desc,asc`)
        .then((data) => {
          dispatch({ type: DATA_SORT, payload: data.data }) //
        })
    } else {
      axios
        .get(`http://localhost:5000/kids?_sort=Price&_order=asc`)
        .then((data) => {
          dispatch({ type: DATA_SORT, payload: data.data }) //
        })
    }
  } catch (error) {
    console.log(error)
  }
}

// =============================================================== brand sorting =====================================================
export const handleGetBrand = (brand) => (dispatch) => {
  console.log('brand', brand)
  try {
    axios
      .get(`http://localhost:5000/kids?Category=${brand}`)
      .then((data) => {
        dispatch({ type: FILTER_DATA, payload: data.data })
      })
  } catch (error) {
    console.log('error', error)
  }
}

// =============================================================================  ssignle product ==========================================

// ======================================== success falire =================================================================
export const actionProductSuccess = () => {
  return {
    type: SUCCESS,
  }
}
export const actionProductFalure = () => {
  return {
    type: FALIURE,
  }
}
export const actionProductLoading = () => {
  return {
    type: LOADING,
  }
}
