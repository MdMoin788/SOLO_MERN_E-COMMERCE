import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addDataToCard } from '../../Redux/Action/Cart.Action'
import { getFilter_product_Men, getMen_Sorting_product, handleMen, kidsTypes } from '../../Redux/Action/Men.Action'
import StylesProduct from "../../Styles/StylesProduct.module.css"
import Navbar from '../Navbar/Navbar'
const MenProducts = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleMen())
  }, [])
  const products = useSelector((store) => store.products.men_data)
  console.log('products', products);
  const handleFilter = (data) => {
    dispatch(getFilter_product_Men(data));
    console.log("data", data);
  };
  const handleSorting = (e) => {
    let value = e.target.value;
    console.log(value);
    dispatch(getMen_Sorting_product(value));
  };
  const handleAddCart = (id) => {
    console.log("id", id);
    dispatch(addDataToCard(id));
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
              <div><button onClick={() => { handleFilter("sweaters") }}>"sweaters"</button></div>
              <div >
                <button onClick={() => { handleFilter("shirts") }}>"shirts"</button>
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
              <div  className={StylesProduct.productContainerChild}>
              <div>
              <Link  onClick={()=>dispatch(kidsTypes("mens"))} to={`/product/description/${ele._id}`} className={StylesProduct.link} >
                  <div className={StylesProduct.productContainerImage}>
                    <img className={StylesProduct.productContainerImageImg} src={ele.image_url} alt="" />
                  </div>
                  <div className={StylesProduct.productContainerDexcription}>
                    <p>Name : {ele.brand}</p>
                    <p>Category : {ele.category}</p>
                    <p>Price : {ele.price}</p>
                  </div>
                </Link>
              </div >
                <div onClick={()=>dispatch(kidsTypes("mens"))}><button className={StylesProduct.productContainerCart} onClick={() => handleAddCart(ele._id)}>Add to Cart</button></div>
              </div>
             
            )
          })
        }
      </div>
    </>
  )
}
export default MenProducts
