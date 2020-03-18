import {
  NEW_GAME_STARTED,
  CODE_SUBMITTED,
  BOARD_SELECTED
} from '../actions/actionTypes';

const updateBoardCode = (code, action) => {
  return code.map((peg, i) => {
    if (i !== action.pegIndex) {
      return peg;
    }

    return action.color;
  });
}

const board = (state = [], action) => {
  switch (action.type) {
    case NEW_GAME_STARTED:
      return action.board;
    case CODE_SUBMITTED:
      return state.map((row, i) => {
        if (i !== action.index) {
          return row;
        }

        return {
          ...row,
          key: action.key
        }
      });
    case BOARD_SELECTED:
      return state.map((row, i) => {
        if (i !== action.boardIndex) {
          return row;
        }

        return {
          ...row,
          code: updateBoardCode(state[action.boardIndex].code, action)
        }
      });
    default:
      return state;
  }
};

export default board;