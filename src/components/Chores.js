import React, {Component} from 'react'
import {Chore} from './Chore'

export default class Chores extends Component{

displayChores = ()=>{
  return this.props.clients.map(client=>{
    return <h3><li>  <Chore client={client}/></li></h3>
  })
}



  render(){


    return(
      <div >
        <h1>Current Chore Assignments</h1>
        <ol className="Chores">
        {this.displayChores()}
        </ol>
      </div>
    )
  }
}
