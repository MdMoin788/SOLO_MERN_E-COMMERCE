import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addDataToCard, addDataToCardW } from '../../Redux/Action/Cart.Action'
import { kidsTypes } from '../../Redux/Action/Men.Action'
import { getFilter_product_Women, getWomen_Sorting_product, handleWomen } from '../../Redux/Action/Women.Action'
import StylesProduct from "../../Styles/StylesProduct.module.css"
import Navbar from '../Navbar/Navbar'
const WomenProducts = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleWomen())
  }, [])


  const products = useSelector((store) => store.products.women_data)
   console.log('products', products);

   const handleFilter = (data) => {
    dispatch(getFilter_product_Women(data));
    console.log("data", data);
  };


  const handleSorting = (e) => {
    let value = e.target.value;
    console.log(value);
    dispatch(getWomen_Sorting_product(value));
  };
  const handleAddCart = (id) => {
    console.log("id", id);

    dispatch(addDataToCardW(id));
  };




  return (
<>


<div className={StylesProduct.Navbar}>
    <Navbar></Navbar>
  </div>
  <br />
  <br />
  <nav className={StylesProduct.navPro}>
    <div className={StylesProduct.Filter}  >
      <div >
        <div className={StylesProduct.brandTitle} >Brand</div>
        <div className={StylesProduct.navProBrand}>
          <div><button onClick={() => { handleFilter("skirt") }}>Skirt</button></div>
          <div >
            <button onClick={() => { handleFilter("dress") }}>Dress</button>
          </div>
        </div>
      </div>
    </div>
    <div className={StylesProduct.sorting} >
      <div  >Sort By : Price</div>
      <select onChange={handleSorting}>
        <option >Select</option>
        <option value="LTH">ASC</option>
        <option value="HTL">DSC</option>
      </select>
    </div>
  </nav>



      <div className={StylesProduct.productContainer}>
        {
          products.map((ele) => {
            return (
              <div className={StylesProduct.productContainerChild}>
            <Link onClick={()=>dispatch(kidsTypes("womens"))}  to={`/product/description/${ele._id}`} className={StylesProduct.link}  >
            <div className={StylesProduct.productContainerImage}>
                    <img className={StylesProduct.productContainerImageImg} src={ele.image_url} alt="" />
                  </div>
                  <div className={StylesProduct.productContainerDexcription}>
                  <p>Name : {ele.brand}</p>
                    <p>Category : {ele.category}</p>
                    <p>Price : {ele.price}</p>
                  </div>
                  </Link>
                 <div  onClick={()=>dispatch(kidsTypes("womens"))}><button className={StylesProduct.productContainerCart} onClick={() => handleAddCart(ele._id)}>Add to Cart</button></div>
              </div>
            )
          })
        }
      </div>




</>
  )
}
export default WomenProducts
