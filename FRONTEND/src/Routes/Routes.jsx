import React from 'react'
import { Routes as Router, Route } from 'react-router-dom'
import Cart from '../Components/Cart/Cart'
import AdressForm from '../Components/Checkout/AdressForm'
import Error from '../Components/Home/Error'
import Home from '../Components/Home/Home'
import Login from '../Components/Login_SignUp/Login'
import Register from '../Components/Login_SignUp/Register'
import DetailsPage from '../Components/Products/DetailsPage'
import MenProducts from '../Components/Products/MenProducts'
import Products from '../Components/Products/Products'
import WomenProducts from '../Components/Products/WomenProducts'
const Routes = () => {
  return (
    <div>
      <Router>
        <Route path='/' element={< Home />} />
        <Route path='*' element={< Error />} />
        <Route path='/men' element={< MenProducts />} />
        <Route path='/women' element={< WomenProducts />} />
        <Route path='/all/products' element={< Products />} />
        <Route path='/product/description/:id' element={< DetailsPage />} />
        <Route path='/cart' element={< Cart />} />
        <Route path='/checkout' element={< AdressForm />} />
        <Route path='/login' element={< Login />} />
        <Route path='/register' element={< Register />} />

      </Router>
    </div>
  )
}
export default Routes
