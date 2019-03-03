const url = 'http://localhost:3001/api/users'


export const signup = (user)=>{
  return dispatch=>{
    return fetch(url,{
      method: 'POST',
      body: JSON.stringify({user: user}),
      headers:{'Content-Type': 'application/json'}
    }).then(response=> response.json()).then(user=>{
      sessionStorage.setItem('current', user.username)
      return dispatch({type: 'SET_USER', payload: user.username})
    })
  }
}


export const login = (user)=>{
  return dispatch=>{
    return fetch(`${url}/login`,{
      method: 'POST',
      body: JSON.stringify({user: user}),
      headers:{'Content-Type': 'application/json'}
    }).then(response=> response.json()).then(user=>{
      sessionStorage.setItem('current', user.username)
      return dispatch({type: 'SET_USER', payload: user.username})
    })
  }
}
