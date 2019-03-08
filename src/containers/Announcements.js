import React, {Component} from 'react'
import {fetchAnnouncements} from '../actions/announcements'
import {connect} from 'react-redux'
import {Announcement} from '../components/Announcement'

class Announcements extends Component{




  displayAnnouncements=()=>{
    return this.props.announcements.map(announcement=>{
      return(
        <Announcement announcement={announcement} likeAnnouncement={this.props.likeAnnouncement} dislikeAnnouncement={this.props.dislikeAnnouncement}/>
      )
    })
  }





  render(){

    return(

      <div>
        {this.displayAnnouncements()}
      </div>
    )
  }
}




export default connect(null)(Announcements)
