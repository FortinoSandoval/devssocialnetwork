import { TEST_DIPATCH } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_DIPATCH:
      return {
        ...state,
        user: action.payload
      }  
     default:
      return state;
  }
}