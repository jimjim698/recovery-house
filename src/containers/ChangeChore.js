import React, {Component} from 'react'
import ChoreForm from '../containers/ChoreForm'


export default class ChangeChore extends Component{
  constructor(){
    super()
    this.state={

    }
  }


handleClick=(client)=>{
  document.getElementByClassName("chore").innerHTML("Hi")
}

displayChores=()=>{
  return this.props.clients.map(client=>{
    return(

      <ChoreForm key={client.id} client={client} handleSubmit={this.handleSubmit}/>
    )
  })
}



  render(){

    return(
      <div>
      <h1>Change Client Chores</h1>
      {console.log(this.props.clients)}
      {this.displayChores()}
      <div className="chore">
      </div>
      </div>
    )

  }
}
