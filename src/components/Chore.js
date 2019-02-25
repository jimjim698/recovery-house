import React from 'react'

export const Chore = ({client})=>{
  return(
    <h2>{client.name} is currently assigned to {client.chore}</h2>
  )
}
