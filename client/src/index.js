import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/index';
import App from './app';

const initialState = window.__INITIAL_STATE__; // eslint-disable-line

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    thunkMiddleware,
  ),
);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('reactbody'),
  );
};

render(App);
