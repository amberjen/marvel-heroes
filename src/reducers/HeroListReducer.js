import { FETCH_DATA_SUCCESS, FETCH_DATA_BEGIN, FETCH_DATA_ERROR } from '../actions/types'

const INITIAL_STATE = {
  data: null,
  isLoading: false,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_DATA_BEGIN:
      // Mark the api call begin
      // reset any errors
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    case FETCH_DATA_ERROR:
      // Request failed, remove data
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: null
      }
    default:
      return state  
  }
}