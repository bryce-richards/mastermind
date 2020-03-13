import {
  THEME_CHANGED,
  PALETTE_SELECTED,
  GET_ACTIVE_COLOR
} from '../actions/actionTypes';

const paletteDefaultState = {
  theme: 'neon',
  activeColor: 0
};

const settings = (state = paletteDefaultState, action) => {
  switch (action.type) {
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
    case NUM_COLORS_CHANGED:
      return {
        ...state,
        numColors: action.numColors
      };
    default:
      return state
  }
};

export default settings;