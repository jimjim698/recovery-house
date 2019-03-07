import {combineReducers} from 'redux'
import clientsReducer from './clientsReducer'
import usersReducer from './usersReducer'
import annoucementsReducer from './announcementsReducer'



 const rootReducer= combineReducers({
  clients: clientsReducer,
  user: usersReducer,
  announcements: annoucementsReducer
})

export default rootReducer
