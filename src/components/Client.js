import React from 'react'


export const Client=({client})=>{
    return(
      <div>
    <u><h2>{client.name}</h2></u>
    <b>Age:</b> {client.age}<br/>
    <b>Chore:</b> {client.chore}<br />
    <b>Job:</b>{client.job}
      </div>
    )
  }
