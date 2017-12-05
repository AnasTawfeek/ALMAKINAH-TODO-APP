import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './pages/Home';
import Users from './pages/Users';
import {Route, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          {/* <a href="/">Home</a>
          <a href="/users">Users</a> */}
          <Link to='/'>Home</Link>
          <Link to='/users'>Users</Link>

          <Link to="/users/friends">My Friends</Link>
          <Link to="/users/team">My Team</Link>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default App;
