import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import notFound from './notFoundReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  notFound
});

export default rootReducer;
