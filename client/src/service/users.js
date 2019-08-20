import Vida from '../api/vida.js'

export const userService = {
  login,
  logout,
};

function login(username, password) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ username, password }),
  };
  return fetch('http://dev.api.vida.riiid.co:3000/api/product_reviews/comment', requestOptions)
    .then(handleResponse)
    .then((user) => {
      console.log('after handleResponse');
      if (user.token) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function handleResponse(response) {
  console.log(process.env.NODE_ENV)
  return response.json().then((data) => {
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }
      const error = (data && data.error) || response.statusText;
      return Promise.reject(error);
    }
    console.log(data)
    return data;
  });
}
