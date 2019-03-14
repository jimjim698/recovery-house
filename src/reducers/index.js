import {combineReducers} from 'redux'
import clientsReducer from './clientsReducer'
import usersReducer from './usersReducer'
import announcementsReducer from './announcementsReducer'



 const rootReducer= combineReducers({
  clients: clientsReducer,
  user: usersReducer,
  announcements: announcementsReducer
})

export default rootReducer
