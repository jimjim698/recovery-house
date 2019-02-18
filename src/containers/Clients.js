import React, {Component} from 'react'


export default class Clients extends Component{


handle=()=>{
  return(
    <div>
      Hey

    </div>
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
