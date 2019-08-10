import express from 'express';
import bodyParser from 'body-parser';
import ssr from './ssr';
import router from './api/router';
import config from './config';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.set('jwt-secret', config.secret)

app.use(express.static('public'));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', router);
app.use('/*', ssr);

app.listen(3000, () => {
  console.log('Hello World listening on port 3000!');
});
