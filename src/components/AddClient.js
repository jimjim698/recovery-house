import React, {Component} from 'react'

export default class AddClient extends Component{
  constructor(){
    super()
    this.state={
      clients: [],
      newclient:{
      name: "",
      age: "",
      chore:""
    }
    }
  }

  handleChange=(event)=>{
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }




  render(){

    return(
      <div>
      <form>
      <label>Client Name</label><br/>
      <input onChange={this.handleChange} name="name" type="text"/><br />
      <label>Client Age</label><br/>
      <input onChange={this.handleChange} name="age" type="text" /><br />
      <label>Client Chore</label><br/>
      <input onChange={this.handleChange}  name="chore" type='text' /><br/>
      <input type="submit"/>
      </form>
      {console.log(this.state)}
      </div>
    )
  }
}
