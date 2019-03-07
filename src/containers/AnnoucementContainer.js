import React, {Component} from 'react'
import AnnouncementForm from './AnnouncementForm'
import {fetchUsers} from '../actions/user'
import {connect} from 'react-redux'
import {Announcement} from '../components/Announcement'
import Announcements from './Announcements'
import {fetchAnnouncements} from '../actions/announcements'


  class AnnouncementContainer extends Component{


    componentDidMount=()=>{
      this.props.fetchUsers()
      this.props.fetchAnnouncements()
    }

    displayUsers=()=>{
      return this.props.users.map(user=>{

        return <div>{user.username}</div>
      })
    }




  render(){
    return(

      <div>

      <h1>Announcements</h1>
      {this.displayUsers()}
      <AnnouncementForm/>
      <Announcements announcements={this.props.announcements}/>
      </div>



    )
  }
}

const mapStateToProps =(state)=>{
  return{ users: state.user.all, announcements: state.announcements}
}

export default connect(mapStateToProps,{fetchUsers, fetchAnnouncements})(AnnouncementContainer)
