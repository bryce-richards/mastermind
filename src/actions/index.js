import {
  NEW_GAME_STARTED,
  NEW_TURN_STARTED,
  CODE_SUBMITTED,
  BOARD_SELECTED,
  THEME_CHANGED,
  PALETTE_SELECTED,
  GET_ACTIVE_COLOR,
  NUM_GUESSES_CHANGED,
  CODE_LENGTH_CHANGED,
  NUM_COLORS_CHANGED
} from './actionTypes';

export const newGameStarted = () => {
  return { 
    type: NEW_GAME_STARTED
  };
};

export const newTurnStarted = (prevTurn) => {
  return {
    type: NEW_TURN_STARTED,
    newTurn: prevTurn + 1
  };
};

export const codeSubmitted = (guess) => {
  return {
    type: CODE_SUBMITTED,
    guess
  };
};

export const boardSelected = (rowId, pegIndex, newColor) => {
  return {
    type: BOARD_SELECTED,
    rowId,
    pegIndex,
    newColor
  };
};

export const getActiveColor = () => {
  return {
    type: GET_ACTIVE_COLOR
  };
};

export const themeChanged = (theme) => {
  return {
    type: THEME_CHANGED,
    theme
  };
};

export const paletteSelected = (newColor) => {
  return {
    type: PALETTE_SELECTED,
    newColor
  };
};

export const numGuessesChanged = (numGuesses) => {
  return {
    type: NUM_GUESSES_CHANGED,
    numGuesses
  };
};

export const codeLengthChanged = (codeLength) => {
  return {
    type: CODE_LENGTH_CHANGED,
    codeLength
  };
};

export const numColorsChanged = (numColors) => {
  return {
    type: NUM_COLORS_CHANGED,
    numColors
  };
};