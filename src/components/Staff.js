import React from 'react'

export const Staff= ({users})=>{
  return users.map(user=>{
    return(
    <li>  {user.username}</li>
    )
  })
  return(
    <div>Heyo</div>
  )
}
