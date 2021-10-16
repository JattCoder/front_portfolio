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

      const work = action.payload.jobs;
      work.forEach(job => {
        if (job.id === 1) {
          job.responsibility = 'Delivered excellent customer service and adhered to standard practices to maximize sales and minimize shrinkage.'
        } else if (job.id === 2) {
          job.responsibility = 'Maintained strong education in latest technologies, software and hardware products for use in various projects.'
        } else if (job.id === 3) {
          job.responsibility = 'Streamlined Scrum and Kanban methodologies into development processes to standardize and accelerate operations.'
        }
      })

      return {
        about: action.payload.about,
        apps: action.payload.apps,
        education: action.payload.education,
        home: action.payload.home,
        jobs: work,
        languages: action.payload.languages
      };
    case UPDATE_LIKES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default reducer;