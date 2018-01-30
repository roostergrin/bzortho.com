const route = '//bzortho.com/wp-json'

const api = () => {
  return document.location.hostname === 'localhost' ? 'https://' + route : 'https://' + route
}

export default api()
