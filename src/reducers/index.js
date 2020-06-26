import { combineReducers } from 'redux'
import quote from './getquote'
import gethome from './gethome'

const rootreducers =  combineReducers({
  quote,gethome
})

export default rootreducers