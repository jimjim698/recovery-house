import React from 'react'



export const User=({user, deleteUser, loggedIn})=>{
    return(
      <div>
    <u><h2>{user.username}</h2></u>
    <b>Age:</b> {user.position}<br/>
      {!!loggedIn() && deleteUser ? <button onClick={()=>deleteUser(user.id)}>Delete User</button>: false}

      </div>
    )
  }
