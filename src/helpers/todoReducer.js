import { types } from "./types";
export const todoReducer = (state,action) => {
  let newState = null;
  switch(action.type){
    case types.add:
        newState = {
          ...state,
          data: [...state.data,action.payload]
        }
    break;
    case types.delete:{
      newState = {
        ...state,
        data: state.data.filter(item=>item.id!==action.payload)
      }
    }
    break;
    default:
      throw new Error(`No se reconoce el tipo ${action.type}`);
    break;
  }
  return newState;
}
