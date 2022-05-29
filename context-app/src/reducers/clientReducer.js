import {
  LOAD_CLIENT_LIST_REQUEST,
} from '../constants/client-action-types';

const initialState = {
  clientList: [],
}

const clientReducer = (state = initialState, action) => {

  switch (action.type) {
    case  LOAD_CLIENT_LIST_REQUEST:
      return {
        ...state,
        clientList: action.payload,
      } 
    default: 
      return state
  }
}

export default clientReducer;