import React, {Component} from 'react'
import Client from './Client'
import {connect} from 'react-redux'



class AddClient extends Component{
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
    this.props.addResident(this.state)
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

      </div>
    )
  }
}

const mapDispatchToProps= dispatch=>({
  addResident: resident=> dispatch({ type:'ADD_RESIDENT', resident: resident})
})

export default connect(null,mapDispatchToProps)(AddClient)
