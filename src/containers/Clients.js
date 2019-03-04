import React, {Component} from 'react'
import {fetchClients} from '../actions/clients'
import {connect} from 'react-redux'
import {Client} from '../components/Client'
import {loggedIn} from '../App'
import {deleteClient} from '../actions/clients'


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
    return(<Client key={client.id} loggedIn={loggedIn} deleteClient={this.props.deleteClient}client={client} />)
  })
}

  render(){


    return(

<div>
{this.displayClients()}
</div>

    )
  }
}

const mapDispatchToProps=()=>{

}
export default connect(null,{deleteClient})(Clients)
