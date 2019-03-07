import React, {Component} from 'react'
import {fetchAnnouncements} from '../actions/announcements'
import {connect} from 'react-redux'
import {Announcement} from '../components/Announcement'

class Announcements extends Component{




  displayAnnouncements=()=>{
    return this.props.announcements.map(announcement=>{
      return(
        <Announcement />
      )
    })
  }

  componentDidMount=()=>{
    this.props.fetchAnnouncements()
  }




  render(){

    return(

      <div>
        {this.displayAnnouncements()}
      </div>
    )
  }
}


const mapStateToProps=(state)=>{
  return {
    announcements: state.announcements
  }
}

export default connect(mapStateToProps,{fetchAnnouncements})(Announcements)
