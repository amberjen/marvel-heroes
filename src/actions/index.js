import md5 from 'md5'
import { 
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  FETCH_DATA_PENDING,
  GET_HERO_BY_ID } from './types'

export const fetchDataError = (error) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: error
  }
}

export const fetchDataPending = () => {
  return {
    type: FETCH_DATA_PENDING
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
  const PUBLIC_KEY = '2a8c4d5005c145a23d566801aa1fd5b1'
  const PRIVATE_KEY = '50600b038ec7771be419af5639788093dc53e25e'
  const baseUrl = 'http://gateway.marvel.com/v1/public'
  let ts = new Date().getTime()
  let hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)
  let requestUrl = `${baseUrl}/characters?limit=20&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}` 

  return (dispatch) => {
    dispatch(fetchDataPending()) 

    fetch(requestUrl)
      .then(response => response.json())
      .then(jsonData => dispatch(fetchDataSuccess(jsonData['data']['results'])))
      .catch(error => dispatch(fetchDataError(error)))
  }

}

export const getHeroById = (heroId) => {
  return {
    type: GET_HERO_BY_ID,
    payload: heroId
  }
}