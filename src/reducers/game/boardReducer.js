import {
  NEW_GAME_STARTED,
  NEW_TURN,
  CODE_SUBMITTED,
  BOARD_SELECTED
} from '../../actions/actionTypes';

const updateBoardCode = (array, action) => {
  return array.map((peg, index) => {
    if (index !== action.pegIndex) {
      return peg;
    }

    return {
      ...peg,
      ...action.pegIndex
    }
  });
}

const board = (state = {}, action) => {
  switch (action.type) {
    case NEW_GAME_STARTED:
      return action.board;
    case NEW_TURN:
      return {
        ...state,
        [action.newTurn]: {
          ...state[action.newTurn],
          active: true
        }
      };
    case CODE_SUBMITTED:
      return {
        ...state,
        [action.turn]: {
          ...state[action.turn],
          key: action.key,
          active: false
        }
      };
    case BOARD_SELECTED:
      return {
        ...state,
        [action.boardIndex]: {
          ...state[action.boardIndex],
          code: updateBoardCode(state[action.boardIndex].code, action)
        }
      }
    default:
      return state;
  }
};

export default board;