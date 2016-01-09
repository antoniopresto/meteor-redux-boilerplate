import { count } from '../reducers'
import { createStore, combineReducers } from 'redux'
import { createHistory } from 'history'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'

const reducer = combineReducers({
  count,
  routing: routeReducer
})

const store = createStore(reducer)
const history = createHistory()

syncReduxAndRouter(history, store)

export default store
