import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';
import App from './components/App';

const rootReducer = (state, action) => {
  if (action.type === 'GAME_ENDED') {
    state = undefined;
  };
  
  return appReducer(state, action);
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);