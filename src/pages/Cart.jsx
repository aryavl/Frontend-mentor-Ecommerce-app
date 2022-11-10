import { Container, Grid, Hidden, List, ListItem } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartData } from '../data'
import Header from '../Header'
import product from '../imagess/image-product-1-thumbnail.jpg'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { cartActions } from '../store/cartSlice'


const Cart = () => {
  const itemList=useSelector(state=>state.cart.itemList)
  console.log(itemList);
  const dispatch=useDispatch()
  const {price}=cartData;
  const item=itemList.map(item=>console.log(item.img))
  console.log(item);
  const deleteHandler = (id) =>{
    dispatch(cartActions.removeFromCart(id))
  }
  return (
    <div>
      <Header/>
      <Container className='pt-2'>
          {itemList.length>=1 ? <>
          {itemList.map(item=>(
            <div key={item.id}>
            <Hidden mdUp>
          <List  className='flex flex-col '>
           <ListItem ><img src={product} alt="" /></ListItem>
            <ListItem className='text-slate-800 font-bold italic'>{item.name}</ListItem>
           <div className='flex mt-5 mb-5'>
           <ListItem>${item.price}.00</ListItem>
           <ListItem>x {item.qty}</ListItem>
           <ListItem><b>${item.total}.00</b></ListItem>
           <button 
             onClick={()=>deleteHandler(item.id)}
             className='text-red-600 text-xl'><RiDeleteBin6Line/></button>

           </div>
           <div>

           <button className='bg-orange-500 text-white px-10 w-full rounded-lg py-1'>Checkout</button>
           </div>
          </List>
          </Hidden>
           <Hidden mdDown>
           <List  className='flex items-center justify-between '>
            <div className='flex'>
           <ListItem ><img src={product} alt="" /></ListItem>
            <ListItem className='text-slate-800 font-bold italic'>{item.name}</ListItem>
            </div>
           <div className='flex mt-5 mb-5'>
           <ListItem>${item.price}.00</ListItem>
           <ListItem>x </ListItem>
           <ListItem>{item.qty} </ListItem>
           <ListItem><b>${item.total}.00</b></ListItem>
           </div>
           <div className='flex justify-between items-center gap-4'>

           <button className='bg-orange-500 text-white px-10 w-full rounded-lg py-1'>Checkout</button>
           <button 
           onClick={()=>deleteHandler(item.id)}
           className='text-red-600 text-2xl'><RiDeleteBin6Line/></button>

           </div>
          </List>
             </Hidden>
          </div>
          ))}
          </> : <h1>Cart Empty! Add items</h1>}
      </Container>
    </div>
  )
}

export default Cart