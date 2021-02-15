import Rating from '@material-ui/lab/Rating';

import CartPage from "./CartPage";

export const totalAmount = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);
export const initialState = {
    basket : []
}
const reducer =(state,action)=>{
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
        return {
            ...state,
            basket:[...state.basket, action.item]
        }
        break;
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id)
           
            if(index>=0){
                newBasket.splice(index, 1);
            }else if(index == index){
                newBasket.splice(index, 1);
            }
            
            return {...state,
                 basket: newBasket
                }
        default:
            return state;
    }
}
export default reducer;