import React, { Component } from 'react';
import './App.css';
import AddClient from './containers/AddClient'
import {ButtonToolbar} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Community from './containers/Community'
import Chores from './components/Chores'
import Clients from './containers/Clients'
import ChangeChore from './containers/ChangeChore'
import {fetchClients} from './actions/clients'
import {connect} from 'react-redux'
import {Client} from './components/Client'




class App extends Component {

  constructor(){
    super()
    this.state={
      hello:'hello'
    }
  }


  componentDidMount=()=>{
    this.props.fetchClients()
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h2>Recovery House</h2>
              <div>
                <ButtonToolbar>
                  <Button href='/clients' variant="secondary" size="sm">
                    Clients
                  </Button>
                  <Button href='/community' variant="secondary" size="sm">
                  Community
                  </Button>

                  <Button href='/chores'variant="secondary" size="sm">
                  Chores
                  </Button>
                  <Button href='/clients/new'variant="secondary" size="sm">
                  Add Client
                  </Button>
                  <Button href='/change_chore'variant="secondary" size="sm">
                  Change Chores
                  </Button>
                </ButtonToolbar>
              </div>
            </header>
            <Router>
              <React.Fragment>
                <Route exact path='/clients/new' component={AddClient}/>
                <Route exact path='/community' component={Community}/>
                <Route exact path='/chores' component={Chores}/>
                <Route exact path='/clients' render={routerProps=><Clients {...routerProps} clients={this.props.clients}/>}/>
                <Route exact path='/change_chore' render={routerProps=><ChangeChore {...routerProps} clients={this.props.clients}/>}/>
              </React.Fragment>
      </Router>
      </div>

      </div>

    );
  }
}

const mapStateToProps=(state)=>{
  return {clients: state.clients.clients}
}

export default connect(mapStateToProps,{fetchClients})(App);
