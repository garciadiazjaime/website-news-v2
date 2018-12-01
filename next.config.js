const { API_URL } = process.env

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  },
  publicRuntimeConfig: { // Will be available on both server and client
    apiUrl: API_URL
  }
}
