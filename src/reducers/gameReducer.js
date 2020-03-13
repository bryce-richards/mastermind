import { combineReducers } from 'redux';
import info from './infoReducer';
import master from './masterReducer';
import board from './boardReducer';

export default combineReducers({
  info,
  master,
  board
});