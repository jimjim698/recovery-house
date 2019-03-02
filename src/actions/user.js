export const signup = (user)=>{
  return dispatch=>{
    debugger
    return fetch('http://localhost:3001/api/users',{
      method: 'POST',
      body: JSON.stringify({user: user}),
      headers:{'Content-Type': 'application/json'}
    }).then(response=> response.json()).then(client=>{
      return dispatch({type: 'SET_USER', payload: user})
    })
  }
}
