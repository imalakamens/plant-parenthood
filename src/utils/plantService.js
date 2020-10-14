import tokenService from './tokenService';
const BASE_URL = '/api/plants';

export default {
  getAll,
  create
}

function getAll() {
  return fetch(BASE_URL).then(res => res.json());
}

function create(plant) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(plant)
  }).then(res => res.json());
}