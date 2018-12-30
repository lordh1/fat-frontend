import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import reducer from './store/index'
import App from './App'

require('dotenv').config()

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  // middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)