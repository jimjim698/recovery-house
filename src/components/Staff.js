import React, {Component} from 'react'
import {User} from './User'
import {loggedIn} from '../App'
import {deleteUser} from '../actions/users'
import {connect} from 'react-redux'



 class Staff extends Component{


  displayStaff=()=>{
  return this.props.users.map(user=>{
      return(<User key={user.id} loggedIn={loggedIn} deleteUser={this.props.deleteUser} user={user} />)
    })
  }



  render(){

  return(
    <div>

    <h1>Meet Our Staff</h1>
    {this.displayStaff()}
    </div>
  )
}

}

export default connect(null,{deleteUser})(Staff)
