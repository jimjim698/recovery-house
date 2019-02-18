import React, { Component } from 'react';
import './App.css';
import AddClient from './containers/AddClient'
import {ButtonToolbar} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Community from './containers/Community'
import Chores from './components/Chores'
import Clients from './containers/Clients'
import ChangeChore from './components/ChangeChore'




class App extends Component {

  constructor(){
    super()
    this.state={
      hello:'hello'
    }
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
                  <Button href='/add_client'variant="secondary" size="sm">
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
                <Route exact path='/add_client' component={AddClient}/>
                <Route exact path='/community' component={Community}/>
                <Route exact path='/chores' component={Chores}/>
                <Route exact path='/clients' component={Clients}/>
                <Route exact path='/change_chore' component={ChangeChore}/>
              </React.Fragment>
      </Router>
      </div>

      </div>

    );
  }
}

export default App;
