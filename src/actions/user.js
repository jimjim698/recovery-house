export const signup = (user)=>{
  return dispatch=>{
    return fetch('http://localhost:3001/api/users',{
      method: 'POST',
      body: JSON.stringify({user: user}),
      headers:{'Content-Type': 'application/json'}
    }).then(response=> response.json()).then(client=>{
      sessionStorage.setItem('current', client.username)
      return dispatch({type: 'SET_USER', payload: user.username})
    })
  }
}
