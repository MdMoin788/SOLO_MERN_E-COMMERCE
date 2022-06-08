import axios from 'axios'
import {
  FILTER_DATA,
} from '../ActionType/ActionType'


export const handleMen = () => (dispatch) => {
    try {
      axios
          .get(`http://localhost:5000/mens`)
          .then((data) => {
                console.log('data', data);
                dispatch({ type: "GET_JSON_MEN_DATA", payload: data.data })
          })
    } catch (error) {
      console.log('error', error)
    }
  }




  
export const getFilter_product_Men = (data) => (dispatch) => {
  try {
    axios
      .get(`http://localhost:5000/mens?category=${data}`)
      .then((data) => {
        console.log("data FILTER", data);
        dispatch({ type: "GET_MEN_FILTER_PRODUCT", payload: data.data }); //senfd to reducer
      })
     
  } catch (error) {
    console.log(error);
  }
};




export const getMen_Sorting_product = (value) => (dispatch) => {
  console.log('value', value);
  try {
    if (value == "HTL") {
      axios
        .get(`http://localhost:5000/mens/sortdesc`)
        .then((data) => {
          console.log("data", data);
          dispatch({ type: "GET_MEN_SORTING_PRODUCT", payload: data.data }); 
        });
    } else {
      axios.get(`http://localhost:5000/mens/sortasc`).then((data) => {
        console.log("data", data);
        dispatch({ type: "GET_MEN_SORTING_PRODUCT", payload: data.data }); 
      });
    }
  } catch (error) {
    console.log(error);
  }
};


export const SinglePoduct = (singles) => (dispatch) => {
  console.log('singles', singles);
  try {
   
      dispatch({ type: "SINGLE_PRODUCT", payload: singles })
  } catch (error) {
    console.log('error', error)
  }
}

export const kidsTypes = (singles) => (dispatch) => {
  console.log('singles', singles);
  try {
   
      dispatch({ type: "PRODUCT_TYPES", payload: singles })
  } catch (error) {
    console.log('error', error)
  }
}


