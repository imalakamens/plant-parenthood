import tokenService from './tokenService';
const BASE_URL = '/api/plants';

export default {
  index
}

function index() {
  return fetch(BASE_URL).then(res => res.json());
}