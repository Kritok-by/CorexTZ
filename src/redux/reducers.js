import { combineReducers } from "redux";
import { ADD_COUNTER, REMOVE_COUNTER } from "./types";


const defaultState = {
  goods: [],

}

const cartReducer = (state = defaultState, action)=>{
  switch(action.type){
    case ADD_COUNTER:
      return{...state, goods: state.goods.concat([action.itemId])}
    case REMOVE_COUNTER:
      return {...state, goods: state.goods.filter(item => item !== action.itemId)}
    default: return state
  }
}


export const reducer = combineReducers({
  cart: cartReducer
})
