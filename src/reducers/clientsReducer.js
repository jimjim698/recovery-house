function clientsReducer(state={loading: false, clients:[]}, action){
  switch(action.type){
    case "ADD_CLIENT":
    console.log(action)
    return [...state, action.client]
    case 'LOADING_CLIENTS':
    return {...state, loading: true}
    debugger
    case "ADD_CLIENTS":
    return {loading: false, clients: action.clients}
     default: return state
  }
}

export default clientsReducer
