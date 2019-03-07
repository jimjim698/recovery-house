import React, {Component} from 'react'
import {fetchAnnouncements} from '../actions/announcements'
import {connect} from 'react-redux'
import {Announcement} from '../components/Announcement'

class Announcements extends Component{




  displayAnnouncements=()=>{

  }

  componentDidMount=()=>{
    this.props.fetchAnnouncements()
  }




  render(){

    return(

      <div></div>
    )
  }
}


const mapStateToProps=(state)=>{
  return {
    announcements: state.annoucements
  }
}

export default connect(mapStateToProps,{fetchAnnouncements})(Announcements)
