import express from 'express';
import db from '../../db/index';
import jwt from 'jsonwebtoken';
import config from '../config';


const router = express.Router();

GET('/create', () => db.users.create());
GET('/find/:id', req => db.users.findById(req.params.id));
GET('/remove/:id', req => db.users.remove(req.params.id));
GET('/all', () => db.users.all());
GET('/total', () => db.users.total());




POST('/add', req => db.users.add(req.body.username, req.body.password));
LOGIN('/login', req => db.users.findUser(req.body.username, req.body.password));

function GET(url, handler) {
    router.get(url, (req, res) => {
      handler(req)
          .then(data => {
              res.json({
                  success: true,
                  data
              });
          })
          .catch(error => {
              res.json({
                  success: false,
                  error: error.message || error
              });
          });
    });
}

function POST(url, handler) {
  router.post(url, (req, res) => {
    handler(req)
        .then(data => {
            res.json({
                success: true,
            });
        })
        .catch(error => {
            res.json({
                success: false,
                error: error.message || error
            });
        });
  });
}

function LOGIN(url, handler) {
  router.post(url, (req, res) => {
    const secret = config.secret
    handler(req)
      .then(user => {
        if(!user){
          throw new Error('login Failed')
        } else {
          const p = new Promise((resolve, reject) => {
            jwt.sign(
              {
                id: user.id,
                username: user.username
              },
              secret,
              {
                expiresIn: '7d',
                issuer: 'joey',
                subject: 'userInfo'
              }, (error, token) => {
                if (error) reject(error)
                  resolve(token)
              })
          })
          return p
        }
      })
      .then(token => {
        res.json({
          success: true,
          message: 'logged in successfully',
          token
        })
      })
      .catch(error => {
        res.json({
            success: false,
            error: error.message || error
        });
      })
  });
}

export default router;
