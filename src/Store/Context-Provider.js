import React, { useReducer } from 'react';
import CartContext from './Cart-context';

const reducer = (state, action) => {
    let tempState = {}
        switch(action.type) {
            case 'ADD' :{ 
                if( state.items.filter(item => action.item.id===item.id ).length){
                    state.items.forEach(item => {
if( action.item.id===item.id ){
    item.amount = item.amount + action.item.amount
}})
return {
    items: state.items,
    totalAmount: state.totalAmount + action.item.price * action.item.amount
}
                    }
                
             else {

                
            return   {
                items: state.items.concat(action.item),
                totalAmount: state.totalAmount + action.item.price * action.item.amount
            }
        
        }
    }

            case 'REMOVE' : {
            const removItem = state.items.filter(item => (item.id === action.id))
            return   {
                items: state.items.filter(item => (item.id !== action.id)),
                totalAmount: state.totalAmount - (removItem[0].price * removItem[0].amount)
            }
        }
        }
            return tempState  
        }
const CartProvider = (props) => {

    const defaulCartState = {
        items: [],
        totalAmount: 0,
       
    }
    
 const [cartState, dispatchCartAction] = useReducer(reducer, defaulCartState)
const addToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item})
}
const removeFromCartHandler = (id) => { 
    dispatchCartAction({type:'REMOVE', id})
 }
const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler
}
return (<CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>) 
}
export default CartProvider;