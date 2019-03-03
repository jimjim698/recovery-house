let initialState=""

function usersReducer(state=initialState, action){
  switch(action.type){
    case 'SET_USER':
    return {...state, current:action.payload }
    default: return state
  }
}

export default usersReducer
