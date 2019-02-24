import React, {Component} from 'react'
import {editChore} from '../actions/clients'
import {connect} from 'react-redux'


 class ChoreForm extends Component{
  constructor(props){
    super(props)
    this.state={
      chore: props.client.chore
    }
  }

  handleChange=(e)=>{
    this.setState({
      chore: e.target.value
    })
  }

  handleSubmit=()=>{
    this.props.editChore(this.props.client.id, this.state.chore)

  }


  render(){
  return(
    <React.Fragment>
    <form onSubmit={this.handleSubmit}>
    {this.props.client.name}<br/>
    <input
     type='text'
      value={this.state.chore}
      onChange={this.handleChange}/>
    <input type='submit'/><br/><br/>
    </form>
    {console.log(this.state.chore)}
    </React.Fragment>
  )
}
}

export default connect(null, {editChore})(ChoreForm)
