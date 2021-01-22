import Axios from 'axios'

export const dndApi = Axios.create({
  baseURL: 'https://www.dnd5eapi.co/api/spells',
  timeout: 8000
})

export const api = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/',
  timeout: 8000
})
export const sandboxApi = Axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/codis/spells',
  timeout: 8000
})
export const setBearer = function(bearer) {
  dndApi.defaults.headers.authorization = bearer
  sandboxApi.defaults.headers.authorization = bearer
  api.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  dndApi.defaults.headers.authorization = ''
  sandboxApi.defaults.headers.authorization = ''
  api.defaults.headers.authorization = ''
}
