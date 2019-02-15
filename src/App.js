import React, { Component } from 'react';
import './App.css';
import AddClient from './components/AddClient'

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <h2>Recovery House</h2>

        </header>
        <AddClient />
      </div>

      </div>

    );
  }
}

export default App;
