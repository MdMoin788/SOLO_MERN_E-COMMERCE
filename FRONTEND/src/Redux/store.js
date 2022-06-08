import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk"
import { LoginReducer } from "./Reducer/Login.Reducer";

import { actionReducer } from "./Reducer/ReducerProducts";
const rootReducer = combineReducers({
    products : actionReducer,   // products store 
    tokens : LoginReducer   // products store 
})


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;
    const middleware = [thunk]
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);
 export const store = createStore(rootReducer, enhancer);


 let products = {
     produc : {
         arr : []
     }
 }

