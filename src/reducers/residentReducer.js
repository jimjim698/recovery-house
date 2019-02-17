function residentReducer(state=[], action){
  switch(action.type){
    case "ADD_RESIDENT":
    console.log(action)
    return [...state, action.resident]
     default: return state
  }
}

export default residentReducer
