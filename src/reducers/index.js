import {combineReducers} from 'redux'
import residentReducer from './residentReducer'



 const rootReducer= combineReducers({
  residents: residentReducer
})

export default rootReducer
