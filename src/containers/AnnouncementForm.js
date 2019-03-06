import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postAnnouncement} from '../actions/announcements'

 class AnnouncementForm extends Component{
  constructor(){
    super()
    this.state={
      content: "",
      likes: 0,
      dislikes: 0
    }
  }




handleChange=(e)=>{
  const {name, value} = e.target
  this.setState({
    [name]: value
  })
}

handleSubmit=(e)=>{
  e.preventDefault()
  this.props.postAnnouncement(this.state)
}







  render(){
    return(

      <div>
      <form onSubmit={this.handleSubmit}>

      <textarea name="content" onChange={this.handleChange}value={this.state.content}/><br/>
      <input type="submit"/>

      </form>
      {console.log(this.state)}

      </div>



    )
  }
}

export default connect(null,{postAnnouncement})(AnnouncementForm)
