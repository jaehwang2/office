import promise from 'bluebird';
import config from '../routes/config';
import PGP from 'pg-promise';
import {Users} from './repo/index';

const initOptions = {
    promiseLib: promise
};

const pgp = PGP(initOptions)
const db = pgp(config.login);

const tbl = {
  users: new Users(db, pgp),
}

export default tbl;
