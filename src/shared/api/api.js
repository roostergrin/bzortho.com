const route = '//bzortho.com/wp-json'

const api = () => {
  return document.location.hostname === 'localhost' ? route : document.location.protocol + route
}

export default api()
