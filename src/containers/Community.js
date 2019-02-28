import React, {Component} from 'react'
import {Dropdown} from 'react-bootstrap'

export default class Community extends Component{


                 constructor(){
                    super()
                    this.state={
                      name: ""
                    }
                  }

                  handleChange=(e)=>{
                    console.log(e)
                  }


  render(){


    return(
      <div>
      "Hey"
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Who Are You
  </Dropdown.Toggle>

  <Dropdown.Menu onChange={this.handleChange}>
    <Dropdown.Item  href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

    </div>
    )
  }
}
