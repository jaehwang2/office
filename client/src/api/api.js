import Request from './request';

export const PROD_URL = 'https://api.vida.riiid.co';
export const DEV_URL = 'https://dev.api.vida.riiid.co';
export const URL = process.env.NODE_ENV === 'production' ? PROD_URL : DEV_URL;

const PATH_REVIEW_COMMENT = '/api/product_reviews/comment';

export default class Vida extends Request {
  constructor() {
    super(URL);
  }

  getReview(params = {}) {
    return this._get(PATH_REVIEW_COMMENT, params);
  }
}
