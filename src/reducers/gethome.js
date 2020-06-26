import { GET_HOME } from '../actions/gethome';
import { UPDATE_LIKES } from '../actions/updatelike';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_HOME:
      return { ...state, ...action.payload };
    case UPDATE_LIKES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default reducer;