function clientsReducer(state=[], action){
  switch(action.type){
    case "ADD_CLIENT":
    console.log(action)
    return [...state, action.client]
     default: return state
  }
}

export default clientsReducer
