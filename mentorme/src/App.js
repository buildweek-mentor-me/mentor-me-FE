import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Login} />
      </div>
    );
  }
}

export default App;
