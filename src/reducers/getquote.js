import { GET_QUOTE } from '../actions/getquote';
const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_QUOTE:
       return { ...state, quote: action.data.quote };
    default:
       return state;
  }
};
export default reducer;