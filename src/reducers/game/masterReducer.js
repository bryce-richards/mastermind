import {
  NEW_GAME_STARTED
} from '../../actions/actionTypes';

const master = (state = [], action) => {
  switch (action.type) {
    case NEW_GAME_STARTED:
      return action.master;
    default:
      return state;
  }
};

export default master;