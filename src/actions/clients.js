export const addClient = (client)=>{
  return (dispatch)=>{
    return fetch('http://localhost:3001/api/clients',{
      method: 'POST',
      body:JSON.stringify({client: client}),
      headers: {'Content-Type': 'application/json'}
    }).then(response=> response.json()).then(client=>{
      return dispatch({type: 'ADD_CLIENT', payload: client})
    })
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
