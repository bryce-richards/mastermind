import {
  NUM_GUESSES_CHANGED,
  CODE_LENGTH_CHANGED,
  NUM_COLORS_CHANGED
} from '../actions/actionTypes';

const settingsDefaultState = {
  numGuesses: 12,
  codeLength: 4,
  numColors: 6
};

const settings = (state = settingsDefaultState, action) => {
  switch (action.type) {
    case NUM_GUESSES_CHANGED:
      return {
        ...state,
        numGuesses: action.numGuesses
      };
    case CODE_LENGTH_CHANGED:
      return {
        ...state,
        codeLength: action.codeLength
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