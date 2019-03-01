function usersReducer(state="", action){
  switch(action.type){
    case 'SET_USER':
    debugger
    return {...state, current:action.payload }

    default: return state
  }
}

export default usersReducer
