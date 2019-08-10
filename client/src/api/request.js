import axios from 'axios';

export default class Request {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getReq(url, params = {}, method) {
    return this.axiosInstance({
      method,
      url,
      data: { params },
    })
      .then(this.handleResponse)
      .catch()
      .then();
  }

  _get(path, params = {}) {
    this.getReq(path, params, 'GET');
  }

  _post(path, params = {}) {
    this._getReq(path, params, 'POST');
  }

  handleResponse(response) {
    console.log(response)
    return response.json().then((data) => {
      console.log("hanldeRes");
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          logout();
          location.reload(true);
        }
        const error = (data && data.error) || response.statusText;
        return Promise.reject(error);
      }
      console.log(data);
      return data;
    });
  }
}

