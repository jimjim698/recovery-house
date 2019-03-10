let initialState={current:"", all:[]}

function usersReducer(state=initialState, action){
  switch(action.type){
    case 'LOADING_USERS':
    return state
    case "FETCH_USERS":
    return {...state, all: action.payload}
    case 'SET_USER':
    return {...state, current:action.payload }
    case 'DELETE_USER':
    return state.all.filter(user=> user.id !== action.payload.id)
    default: return state
  }
}



export default usersReducer
