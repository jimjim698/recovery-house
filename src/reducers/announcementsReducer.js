const initialState=[]


export default function annoucementsReducer(state=initialState,action){

  switch(action.type){
    case 'ADD_ANNOUNCEMENT':
      return [...state, action.payload]
    case 'FETCH_ANNOUNCEMENTS':

      return action.payload
      default: return state
  }
}
