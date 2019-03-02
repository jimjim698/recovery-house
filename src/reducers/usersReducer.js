function usersReducer(state="", action){
  switch(action.type){
    case 'SET_USER':
    return {...state, current:action.payload }
    default: return state
  }
}

export default usersReducer
