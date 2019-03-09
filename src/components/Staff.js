import React, {Component} from 'react'


export class Staff extends Component{


  displayUsers=()=>{
    return this.props.users.map(user=>{
      return <h3>{user.username} - {user.position}</h3> 
    })
  }




  render(){

  return(
    <div>

    <h1>Meet Our Staff</h1>
    <ul>
    {this.displayUsers()}
    </ul>
    </div>
  )
}

}
