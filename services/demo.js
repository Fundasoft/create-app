/**
 * Modules dependencies
 */
const axios = require('axios');

const restclient = axios.create({
  baseURL: 'https://api.chucknorris.io',
  timeout: 5000,
});

/**
 * Service interface
 */
class Service {
  static getJoke() {
    return restclient.get(`/jokes/random`)
      .then(response => response.data)
      .catch(err => err);
  }
}

/**
 * Expose Service
 */
module.exports = Service;
