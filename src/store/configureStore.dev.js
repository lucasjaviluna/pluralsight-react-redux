import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const composeEnhancers = typeof window === 'object' &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk, reduxImmutableStateInvariant())
    // other store enhancers if any
  );
  return createStore(rootReducer, initialState, enhancer);
}
