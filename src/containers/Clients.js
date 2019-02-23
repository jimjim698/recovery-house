import React, {Component} from 'react'
import {fetchClients} from '../actions/clients'
import {connect} from 'react-redux'


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

  render(){


    return(

<div>
{this.props.something}
{console.log(this.props.clients)}
</div>

    )
  }
}

const mapStateToProps=(state)=>{
  return {clients: state.clients}
}

export default connect(mapStateToProps,{fetchClients})(Clients)
