import { combineReducers } from 'redux';
import palette from './paletteReducer';
import game from './gameReducer';
import settings from './settingsReducer';

const appReducer = combineReducers({
  palette,
  game,
  settings
});

export default appReducer;