// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { actionProduct, actionSort, handleGetBrand } from '../../Redux/Action/ActionProducts'
// import { addDataToCard } from '../../Redux/Action/Cart.Action'
// import StylesProduct from "../../Styles/StylesProduct.module.css"
// import Navbar from '../Navbar/Navbar'
// const Products = () => {
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(actionProduct())
//   }, [])
//   const products = useSelector((store) => store.products.products)
//   function handlefilter(brand) {
//     dispatch(handleGetBrand(brand))
//   }
//   const addToCart = (id) => {
//     dispatch(addDataToCard(id))
//   }
//   const handleSort = (e)=>{
//     let value = e.target.value
//     dispatch(actionSort(value))
//   }
//   return (<>
//     <div className={StylesProduct.Navbar}>
//       <Navbar></Navbar>
//     </div>
//     <br />
//     <br />
//     <nav className={StylesProduct.navPro}>
//       <div className={StylesProduct.Filter}  >
//         <div >
//           <div className={StylesProduct.brandTitle} >Brand</div>
//           <div className={StylesProduct.navProBrand}>
//             <div><button onClick={() => { handlefilter("Nike") }}>Nike Shows</button></div>
//             <div >
//               <button onClick={() => { handlefilter("Sports") }}>Sport Shows</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={StylesProduct.sorting} >
//         <div  >Sort By : Price</div>
//         <select onChange={handleSort}>
//           <option >Select</option>
//           <option value="LTH">ASC</option>
//           <option value="HTL">DSC</option>
//         </select>
//       </div>
//     </nav>
//     <div className={StylesProduct.productContainer} >
//       {
//         products.map((ele) => {
//           return (
//               <div className={StylesProduct.productContainerChild}>
//                 <Link to={`/product/description/${ele.id}`} className={StylesProduct.link} >
//                   <div className={StylesProduct.productContainerImage}>
//                     <img className={StylesProduct.productContainerImageImg} src={ele.image_url} alt="" />
//                   </div>
//                   <div className={StylesProduct.productContainerDexcription}>
//                   <p>Name : {ele.brand}</p>
//                     <p>Category : {ele.category}</p>
//                     <p>Price : {ele.price}</p>
//                   </div>
//                 </Link>
//                 <button className={StylesProduct.productContainerCart} onClick={() => { addToCart(ele._id) }}>Add to Cart</button>
//               </div>
//           )
//         })
//       }
//     </div>
//   </>
//   )
// }
// export default Products
