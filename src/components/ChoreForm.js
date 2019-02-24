import React, {Component} from 'react'

export class ChoreForm extends Component{
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


  render(){
  return(
    <React.Fragment>
    <form>
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
