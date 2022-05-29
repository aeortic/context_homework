import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import combinedReducer from '../reducers/combinedReducer';

export default function configureStore(preloadedState) {
  return createStore(
    combinedReducer,
    preloadedState,
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
