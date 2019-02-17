import React, {Component} from 'react'


export default class Clients extends Component{


handle=()=>{
  return(
    "Hey"
  )
}

  render(){


    return(

<div>
{this.props.something}
{console.log(this.props.somethin)}
</div>

    )
  }
}
