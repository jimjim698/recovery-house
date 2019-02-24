function clientsReducer(state=[], action){

  switch(action.type){
    case "ADD_CLIENT":
    console.log(action)
    return state.concat(action.client)
    case 'LOADING_CLIENTS':
    return state
    case "FETCH_CLIENTS":
    return action.payload
    case "EDIT_CHORE":
    const newState = state
    const index = state.findIndex(i=> action.payload)
    newState[index].chore = action.chore
    return newState
     default: return state
  }
}

export default clientsReducer
