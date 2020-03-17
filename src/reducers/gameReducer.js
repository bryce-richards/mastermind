import { combineReducers } from 'redux';
import info from './game/infoReducer';
import master from './game/masterReducer';
import board from './game/boardReducer';

export default combineReducers({
  info,
  master,
  board
});