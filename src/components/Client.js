import React, {Component} from 'react'

export class Client extends Component{
  constructor (){
    super()
    this.state={
      likes: 0
    }
  }

  handleClick=(e)=>{
    e.preventDefault()
    this.setState({
      likes: this.state.likes + 1
    })
  }




    render(){

    return(
      <div>
    <u><h2>{this.props.client.name}</h2></u>
    <b>Age:</b> {this.props.client.age}<br/>
    <b>Chore:</b> {this.props.client.chore}<br />
    <b>Job:</b>{this.props.client.job}<br/>
    <button onClick={this.handleClick}> Like  </button> {this.state.likes}
      {!!this.props.loggedIn() && this.props.deleteClient ? <button onClick={()=> this.props.deleteClient(this.props.client.id)}>Delete Client</button>: false}

      </div>
    )
  }
 }
