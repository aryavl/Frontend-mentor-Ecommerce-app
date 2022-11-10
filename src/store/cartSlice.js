import { createSlice } from "@reduxjs/toolkit";
import {cartData} from '../data'

const {price}=cartData
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        itemList:[],
        total:price,
        itemQuantity:1,
    },
    reducers:{
        addTocart(state,action){
            const newItem=action.payload;
            const existingItem=state.itemList.find(item=>item.id === newItem.id)
         
                state.itemList.push(newItem)
            
        },
        increaseQty(state,action){
            state.itemQuantity=action.payload
            
        },
        decreaseQty(state){
            state.itemQuantity--
            if(state.itemQuantity<=1){
                state.itemQuantity=1
            }
        },
        removeFromCart(state,action){
            const id=action.payload
            state.itemList=state.itemList.filter(item=>item.id!==id)
        }

    },
    
})
export const cartActions=cartSlice.actions;
export default cartSlice