import React, {Component} from 'react'
import {fetchClients} from '../actions/clients'
import {connect} from 'react-redux'
import {Client} from '../components/Client'


 class Clients extends Component{


handle=()=>{
  return(
    <div>
      Hey

    </div>
  )
}


displayClients=()=>{
return this.props.clients.map(client=>{
    return(<Client client={client} />)
  })
}

  render(){


    return(

<div>
{console.log(this.props)}
{this.displayClients()}
</div>

    )
  }
}


export default Clients
