import React, {Component} from 'react'
import AnnouncementForm from './AnnouncementForm'
import {fetchUsers} from '../actions/users'
import {connect} from 'react-redux'
import {Announcement} from '../components/Announcement'
import Announcements from './Announcements'
import {fetchAnnouncements} from '../actions/announcements'
import {likeAnnouncement} from '../actions/announcements'
import{dislikeAnnouncement} from '../actions/announcements'
import {deleteAnnouncement} from '../actions/announcements'


  class AnnouncementContainer extends Component{


    componentDidMount=()=>{

      this.props.fetchAnnouncements()
    }

    displayUsers=()=>{
      return this.props.users.map(user=>{

        return <div>{user.username}</div>
      })
    }





  render(){
    const guestView = (
      <div>
          <Announcements announcements={this.props.announcements} likeAnnouncement={this.props.likeAnnouncement} dislikeAnnouncement={this.props.dislikeAnnouncement} deleteAnnouncement={()=> alert('You do not have permission to delete an announcement')}/>
          </div>
        )


      const userView = (
        <div>
          <AnnouncementForm/>
          <Announcements announcements={this.props.announcements} likeAnnouncement={this.props.likeAnnouncement} dislikeAnnouncement={this.props.dislikeAnnouncement} deleteAnnouncement={this.props.deleteAnnouncement}/>
          </div>
        )

    return(

      <div>

      <h1>Announcements</h1>

      {!!sessionStorage.current ? userView : guestView}
    </div>



    )
  }
}

const mapStateToProps =(state)=>{
  return{ users: state.user.all, announcements: state.announcements}
}

export default connect(mapStateToProps,{fetchUsers, fetchAnnouncements, likeAnnouncement, dislikeAnnouncement, deleteAnnouncement})(AnnouncementContainer)
