import tokenService from './tokenService';
const BASE_URL = '/api/plants';

export default {
  getAll
}

function getAll() {
  return fetch(BASE_URL).then(res => res.json());
}