import { combineReducers } from 'redux';
import palette from './paletteReducer';
import info from './infoReducer';
import master from './masterReducer';
import board from './boardReducer';
import settings from './settingsReducer';

const appReducer = combineReducers({
  palette,
  info,
  master,
  board,
  settings
});

export default appReducer;