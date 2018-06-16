import axios from 'axios'

const serviceHost = 'http://52.221.194.145:9460'
var config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
}

export default {
  fetchVets: () => {
    return axios.get(`${serviceHost}/vets`, config).then(r => r.data)
  }
}
