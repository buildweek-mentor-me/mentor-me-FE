import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import QuestionsList from './components/QuestionsList';
import PrivateRoute from './components/PrivateRoute';
import EditQuestion from './components/EditQuestion';
import AddQuestion from './components/AddQuestion';
import QuestionDetails from './components/QuestionDetails';
import AnswersList from './components/AnswersList';
import AddAnswer from './components/AddAnswer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header {...this.props} />
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute exact path="/questions" component={QuestionsList} />
        {/*<PrivateRoute exact path="/questions/:id" component={AnswersList} />*/}
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
