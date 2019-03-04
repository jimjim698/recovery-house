const url = 'http://localhost:3001/api/clients'

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



export const editChore = (clientId, chore)=>{
  return(dispatch)=>{
    return fetch(`http://localhost:3001/api/clients/${clientId}`,{
      method: 'PATCH',
      body: JSON.stringify({clientId: clientId, chore: chore}),
      headers: {'Content-Type': 'application/json'}
    }).then(response=> response.json()).then(client=>{
      return dispatch({type: "EDIT_CHORE", payload: clientId, chore: chore})
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

export const deleteClient = (id)=>{
  return dispatch=>{
    return fetch(`${url}/${id}`,{
      method: 'DELETE',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response=> response.json()).then(user=>{
      dispatch({type: 'DELETE_USER', payload: user})
    })
  }
}
