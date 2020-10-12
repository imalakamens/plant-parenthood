const BASE_URL = '/api/users/';

function signup(user) {
  
    return fetch(BASE_URL + 'signup', {
      method: 'POST',
      headers: new Headers({
        "Content-Type" : "application/json"
      }),
      body: JSON.stringify(user),   
    })
    .then((res) => {
      if (res.ok) res.json();
      throw new Error("Email already taken!");
    })
    // Parameter deconstructing?


}

export default {
  signup
}