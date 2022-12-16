import { types } from "./types";
export const todoReducer = (state, action) => {
  let newState = null;
  switch (action.type) {
    case types.add:
      const previousData = state?.data ?? [];
      newState = {
        ...state,
        data: [...previousData, action.payload]
      }
      break;
    case types.delete: {
      // const dataReduce = state.data.reduce((previousValue,currentValue)=>{
      //   if(currentValue.id!==action.payload)
      //     return [...previousValue, currentValue];
      //   else
      //     return [...previousValue];
      // },[]);
      const dataReduce = state.data.reduce(
        (previousValue, currentValue) =>
          (currentValue.id !== action.payload) ? [...previousValue, currentValue] : [...previousValue],
        []
      );
      newState = {
        ...state,
        data: dataReduce
      }
    }
      break;
    default:
      throw new Error(`No se reconoce el tipo ${action.type}`);
  }
  return newState;
}