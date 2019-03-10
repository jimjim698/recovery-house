import React, {Component} from 'react'


export default class Staff extends Component{


  guestView=()=>{
    return this.props.users.map(user=>{
        return <h3>{user.username} - {user.position}</h3>
      })
    }


  userView=()=>{
      return this.props.users.map(user=>{
        return <h3>{user.username} - {user.position} <br/><h5> <button onClick={()=> this.props.deleteUser(user.id)}>Delete User</button></h5></h3>
      })
    }




  render(){

  return(
    <div>

    <h1>Meet Our Staff</h1>
    {!!sessionStorage.current ? this.userView() : this.guestView()}

    </div>
  )
}
}
