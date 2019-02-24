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
    debugger
    return {...state, clients: state.clients.map(c=> c.id === action.payload ? c.chore === action.chore : c )}
     default: return state
  }
}

export default clientsReducer
