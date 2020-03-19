import {
  NEW_GAME_STARTED,
  NEW_TURN,
  GAME_ENDED
} from '../actions/actionTypes';

const infoDefaultState = {
  active: false,
  turn: 0,
  win: false,
  gameOver: false
};

const info = (state = infoDefaultState, action) => {
  switch (action.type) {
    case NEW_GAME_STARTED:
      return {
        active: true,
        turn: 1,
        gameOver: false
      };
    case NEW_TURN:
      return {
        ...state,
        turn: action.newTurn
      }
    case GAME_ENDED:
      return {
        ...state,
        win: action.win,
        gameOver: true
      };
    default:
      return state;
  }
};

export default info;