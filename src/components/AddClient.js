import React, {Component} from 'react'
import Client from './Client'


const clients=[]
export default class AddClient extends Component{
  constructor(){
    super()
    this.state={
      name: "",
      age: "",
      chore:""
    }
  }

  handleChange=(event)=>{
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    clients.push(this.state)
    this.setState({
      name:"",
      age:"",
      chore:""
    })
  }

  displayClients=()=>{
    return clients.map(client=>{
      return(<Client client={client}/>)
    })
  }




  render(){

    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>Client Name</label><br/>
      <input onChange={this.handleChange} name="name" type="text" value={this.state.name}/><br />
      <label>Client Age</label><br/>
      <input onChange={this.handleChange} name="age" type="text" value={this.state.age}/><br />
      <label>Client Chore</label><br/>
      <input onChange={this.handleChange}  name="chore" type='text'value={this.state.chore} /><br/>
      <input type="submit"/>
      </form><br/>
      {this.displayClients()}
      {console.log(clients)}
      </div>
    )
  }
}
