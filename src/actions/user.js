const url = 'http://localhost:3001/api/users'


export const signup = (user, callback)=>{
  return dispatch=>{
    return fetch(url,{
      method: 'POST',
      body: JSON.stringify({user: user}),
      headers:{'Content-Type': 'application/json'}
    }).then(response=> response.json()).then(user=>{
      debugger
      sessionStorage.setItem('current', user.username)
       dispatch({type: 'SET_USER', payload: user.username})
       callback()
    }).catch(error=> alert("Sorry, The Information Provided Is Invalid. Please Review Your Information And Try Again."))
  }
}


export const login = (user, callback)=>{
  return dispatch=>{
    return fetch(`${url}/login`,{
      method: 'POST',
      body: JSON.stringify({user: user}),
      headers:{'Content-Type': 'application/json'}
    }).then(response=> response.json()).then(user=>{
      sessionStorage.setItem('current', user.username)
       dispatch({type: 'SET_USER', payload: user.username})
       callback()
    }).catch(error=> alert("Sorry, The Information Provided Is Invalid. Please Review Your Information And Try Again."))
  }
}

export const deleteUser = (id)=>{
  return dispatch=>{
    return fetch(`${url}/${id}`,{
      method: 'DELETE',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response=> response.json()).then(user=>{
      dispatch({type: 'DELETE_USER', payload: user.username})
    })
  }
}

export function fetchUsers(){

    return (dispatch)=>{
      dispatch({type: "LOADING_USERS"})
    return fetch(url).then(response=>{
      return response.json()
    }).then(users=>{
      return dispatch({type:"FETCH_USERS", payload: users})
    })
  }
}

export function fetchClients(){

  return (dispatch)=>{
    dispatch({type: 'LOADING_CLIENTS'})
    return fetch(url).then(response=>{
      return response.json()
  }).then(clients=>{
      return dispatch({type: 'FETCH_CLIENTS', payload: clients})
  })
 }
}
