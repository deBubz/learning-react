import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos from './todos'

// main reducer i think

export default combineReducers({ todos, visibilityFilter })
