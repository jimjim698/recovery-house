const initialState=[]


export default function annoucementsReducer(state=initialState,action){

  switch(action.type){
    case 'ADD_ANNOUNCEMENT':
      return [...state, action.payload]
    case 'FETCH_ANNOUNCEMENTS':
      return action.payload
    case 'UP_LIKE':
      let newState= state.map(announcement=>{
        if (announcement.id === action.announcementId){
          return {...announcement, likes: +announcement.likes}
        }else{
          return announcement
        }
      })

      return newState
    case 'DOWN_LIKE':
        newState=state.map(announcement=>{
        if(announcement.id=== action.announcementId){
          return{...announcement, dislikes: +announcement.dislikes}
        }else{
          return announcement
        }
      })

      case 'DELETE_ANNOUNCEMENT':
      return state.filter(announcement=> announcement.id !== action.announcementId)
      return newState
      default: return state
  }
}
