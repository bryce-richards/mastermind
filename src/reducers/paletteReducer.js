import {
  NEW_GAME_STARTED,
  THEME_CHANGED,
  PALETTE_SELECTED
} from '../actions/actionTypes';

import { themes, defaultSettings } from '../utils/constants';

const { theme } = defaultSettings;
const colors = themes[theme];

const paletteDefaultState = {
  theme,
  colors,
  activeColor: 0
};

const palette = (state = paletteDefaultState, action) => {
  switch (action.type) {
    case NEW_GAME_STARTED:
      return {
        theme: action.theme,
        colors: themes[action.theme],
        activeColor: 0
      }
    case THEME_CHANGED:
      return {
        ...state,
        theme: action.theme,
        colors: themes[action.theme]
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