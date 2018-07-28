import md5 from 'md5'
import { 
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_ERROR,
  FETCH_COMICS_BEGIN
 } from './types'
import * as config from '../../keys'

export const fetchComicsError = (error) => {
  return {
    type: FETCH_COMICS_ERROR,
    payload: error
  }
}

export const fetchComicsBegin = () => {
  return {
    type: FETCH_COMICS_BEGIN
  }
}

export const fetchComicsSuccess = (data) => {
  return {
    type: FETCH_COMICS_SUCCESS,
    payload: data
  }
}

export const getHeroComics = (heroId) => {

  // Fetch Marvel API
  const PUBLIC_KEY = config.MARVEL_API_PUBLIC_KEY
  const PRIVATE_KEY = config.MARVEL_API_PRIVATE_KEY
  const baseUrl = 'http://gateway.marvel.com/v1/public/characters'
  let ts = new Date().getTime()
  let hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)
  let requestUrl = `${baseUrl}/${heroId}/comics?limit=20&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}` 

  return (dispatch) => {
    dispatch(fetchComicsBegin()) 

    fetch(requestUrl)
      .then(response => response.json())
      .then(jsonData => dispatch(fetchComicsSuccess(jsonData['data']['results'])))
      .catch(error => dispatch(fetchComicsError(error)))
  }

}