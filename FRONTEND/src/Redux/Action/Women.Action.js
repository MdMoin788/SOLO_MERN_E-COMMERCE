import axios from 'axios'
import {
  FILTER_DATA,
} from '../ActionType/ActionType'



export const handleWomen = (filter) => (dispatch) => {
    try {
      axios
          .get(`https://moin-mern.herokuapp.com/womens`)
          .then((data) => {
                dispatch({ type: "GET_JSON_WOMEN_DATA", payload: data.data })
          })
    } catch (error) {
      console.log('error', error)
    }
  }


  
  
export const getFilter_product_Women = (data) => (dispatch) => {
  try {
    axios
      .get(`https://moin-mern.herokuapp.com/womens?category=${data}`)
      .then((data) => {
        console.log("data FILTER", data);
        dispatch({ type: "GET_WOMEN_FILTER_PRODUCT", payload: data.data }); //senfd to reducer
      })
     
  } catch (error) {
    console.log(error);
  }
};



export const getWomen_Sorting_product = (value) => (dispatch) => {
  console.log('value', value);
  try {
    if (value == "HTL") {
      axios
        .get(`https://moin-mern.herokuapp.com/womens/sort/asc`)
        .then((data) => {
          console.log("data", data);
          dispatch({ type: "GET_WOMEN_SORTING_PRODUCT", payload: data.data }); 
        });
    } else {
      axios.get(`https://moin-mern.herokuapp.com/womens/sort/desc`).then((data) => {
        console.log("data", data);
        dispatch({ type: "GET_WOMEN_SORTING_PRODUCT", payload: data.data }); 
      });
    }
  } catch (error) {
    console.log(error);
  }
};