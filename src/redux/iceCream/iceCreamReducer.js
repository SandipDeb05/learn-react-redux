import { BUY_ICE_CREAM } from "./iceCreamTypes";

const INITIAL_STATE = {
  numOfIceCream: 10,
};

const iceCreamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM: {
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    }
    default:
      return state;
  }
};

export default iceCreamReducer;
