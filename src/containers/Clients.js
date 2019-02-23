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

componentDidMount=()=>{
  this.props.fetchClients()
}

displayClients=()=>{
  this.props.clients.map(client=>{
    return(<Client client={client} />)
  })
}

  render(){


    return(

<div>
{console.log(this.props.clients)}

</div>

    )
  }
}

const mapStateToProps=(state)=>{
  return {clients: state.clients}
}

export default connect(mapStateToProps,{fetchClients})(Clients)
