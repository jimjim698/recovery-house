export const addClient = (client)=>{
  return {
    type: "ADD_CLIENT",
    client
  }
}

export function fetchClients(){
  
  return (dispatch)=>{
    dispatch({type: 'LOADING_CLIENTS'})
    return fetch('http://localhost:3001/api/clients').then(response=>{
      return response.json()
  }).then(clients=>{
      return dispatch({type: 'FETCH_CLIENTS', payload: clients})
  })
 }
}
