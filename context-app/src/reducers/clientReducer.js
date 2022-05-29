import {
  LOAD_CLIENT_LIST_SUCCESS,
} from '../constants/client-action-types';

const initialState = {
  clientList: [],
}

const clientReducer = (state = initialState, action) => {

  switch (action.type) {
    case  LOAD_CLIENT_LIST_SUCCESS:
      return {
        ...state,
        clientList: action.payload,
      } 
    default: 
      return state
  }
}

export default clientReducer;