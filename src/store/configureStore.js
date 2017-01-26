import R from 'ramda'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import { isProd } from '../utils/env'
import rootReducer from '../reducers'

const devTools = window.devToolsExtension
  ? window.devToolsExtension()
  : R.indentity

// apMiddleware :: [Redux.Middleware] -> Redux.ApplayedMiddleware
const apMiddleware = middleware => applyMiddleware(...middleware)

// processMiddleware :: [Redux.Middleware] -> Redux.ComposedMiddleware
const processMiddleware = R.ifElse(
  isProd,
  apMiddleware,
  middleware => compose(apMiddleware(middleware), devTools)
)

// configureStore :: a -> Redux.Store
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    processMiddleware([thunkMiddleware])
  )
}

