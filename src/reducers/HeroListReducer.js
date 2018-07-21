import { FETCH_DATA_SUCCESS } from '../actions/types'

const INITIAL_STATE = {
  data: null,
  isLoading: true
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    default:
      return state  
  }
}