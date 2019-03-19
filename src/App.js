import React, { Component } from 'react';
import './App.css';
import AddClient from './containers/AddClient'
import {ButtonToolbar} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Chores from './components/Chores'
import Clients from './containers/Clients'
import ChangeChore from './containers/ChangeChore'
import {fetchClients} from './actions/clients'
import {connect} from 'react-redux'
import {Client} from './components/Client'
import Login from './containers/Login'
import Signup from './containers/Signup'
import AnnouncementContainer from './containers/AnnoucementContainer'
import {fetchUsers} from './actions/users'
import Staff from './components/Staff'
import {deleteUser} from './actions/users'




class App extends Component {

  componentDidMount=()=>{
    this.props.fetchClients()
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <div className="App">

            <Router>
              <React.Fragment>
                <Link to='/staff' className='clickMe'>Meet The Staff</Link>
          <header className="App-header">
            <h2>Recovery House</h2>
              <div>
                <ButtonToolbar>
                  <Link to="/clients"><Button  variant="secondary" size="sm">Clients
                    Clients
                  </Button></Link>
                <Link to='/announcements'><Button variant="secondary" size="sm">
                  Announcements
                </Button></Link>

              <Link to='/chores'> <Button variant="secondary" size="sm">
                  Chores
                </Button></Link>
              <Link to='/clients/new'><Button variant="secondary" size="sm">
                  Add Client
                </Button></Link>
              <Link to= '/chores/edit'> <Button variant="secondary" size="sm">
                  Change Chores
                </Button></Link>
                </ButtonToolbar>
              </div>
            </header>

                <Route exact path='/clients/new' component={()=> loggedIn() ? <AddClient/> : <Redirect to='/login'/>}/>
                <Route exact path='/annoucements' component={AnnouncementContainer}/>
                <Route exact path='/chores' render ={()=><Chores clients={this.props.clients}/>}/>
                <Route exact path='/clients' render={()=><Clients clients={this.props.clients}/>}/>
                <Route exact path='/chores/edit' render={ ()=> loggedIn() ? <ChangeChore clients={this.props.clients}/>:<Redirect to='/login'/>}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/logout' component={()=>logout()}/>
                <Route exact path='/staff' component={()=><Staff users={this.props.users} deleteUser={this.props.deleteUser}/>}/>
                  <div className="Sessions">


                    <Link to={'/login'}>Log In &nbsp;</Link>
                    <Link to={'/logout'}>Log Out &nbsp;</Link>
                    <Link to={'/signup'}>Create New Account &nbsp;</Link>
                    <Link className="clickMe" to={'/login'}>Meet The Staff</Link>

                </div>
                </React.Fragment>
              </Router>
            </div>
      </div>

    );
  }
}

  export const logout=()=>{
    if(sessionStorage['current']) sessionStorage.removeItem('current')
    return <Redirect to='login'/>
  }

  export const loggedIn=()=>{
    return !!sessionStorage["current"]
  }


const mapStateToProps=(state)=>{
  return {clients: state.clients, user:state.user, users: state.user.all}
}

export default connect(mapStateToProps,{fetchClients, fetchUsers, deleteUser})(App);
