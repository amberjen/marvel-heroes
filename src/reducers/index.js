import { combineReducers } from 'redux'
import HeroListReducer from './HeroListReducer'

export default combineReducers({
  heroList: HeroListReducer
})