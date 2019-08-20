import axios from 'axios';

export default class Request {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  sendReq(url, params = {}, method) {
    return this.axiosInstance({
      method,
      url,
      data: { params },
    })
      .then(this.handleResponse);
  }

  _get(path, params = {}) {
    this.sendReq(path, params, 'GET');
  }

  _post(path, params = {}) {
    this.sendReq(path, params, 'POST');
  }

  handleResponse(response) {
    const status = response.status
    const data = response.data
    if (!status === 200) {
      const error = (data && data.error) || response.statusText;
      // return new Promise.reject(error);
      return new Promise(reject => {
        console.log(error)
      })
    }
    console.log('hey')
    // return Promise.resolve(data);
    return new Promise(resolve => {
      console.log('hey')
    })
  }
}

