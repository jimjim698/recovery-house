import React, {Component} from 'react'
import {Client} from '../components/Client'
import {connect} from 'react-redux'
import {addClient} from '../actions/clients'


let newClients =[]
class AddClient extends Component{
  constructor(){
    super()
    this.state={
      name: "",
      age: "",
      chore:"",
      job: ""
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
    this.props.addClient(this.state)
    newClients.push(this.state)
    this.setState({
      name:"",
      age: "",
      chore:"",
      job: ""
    })
  }

  displayNewClients =()=>{
    return newClients.map(client=>{
      return(
        <Client client={client}/>
      )
    })
  }



  render(){

    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>Client Name</label><br/>
      <input onChange={this.handleChange} name="name" type="text" value={this.state.name}/><br/>
      <label>Client Age</label><br/>
      <input onChange={this.handleChange} name="age" type="text" value={this.state.age}/><br/>
      <label>Client Chore</label><br/>
      <input onChange={this.handleChange}  name="chore" type='text'value={this.state.chore} /><br/>
      <label>Client Job</label><br/>
      <input onChange={this.handleChange} name="job" type="text" value={this.state.job}/><br/>
      <input type="submit"/>
      </form><br/>
    {this.displayNewClients()}
      </div>
    )
  }
}



export default connect(null,{addClient})(AddClient)
