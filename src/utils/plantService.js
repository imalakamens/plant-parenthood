import tokenService from './tokenService';
const BASE_URL = '/api/plants';

export function getAll() {
  return fetch(BASE_URL).then(res => res.json());
}

export function create(plant) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(plant)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}` , {
    method: 'DELETE'
  }).then(res => res.json());
}

export function update(plant) {
  return fetch(`${BASE_URL}/${plant._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(plant)
  }).then(res => res.json());
}