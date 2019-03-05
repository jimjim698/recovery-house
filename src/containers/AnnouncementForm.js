import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class AnnouncementForm extends Component{
  constructor(){
    super()
    this.state={
      content: "",
      likes: 0,
      dislikes: 0
    }
  }






  





  render(){
    return(

      <div>
      <form>

      <textarea /><br/>
      <input type="submit"/>

      </form>


      </div>



    )
  }
}
