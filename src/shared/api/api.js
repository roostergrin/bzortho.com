const route = '//zebrick.rgwplogin.com/wp-json'

const api = () => {
  return document.location.hostname === 'localhost' ? route : 'https://' + route
}

export default api()
