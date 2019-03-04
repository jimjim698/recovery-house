import React, { Component } from 'react';
import './App.css';
import AddClient from './containers/AddClient'
import {ButtonToolbar} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Community from './containers/Community'
import Chores from './components/Chores'
import Clients from './containers/Clients'
import ChangeChore from './containers/ChangeChore'
import {fetchClients} from './actions/clients'
import {connect} from 'react-redux'
import {Client} from './components/Client'
import Login from './components/Login'
import Signup from './containers/Signup'





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
                  <Button href='/chores/edit'variant="secondary" size="sm">
                  Change Chores
                  </Button>
                </ButtonToolbar>
              </div>
            </header>
            <Router>
              <React.Fragment>
                <Route exact path='/clients/new' component={()=> loggedIn() ? <AddClient/> : <Redirect to='/login'/>}/>
                <Route exact path='/community' component={Community}/>
                <Route exact path='/chores' render ={()=><Chores clients={this.props.clients}/>}/>
                <Route exact path='/clients' render={()=><Clients clients={this.props.clients}/>}/>
                <Route exact path='/chores/edit' render={ ()=> loggedIn() ? <ChangeChore clients={this.props.clients}/>:<Redirect to='/login'/>}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/logout' component={()=>logout()}/>
                <div className="Sessions">
                  <Link to={'/login'}>Log In &nbsp;</Link>

                  <Link to={'/logout'}>Log Out &nbsp;</Link>

                  <Link to={'/signup'}>Create New Account</Link>
                </div>
              </React.Fragment>
      </Router>
      </div>
      </div>

    );
  }
}

  const logout=()=>{
    if(sessionStorage['current']) sessionStorage.removeItem('current')
    return <Redirect to='login'/>
  }

  const loggedIn=()=>{
    return !!sessionStorage["current"]
  }


const mapStateToProps=(state)=>{
  return {clients: state.clients, user:state.user}
}

export default connect(mapStateToProps,{fetchClients})(App);
