import {
  NEW_GAME_STARTED,
  GAME_ENDED,
  CODE_SUBMITTED,
  NEW_TURN,
  BOARD_SELECTED,
  THEME_CHANGED,
  PALETTE_SELECTED,
  NUM_GUESSES_CHANGED,
  CODE_LENGTH_CHANGED,
  NUM_COLORS_CHANGED
} from './actionTypes';

export const newGameStarted = (master, board) => {
  return {
    type: NEW_GAME_STARTED,
    master,
    board
  };
};

export const codeSubmitted = (turn, boardKey) => (dispatch, getState) => {
  const { settings } = getState();

  dispatch({
    type: CODE_SUBMITTED,
    turn,
    boardKey
  });

  // if not the last turn, start new turn
  if (turn < settings.numGuesses) {
    dispatch({
      type: NEW_TURN,
      newTurn: turn + 1
    });
  } else {
    dispatch({
      type: GAME_ENDED
    });
  }
};

export const boardSelected = (boardRow, pegIndex, activeColor) => {
  return{
    type: BOARD_SELECTED,
    boardRow,
    pegIndex,
    activeColor
  };
};

export const themeChanged = theme => {
  return {
    type: THEME_CHANGED,
    theme
  };
};

export const paletteSelected = color => {
  return {
    type: PALETTE_SELECTED,
    color
  };
};

export const numGuessesChanged = numGuesses => {
  return {
    type: NUM_GUESSES_CHANGED,
    numGuesses
  }
};

export const codeLengthChanged = codeLength => {
  return {
    type: CODE_LENGTH_CHANGED,
    codeLength
  };
};

export const numColorsChanged = numColors => {
  return {
    type: NUM_COLORS_CHANGED,
    numColors
  };
};