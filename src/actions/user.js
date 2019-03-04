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
