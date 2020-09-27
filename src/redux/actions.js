import { ADD_COUNTER, REMOVE_COUNTER } from "./types";

export function addId(id){
  return{
    type: ADD_COUNTER,
    itemId: id
  }
}
export function removeId(id){
  return{
    type: REMOVE_COUNTER,
    itemId: id
  }
}
