const url = 'http://localhost:3001/api/announcements'


export const postAnnouncement=(announcement)=>{
  return (dispatch)=>{
    return fetch(url, {
      method: 'POST',
      body:JSON.stringify({announcement: announcement}),
      headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.current}
    }).then(response=> response.json())
    .then(announcements=>{

    })
  }
}


export const addClient = (client)=>{
  return (dispatch)=>{
    return fetch(url,{
      method: 'POST',
      body:JSON.stringify({client: client}),
      headers: {'Content-Type': 'application/json'}
    }).then(response=> response.json()).then(client=>{
      return dispatch({type: 'ADD_CLIENT', payload: client})
    })
  }
}
