import { 
  FETCH_DATA_SUCCESS, 
  FETCH_DATA_BEGIN, 
  FETCH_DATA_ERROR,
  FILTER_HERO_LIST
 } from '../actions/types'

const INITIAL_STATE = {
  initialData: null,
  data: null,
  isLoading: false,
  error: null,
  searchTerm: ''
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
        initialData: action.payload,
        data: action.payload,
        isLoading: false
      }
    case FETCH_DATA_ERROR:
      // Request failed, remove data
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        initialData: null,
        data: null
      }
    case FILTER_HERO_LIST:
      let term = action.payload
      let initialData = state.initialData
      let newData = initialData.filter( hero => hero.name.includes(term))
      return {
        ...state,
        data: newData,
        searchTerm: action.payload
      }  
    default:
      return state  
  }
}