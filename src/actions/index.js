import md5 from 'md5'
import { 
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  FETCH_DATA_BEGIN,
  FILTER_HERO_LIST,
  GET_HERO_BY_ID } from './types'
import * as config from '../../keys'

export const fetchDataError = (error) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: error
  }
}

export const fetchDataBegin = () => {
  return {
    type: FETCH_DATA_BEGIN
  }
}

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  }
}

export const getAllHeroes = () => {
  
  // Fetch Marvel API
  const PUBLIC_KEY = config.MARVEL_API_PUBLIC_KEY
  const PRIVATE_KEY = config.MARVEL_API_PRIVATE_KEY
  const baseUrl = 'http://gateway.marvel.com/v1/public'
  let ts = new Date().getTime()
  let hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)
  let requestUrl = `${baseUrl}/characters?limit=20&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}` 

  return (dispatch) => {
    dispatch(fetchDataBegin()) 

    fetch(requestUrl)
      .then(response => response.json())
      .then(jsonData => dispatch(fetchDataSuccess(jsonData['data']['results'])))
      .catch(error => dispatch(fetchDataError(error)))
  }

}

export const filterHeroList = (term) => {
  return {
    type: FILTER_HERO_LIST,
    payload: term
  }
}

export const getHeroById = (heroId) => {
  return {
    type: GET_HERO_BY_ID,
    payload: heroId
  }
}