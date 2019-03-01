import {combineReducers} from 'redux'
import clientsReducer from './clientsReducer'
import usersReducer from './usersReducer'



 const rootReducer= combineReducers({
  clients: clientsReducer,
  user: usersReducer
})

export default rootReducer
