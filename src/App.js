import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import News from './containers/News';
import Profile from './containers/Profile';
import Login from './containers/Login';
import Menu from './components/Menu';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/news' component={News} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
