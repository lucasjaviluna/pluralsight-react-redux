import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function notFoundReducer(state = initialState.notFound, action) {
  if (action.type == types.NOT_FOUND) {
    return state + 1;
  }

  return state;
}
