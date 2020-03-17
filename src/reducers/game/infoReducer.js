import {
  NEW_GAME_STARTED,
  NEW_TURN,
  GAME_ENDED
} from '../../actions/actionTypes';

const infoDefaultState = {
  active: false,
  turn: 0
};

const info = (state = infoDefaultState, action) => {
  switch (action.type) {
    case NEW_GAME_STARTED:
      return {
        active: true,
        turn: 0
      };
    case NEW_TURN:
      return {
        ...state,
        turn: action.turn + 1
      }
    case GAME_ENDED:
      return {
        ...state,
        active: false
      };
    default:
      return state;
  }
};

export default info;