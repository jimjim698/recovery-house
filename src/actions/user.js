const url = 'http://localhost:3001/api/users'


export const signup = (user, callback)=>{
  return dispatch=>{
    return fetch(url,{
      method: 'POST',
      body: JSON.stringify({user: user}),
      headers:{'Content-Type': 'application/json'}
    }).then(response=> response.json()).then(user=>{
      sessionStorage.setItem('current', user.username)
       dispatch({type: 'SET_USER', payload: user.username})
       callback()
    }).catch(error=> console.log('got the error',error))
  }
}





export const login = (user, callback)=>{
  return dispatch=>{
    return fetch(`${url}/login`,{
      method: 'POST',
      body: JSON.stringify({user: user}),
      headers:{'Content-Type': 'application/json'}
    }).then(response=> {
      response.json()
    }).then(user=>{
      sessionStorage.setItem('current', user.username)
       dispatch({type: 'SET_USER', payload: user.username})

     }).catch(error=>console.log("gitcha",error))
  }
}
