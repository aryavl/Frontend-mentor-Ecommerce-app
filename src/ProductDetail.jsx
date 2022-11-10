import {useSelector,useDispatch} from 'react-redux'
import React, { useState } from 'react'
import minus from './imagess/icon-minus.svg'
import plus from './imagess/icon-plus.svg'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { cartData } from './data'
import { cartActions } from './store/cartSlice'


const ProductDetail = () => {
  // let itemQuantity=useSelector(state=>state.cart.itemQuantity)
   const {price,id,img,name}=cartData;
  //  let totalPrice=useSelector(state=>state.cart.totalPrice)
    const dispatch=useDispatch()
   const [qty,setQty]=useState(1)
   const [total,setTotal]=useState(price)
    const handleMinus = () =>{
     dispatch(cartActions.decreaseQty)
     setQty(qty -1)
     setTotal(total - price)
     if(qty <=0){
      setQty(1)

     }
    }
    const handleAdd = () =>{
      setQty(qty+1)
      setTotal(total + price)
     
      
    }
    const addToCartHandler = () =>{
      dispatch(cartActions.addTocart({
        id:id,
        name:name,
        total:total,
        qty:qty,
        img:img,
        price:price
      }))
     
    }
  
  return (
    <article className='px-8 pb-10'>
        <h2 className='bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wider text-sm font-bold inline-block rounded shadow mb-10'>Sneakers company</h2>
        <h1 className='text-slate-900 mb-10 font-bold text-3xl lg:text-4xl'>Fall Limited Edition Sneakers</h1>
        <p className='text-slate-600 mb-10 leading-relaxed'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
  <div className='flex flex-wrap items-center justify-between lg:flex-col lg:gap-2 lg:items-start'>
    <ul className='flex items-center gap-5'>
        <li className='text-slate-900 font-bold text-2xl'>${price}.00</li>
        <li className=' bg-orange-100 py-1 px-2 text-orange-400  tracking-wider text-sm font-bold inline-block rounded shadow'>50%</li>
    </ul>
    <p className='text-slate-600 text-sm'><s>$250.00</s></p>
  </div>
  <div className='mt-10 lg:flex lg:items-center lg:justify-between gap-2'>
    <ul className='flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1 '>
        <li 
        className='cursor-pointer'
        onClick={handleMinus}><img src={minus} alt="" /></li>
        <li>{qty}</li>
        <li 
        className='cursor-pointer'
        onClick={handleAdd}><img src={plus} alt="" /></li>
    </ul>
   <div className='lg:flex-1'>
   <button
   onClick={addToCartHandler}
   className='flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200'>
        <AiOutlineShoppingCart/>Add to cart
    </button>
   </div>
  </div>
    </article>
  )
}

export default ProductDetail