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
      default: return state
  }
}
