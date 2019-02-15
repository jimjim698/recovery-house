import React, {Component} from 'react'

export default class Client extends Component{




  render(){

    return(
      <div>
    <u><h2>{this.props.client.name}</h2></u>
    <b>Age:</b> {this.props.client.age}<br/>
    <b>Chore:</b> {this.props.client.chore}
      </div>


    )
  }
}
