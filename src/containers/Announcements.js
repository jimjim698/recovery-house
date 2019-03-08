import React, {Component} from 'react'
import {fetchAnnouncements} from '../actions/announcements'
import {connect} from 'react-redux'
import {Announcement} from '../components/Announcement'

class Announcements extends Component{




  displayAnnouncements=()=>{
    
    if (this.props.announcements.length > 0 && this.props.announcements[0].id < this.props.announcements[1].id){this.props.announcements.reverse()}
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
