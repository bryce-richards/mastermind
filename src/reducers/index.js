import { combineReducers } from 'redux';
import palette from './paletteReducer';
import game from './gameReducer';
import settings from './settingsReducer';

export default combineReducers({
  palette,
  game,
  settings
});