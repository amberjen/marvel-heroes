import md5 from 'md5'

const PUBLIC_KEY = '2a8c4d5005c145a23d566801aa1fd5b1'
const PRIVATE_KEY = '50600b038ec7771be419af5639788093dc53e25e'
const baseUrl = 'http://gateway.marvel.com/v1/public'
let ts = new Date().getTime()
let hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)

const getCharacters = () => {
  let requestUrl = `${baseUrl}/characters?limit=20&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}` 

  return fetch(requestUrl)
}


export {
  getCharacters,
}