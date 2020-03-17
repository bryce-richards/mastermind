import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers';
import App from './components/App';

const rootReducer = (state, action) => {
  if (action.type === 'GAME_ENDED') {
    state = undefined;
  };
  
  return appReducer(state, action);
}
const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);