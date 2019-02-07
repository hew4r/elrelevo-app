import {FETCH_EVENTS} from "../constants";

export const events = (state  = {}, action) => {
  
  switch (action.type) {
    
    case FETCH_EVENTS: {
      const events = action.payload;
    }
    default:
      return state;

  }
}