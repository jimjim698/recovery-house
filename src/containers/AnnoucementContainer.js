import React, {Component} from 'react'
import AnnouncementForm from './AnnouncementForm'
import {fetchUsers} from '../actions/user'
import {connect} from 'react-redux'


  class AnnouncementContainer extends Component{


    componentDidMount=()=>{
      this.props.fetchUsers()
    }

    displayUsers=()=>{
      return this.props.users.map(user=>{
        console.log(user)
        return <div>{user.username}</div>
      })
    }




  render(){
    return(

      <div>

      <h1>Announcements</h1>
      {this.displayUsers()}
      <AnnouncementForm/>

      </div>



    )
  }
}

const mapStateToProps =(state)=>{
  return{ users: state.user.all}
}

export default connect(mapStateToProps,{fetchUsers})(AnnouncementContainer)
