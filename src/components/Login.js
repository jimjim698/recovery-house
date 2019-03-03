import React, {Component} from 'react'
import {login} from '../actions/user'
import {connect} from 'react-redux'

class Login extends Component{

  constructor(){
    super()
    this.state={
      username: "",
      password: ""
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
    this.props.login(this.state)
    this.setState({
      username: "",
      password: ""
    })

  }





  render(){
    return(
      <div>
      <h1>Log In Page</h1>
      <form onSubmit={this.handleSubmit}>
      <label>Username: </label><br/>
      <input onChange={this.handleChange} name="username" type="text" value={this.state.username}/><br/>
      <label>Password: </label><br/>
      <input onChange={this.handleChange} name="password"type="password" value={this.state.password}/><br/><br/>
      <input type="submit"/>

      </form>

      </div>
    )
  }
}

export default connect(null,{login})(Login)
