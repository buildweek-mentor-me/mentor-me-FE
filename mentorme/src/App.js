import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import QuestionsList from './components/QuestionsList';
import PrivateRoute from './components/PrivateRoute';
import AddQuestion from './components/AddQuestion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/signin" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute exact path="/questions" component={QuestionsList} />
        <PrivateRoute exact path="/add-question" component={AddQuestion} />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
