import {createSlice} from "@reduxjs/toolkit";

const storageKey = "cartData";
let cartData = JSON.parse(localStorage.getItem(storageKey)) || [];
const CartSlice = createSlice({
    name:'cart',
    initialState:cartData,
    reducers:{
        //add to cart function
        AddToCart : (state,action)=>{
            let item = action.payload
            let exisitingItem = state.find(product=> product.id === item.id)
            if(exisitingItem){
                exisitingItem.quantity+=1
            }
            else{
                state.push(item)
            }
            localStorage.setItem(storageKey,JSON.stringify(state));
        },

        //remove from cart function
        RemoveFromCart : (state,action)=>{
            let id = action.payload
            let filterItem = state.filter(product=>product.id !== id)
            localStorage.setItem(storageKey,JSON.stringify(filterItem))
            return filterItem
        },

        //increase quantity
        INCQnty : (state,action)=>{
            let item = action.payload
            let exisitingItem = state.find(product=> product.id === item.id)
            exisitingItem ? exisitingItem.quantity+=1 : exisitingItem.quantity;
            localStorage.setItem(storageKey,JSON.stringify(state))
        },

        //decreasing quantity
        DECQnty : (state,action)=>{
            let item = action.payload
            let exisitingItem = state.find(product=> product.id === item.id)
            if(exisitingItem && exisitingItem.quantity > 1){
                exisitingItem.quantity-=1;
            }
            localStorage.setItem(storageKey,JSON.stringify(state))
        }
    }
})

export const {AddToCart,RemoveFromCart,INCQnty,DECQnty} = CartSlice.actions;
export default CartSlice.reducer;