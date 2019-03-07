import React, {Component} from 'react'
import AnnouncementForm from './AnnouncementForm'
import {fetchUsers} from '../actions/user'
import {connect} from 'react-redux'
import {Announcement} from '../components/Announcement'
import Announcements from './Announcements'

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
      <Announcements/>

      </div>



    )
  }
}

const mapStateToProps =(state)=>{
  return{ users: state.user.all}
}

export default connect(mapStateToProps,{fetchUsers})(AnnouncementContainer)
