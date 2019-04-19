import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import QuestionsList from './components/QuestionsList';
import PrivateRoute from './components/PrivateRoute';
import EditQuestion from './components/EditQuestion';
import AddQuestion from './components/AddQuestion';
import QuestionDetails from './components/QuestionDetails';
import AddAnswer from './components/AddAnswer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute exact path="/questions" component={QuestionsList} />
        <PrivateRoute
          exact
          path="/edit-question/:id"
          component={EditQuestion}
        />
        <PrivateRoute exact path="/add-question" component={AddQuestion} />
        <PrivateRoute path="/questions/:id" component={QuestionDetails} />
        <PrivateRoute path="/questions/:id/add-answer" component={AddAnswer} />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
