import {
  NEW_GAME_STARTED,
  THEME_CHANGED,
  PALETTE_SELECTED
} from '../actions/actionTypes';

import { defaultSettings } from '../utils/constants';

const { theme } = defaultSettings;

const paletteDefaultState = {
  theme,
  activeColor: 0
};

const palette = (state = paletteDefaultState, action) => {
  switch (action.type) {
    case NEW_GAME_STARTED:
      return {
        ...state,
        activeColor: 0
      }
    case THEME_CHANGED:
      return {
        ...state,
        theme: action.theme
      };
    case PALETTE_SELECTED:

      return {
        ...state,
        activeColor: action.color
      };
    default:
      return state;
  }
};

export default palette;