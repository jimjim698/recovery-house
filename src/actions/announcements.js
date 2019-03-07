const url = 'http://localhost:3001/api/announcements'


export const postAnnouncement=(announcement)=>{
  return (dispatch)=>{
    return fetch(url, {
      method: 'POST',
      body:JSON.stringify({announcement: announcement}),
      headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.current}
    }).then(response=> response.json())
    .then(announcement=>{

      return dispatch({type: 'ADD_ANNOUNCEMENT', payload: announcement})
    })
  }
}


export function fetchAnnouncements(){
  return (dispatch)=>{
    return fetch(url).then(response=> response.json()).then(announcements=>{
      return dispatch({type:'FETCH_ANNOUNCEMENTS', payload: announcements})
    })
  }
}


export function likeAnnouncement(announcement){
  announcement.likes +=1
  debugger
}
