let initialState= []

function clientsReducer(state= initialState, action){

  switch(action.type){
    case "ADD_CLIENT":
    return [...state, action.payload]
    case 'LOADING_CLIENTS':
    return state
    case "FETCH_CLIENTS":
    return action.payload
    case "EDIT_CHORE":
    const newState = state
    const index = state.findIndex(i=> action.payload)
    newState[index].chore = action.chore
    return newState
    case 'DELETE_CLIENT':
    return state.filter(client=> client.id !== action.payload.id)

    default: return state
  }
}

export default clientsReducer
