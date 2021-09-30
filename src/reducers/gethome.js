import { GET_HOME } from '../actions/gethome';
import { UPDATE_LIKES } from '../actions/updatelike';

const data = {
  about: null,
  apps: null,
  education: null,
  home: null,
  jobs: null,
  languages: null
}

const reducer = (state = data, action) => {
  switch (action.type) {
    case GET_HOME:
      return {
        about: action.payload.about,
        apps: action.payload.apps,
        education: action.payload.education,
        home: action.payload.home,
        jobs: action.payload.jobs,
        languages: action.payload.languages
      };
    case UPDATE_LIKES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default reducer;