const API_KEY = '5e7dd8093621696c55a52bdc232c3c64'
const BASE_URL = 'https://api.themoviedb.org/3/'
const LANGUAGE = '&language=ru-RU'
// trending/all/day?api_key=<<api_key>>

const getData = (url) => fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw `Опаньки... Ошибка ${response.status}`
  })
  .catch(err => console.error(err))



export const getTriends = async (type = 'all', period = 'week', page = 1) => {
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`
  return await getData(url)
}