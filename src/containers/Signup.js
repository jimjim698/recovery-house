import React, {Component} from 'react'
import {signup} from '../actions/users'
import {connect} from 'react-redux'

 class Signup extends Component{
  constructor(){
    super()
    this.state={
      username: "",
      password: "",
      position: ""
    }
  }

  handleChange=(event)=>{
    const {name, value}= event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.signup(this.state, ()=> this.props.history.push('/clients'))
  }



  render(){


    return(
      <div>
      <h1>Create New Account</h1>
      <form onSubmit={this.handleSubmit}>
      <label>Username</label><br/>
      <input name='username'onChange={this.handleChange}type='text'value={this.state.username}/><br/>
      <label>Position</label><br/>
      <input name="position" onChange={this.handleChange} type='text' value={this.state.position}/><br/>
      <label>Password</label><br/>
      <input name='password'onChange={this.handleChange} type='password'value={this.state.password}/><br/><br/>
    <input type='submit' value="Create Account"/>


      </form>


      </div>
    )
  }







}


export default connect(null,{signup})(Signup)
