import Request from './request';
import axios from 'axios';

export const PROD_URL = 'https://api.vida.riiid.co';
export const DEV_URL = 'https://dev.api.vida.riiid.co';
export const URL = process.env.NODE_ENV === 'production' ? PROD_URL : DEV_URL;

const PATH_REVIEW_COMMENT = '/api/product_reviews/comment';

function handleResponse(response) {
  const { status, data } = response;
  if (!status === 200) {
    const error = (data && data.error) || response.statusText;
    return error;
  }
  return data;
}

const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export function getReview(params = {}) {
  return axiosInstance({
    method: 'GET',
    url: PATH_REVIEW_COMMENT,
    data: { params },
  })
    .then(handleResponse);
}
